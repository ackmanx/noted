import type { Document } from 'mongodb'

import { notes } from '$lib/db/notes.js'

export const load = async function ({ params }) {
  const foldersIdList = []

  const dbFilesForUserAsFlatRecordsArray = await notes
    .aggregate([
      {
        $match: { author: 'ackmanx' },
      },
      {
        $project: {
          // Convert ObjectId to string until I change it on insert
          _id: { $toString: '$_id' },
          path: 1,
          label: 1,
        },
      },
      {
        $sort: { path: 1 },
      },
    ])
    .toArray()

  const builtFileTree = recurse(
    dbFilesForUserAsFlatRecordsArray,
    {
      id: 'root',
      content: 'root',
      children: [],
    },
    1,
    dbFilesForUserAsFlatRecordsArray,
    foldersIdList
  )

  const note = await notes.findOne({ _id: params.id })

  return {
    // File/folder tree in the structure expected FileTree UI component
    fileTree: builtFileTree.children,
    // Tree handler only provides ID on click and I need to know if that is a folder or a file
    // Instead of searching the tree, just use this list
    foldersIdList,
    note,
  }
}

function recurse(
  dbFiles: Document[],
  parent,
  level,
  dbFilesForUser,
  foldersIdList
) {
  const dbFilesForLevel = dbFiles.filter(
    (filterFile) => filterFile.path.split('/').length === level
  )

  for (let dbFile of dbFilesForLevel) {
    const children = dbFilesForUser.filter((filterFile) => {
      const isSelf = filterFile.path === dbFile.path
      const isChild = filterFile.path.startsWith(`${dbFile.path}/`)
      const onCurrentLevel = filterFile.path.split('/').length === level + 1

      return !isSelf && isChild && onCurrentLevel
    })

    if (children.length) {
      foldersIdList.push(dbFile._id)

      parent.children.push(
        recurse(
          children,
          {
            id: dbFile._id,
            fileName: dbFile.path.split('/').at(-1),
            children: [],
          },
          level + 1,
          dbFilesForUser,
          foldersIdList
        )
      )
    } else {
      parent.children.push({
        id: dbFile._id,
        // @ts-ignore
        isLeaf: true,
        fileName: dbFile.path.split('/').at(-1),
        children: [],
      })
    }
  }

  return parent
}

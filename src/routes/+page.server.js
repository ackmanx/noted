import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const foldersIdList = []

  const dbFilesForUser = await notes
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
          // Add this computed field based on if the "text" field exists or not
          isDirectory: {
            $cond: ['$text', false, true],
          },
        },
      },
      {
        $sort: { path: 1 },
      },
    ])
    .toArray()

  const maybe = recurse(
    dbFilesForUser,
    {
      id: 'root',
      content: 'root',
      children: [],
    },
    1,
    dbFilesForUser,
    foldersIdList
  )

  return {
    // File/folder tree in the structure expected by Skeleton UI's tree component
    fileTree: maybe.children,
    // Tree handler only provides ID on click and I need to know if that is a folder or a file
    // Instead of searching the tree, just use this list
    foldersIdList,
  }
}

function recurse(dbFiles, parent, level, dbFilesForUser, foldersIdList) {
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
            content: dbFile.path.split('/').at(-1),
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
        content: dbFile.path.split('/').at(-1),
        children: [],
      })
    }
  }

  return parent
}

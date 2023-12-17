import { notes } from '$lib/db/notes.js'

export const load = async function () {
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
    dbFilesForUser
  )

  return {
    fileTree: maybe.children,
  }
}

function recurse(dbFiles, parent, level, dbFilesForUser) {
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
      parent.children.push(
        recurse(
          children,
          {
            id: dbFile.path,
            content: dbFile.path.split('/').at(-1),
            children: [],
          },
          level + 1,
          dbFilesForUser
        )
      )
    } else {
      parent.children.push({
        id: dbFile.path,
        // @ts-ignore
        isLeaf: true,
        content: dbFile.path.split('/').at(-1),
        children: [],
      })
    }
  }

  return parent
}

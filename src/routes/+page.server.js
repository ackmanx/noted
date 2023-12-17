import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const fileForUser = await notes
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

  const fileTree = []

  for (let file of fileForUser) {
    // Root level files without a path cannot be a directory
    //todo majerus: I should rename path to be "directoryPath" so this is clear
    if (file.path === '') {
      fileTree.push({
        id: file.label,
        content: file.label,
        path: file.path,
      })
    }
  }

  return {
    fileTree,
  }
}

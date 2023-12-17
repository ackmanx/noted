import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const documentsForUser = await notes
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
    ])
    .toArray()

  // Debug logging
  console.log('^_^', 'Documents from MongoDB:', documentsForUser)

  const fileTree = true

  /* prettier-ignore */ console.log('^_^', 'File tree:', fileTree)

  return {
    fileTree,
  }
}

import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const documentsForUser = await notes
    .find({ author: 'ackmanx' })
    .project({ _id: 1, path: 1, label: 1 })
    .toArray()

  // Debug logging
  console.log('^_^', 'Documents from MongoDB:', documentsForUser)

  const fileTree = documentsForUser.map((document) => ({
    ...document,
    _id: String(document._id),
  }))

  /* prettier-ignore */ console.log('^_^', 'File tree:', fileTree)

  return {
    fileTree,
  }
}

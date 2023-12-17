import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const data = await notes
    .find({ author: 'ackmanx' })
    .project({ _id: 1, path: 1 })
    .toArray()

  // Debug logging
  console.log('^_^', 'App data from MongoDB:', data)

  return {
    text: data,
  }
}

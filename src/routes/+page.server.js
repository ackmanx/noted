import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const data = await notes.find({}).toArray()

  // Debug logging
  console.log('^_^', 'App data from MongoDB:', data)

  return {
    text: data,
  }
}

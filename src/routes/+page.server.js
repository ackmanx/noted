import { notes } from '$lib/db/notes.js'

export const load = async function () {
  const data = await notes.find({}).toArray()

  return {
    text: data,
  }
}

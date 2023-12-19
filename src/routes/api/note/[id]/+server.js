import { json } from '@sveltejs/kit'

import { notes } from '$lib/db/notes.js'

export async function GET({ params }) {
  const note = await notes.findOne({ _id: params.id })
  return json(note)
}

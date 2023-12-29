import { json } from '@sveltejs/kit'

import { notes } from '$lib/db/notes.js'

export async function POST({ request, params }) {
  const body = await request.json()

  const note = await notes.findOne({ _id: params.id })
  return json(note)
}

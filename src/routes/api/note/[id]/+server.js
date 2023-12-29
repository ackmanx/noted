import { json } from '@sveltejs/kit'

import { notes } from '$lib/db/notes.js'

export async function POST({ request, params }) {
  const noteInDB = await notes.findOne({ _id: params.id })

  noteInDB.markdown = (await request.json()).markdown

  await notes.updateOne(
    { _id: params.id },
    {
      $set: noteInDB,
    }
  )

  return json({ success: true })
}

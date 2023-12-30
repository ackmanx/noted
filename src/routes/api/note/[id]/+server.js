import { json } from '@sveltejs/kit'

import { notes } from '$lib/db/notes.js'

export async function GET({ params }) {
  const note = await notes.findOne({ _id: params.id })
  return json(note)
}

export async function PUT({ request }) {
  const newNote = {
    _id: Math.random().toString(16).slice(2),
    markdown: (await request.json()).markdown,
    author: 'ackmanx',
    isDirectory: false,
    path: `${Math.random().toString(16).slice(2)}.md`,
  }

  await notes.insertOne(newNote)

  return json({ success: true })
}

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

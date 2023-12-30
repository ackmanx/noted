import db from './mongo.js'

export interface Note {
  _id: string
  author: string
  path: string
  isDirectory: boolean
  markdown: string
}

export const notes = db.collection<Note>('notes')

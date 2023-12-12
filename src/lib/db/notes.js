import db from './mongo.js'

export const notes = db.collection('notes')

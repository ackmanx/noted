import { MongoClient } from 'mongodb'

import { MONGODB_URI } from '$env/static/private'

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

const client = new MongoClient(MONGODB_URI)

export function start_mongo() {
  console.log('Starting mongo...')
  return client.connect()
}

export default client.db()

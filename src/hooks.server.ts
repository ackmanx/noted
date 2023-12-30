import { start_mongo } from '$lib/db/mongo.js'

start_mongo()
  .then(() => {
    console.log('Mongo started')
  })
  .catch((error) => {
    console.error(error)
  })

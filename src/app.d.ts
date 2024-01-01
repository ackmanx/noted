// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { Note } from '$lib/db/notes'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      foldersIdList: string[]
      fileTree: any
      note: Note
    }
    // interface Platform {}
  }
}

export {}

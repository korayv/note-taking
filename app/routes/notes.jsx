import NewNote from '~/components/newNote';
import NewNotesStyles from '~/components/newNote.css';
import { getStoredNotes, storeNotes } from '../data/notes';
import { redirect } from '@remix-run/node';
export default function NotesPage(){
    return <main>
        <NewNote />

    </main>
}
export async function action({request}){
  const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    // Add validation
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes =existingNotes.concat(noteData);
    storeNotes(updatedNotes);
    return redirect('/notes')
}

export function links(){
     return [{ rel: 'stylesheet', href: NewNotesStyles}];
}
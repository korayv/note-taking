import NewNote from '~/components/newNote';
import NoteList from '~/components/NoteList';
import NewNotesStyles from '~/components/newNote.css';
import { getStoredNotes, storeNotes } from '../data/notes';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export default function NotesPage() {
    const notes = useLoaderData();
    return (
    <main>
        <NewNote />
        <NoteList notes={notes} />
    </main>
);
}
export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}

export async function action({ request }) {
    const formData = await request.formData();
    const noteData =
    {//Object.fromEntries(formData);
        title: formData.get('title'),
        content: formData.get('content')
    };
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    return redirect('/notes')
}

export function links() {
    return [{ rel: 'stylesheet', href: NewNotesStyles }];
}

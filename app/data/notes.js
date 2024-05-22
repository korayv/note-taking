import fs from 'fs/promises';

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export async function storeNotes(notes) {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  data.notes = notes || [];
  await fs.writeFile('notes.json', JSON.stringify(data));
}
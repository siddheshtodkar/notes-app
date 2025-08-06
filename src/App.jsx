import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('notes')) || []
  })
  const [isFormVisible, setIsFormVisible] = useState(false)
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Notes App
      </h2>
      <button className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? 'Hide Form' : 'Add Note'}
      </button>
      {isFormVisible && <NoteForm notes={notes} setNotes={setNotes} />}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
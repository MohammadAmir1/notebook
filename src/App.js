import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import EditNote from "./components/EditNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes && Array.isArray(savedNotes)) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
    
    // Find the edited note and set it as the editingNote
    const editedNote = updatedNotes.find((note) => note.id === id);
    setEditingNote(editedNote || null); // Use null if editedNote is undefined
  };

  return (
    <>
      <Search handleSearchNote={setSearchText} />
      {editingNote && (
        <EditNote
          id={editingNote.id}
          text={editingNote.text}
          handleEditNote={handleEditNote}
          handleCloseEdit={() => setEditingNote(null)}
        />
      )}
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleEditNote={(id) => setEditingNote({ id, text: notes.find(note => note.id === id)?.text || '' })}
        keyExtractor={(note) => note.id}
      />
    </>
  );
};

export default App;

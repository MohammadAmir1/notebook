import React, { useState } from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleEditClick = (id) => {
    setEditingNoteId(id);
  };

  const handleCloseEdit = () => {
    setEditingNoteId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="relative">
            {editingNoteId === note.id ? (
              <EditNote
                id={note.id}
                text={note.text}
                handleEditNote={handleEditNote}
                handleCloseEdit={handleCloseEdit}
              />
            ) : (
              <Notes
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                handleEditClick={handleEditClick} 
              />
            )}
          </div>
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
};

export default NotesList;

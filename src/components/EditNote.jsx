// EditNote.js
import React, { useState } from "react";



const EditNote = ({ id, text, handleEditNote, handleCloseEdit }) => {
  const [editedText, setEditedText] = useState(text);

  const handleSaveEdit = () => {
    handleEditNote(id, editedText);
    handleCloseEdit();
  };

  return (
    <div className="bg-gray-300 p-4 rounded-md shadow-md">
      <textarea
        className="w-full h-24 p-2 mb-2 border rounded"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleSaveEdit}
        >
          Save
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          onClick={handleCloseEdit}
        >
          Cancel
        </button>
       

      </div>
    </div>
  );
};

export default EditNote;

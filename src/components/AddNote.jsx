import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="bg-[#BAF7D0]  p-4 rounded-md">
      <textarea
        className="resize-none border-none bg-[#BAF7D0] focus:outline-none w-full"
        rows="8"
        cols="10"
        placeholder="Type to add a note.."
        value={noteText}
        onChange={handleChange}
        style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
      ></textarea>

       <div className="note-footer mt-4">
        
        <button
          onClick={handleSaveClick}
          className="bg-[#e1e1e1]  rounded-[20px] py-2 px-4 hover:bg-[#ededed] cursor-pointer border border-gray-400 m-2 "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

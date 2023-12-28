import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

const Notes = ({ id, text, date, handleDeleteNote, handleCloseEdit }) => {
  return (
    <div className="bg-green-200 w-[250px] rounded-lg flex flex-col min-h-[250px] justify-between ">
      <p className="break-words text-wrap w-[250px] p-2">{text}</p>
      <div className="flex flex-row align-middle justify-between p-2">
        <small>{date}</small>
        <MdOutlineDeleteForever
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
          className="cursor-pointer"
        />
        <TiEdit onClick={handleCloseEdit} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Notes;

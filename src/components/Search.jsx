import React from 'react'
import { MdSearch } from "react-icons/md";

const Search = ({handleSearchNote}) => {
  return (
    <div className='flex align-middle bg-gray-300 rounded-[10px] p-[5px] mb-[1.5rem] '>
        <MdSearch className='size-[1.3rem]'/>
<input onChange={(e)=>handleSearchNote(e.target.value)} type="text" placeholder='type to search...' className='bg-gray-300 focus:outline-none' />
    </div>
  )
}

export default Search
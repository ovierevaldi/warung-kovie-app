import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className='flex justify-center p-12 gap-x-4'>
      <input 
        type='text' 
        placeholder='Search Foods...'
        className='bg-secondary text-primary w-2xl py-2 px-4 text-2xl rounded-md text-center outline-primary focus:outline-[1.5px]'
      />

      <button className='bg-primary rounded-full w-12'>
        <FiSearch className='mx-auto text-2xl text-white'/>
      </button>
    </div>
  )
}

export default SearchBar
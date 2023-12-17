import React from 'react'
import SearchBar from './SearchBar'
import InputBox from './InputBox'

export default function TimeLine() {
  return (
    <div className="flex flex-col w-full border-b mb-4">
      <div className="py-1 mr-5 border-b-4 border-brand-500">
        <h1 className="font-black  text-xl">Home</h1>
      </div>
      <InputBox/>
      <div className='py-4 '>
        <SearchBar/>
        
      </div>
      
    </div>
  )
}

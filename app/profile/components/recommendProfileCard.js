import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

export default function recommendProfileCard() {
  return (
    <div className="flex mb-2 w-full space-x-4">
      <img
        alt=""
        src="https://source.unsplash.com/100x100/?portrait"
        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
      />
      <div className="flex flex-col space-y-1">
        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">
          Leroy Jenkins
        </a>
        <span className="text-xs dark:text-gray-400">4 hours ago</span>
      </div>
      <div className='w-20'></div>
      <button
        href="#_"
        class="inline-flex items-center justify-center px-4 py-1 text-base text-white whitespace-no-wrap bg-brand-600 border border-brand-700 rounded-md shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
        data-rounded="rounded-md"
        data-primary="brand-600"
        data-primary-reset="{}"
      >
        <PersonAddIcon />
      </button>
    </div>
  )
}

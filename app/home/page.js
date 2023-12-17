'use client'
import { useEffect } from 'react'
import Feed from '../components/Feed'
import TimeLine from './components/TimeLine'

export default function page() {

  

  return (
    <div id="main" className="overflow-y-auto h-screen max-w-4xl">
      <TimeLine />
        <Feed />
    </div>
  )
}

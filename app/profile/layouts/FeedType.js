'use client'
import React, { useContext, useEffect } from 'react'
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  FilmIcon,
  PencilSquareIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline'
import TabButton from '../components/TabButton'
import { TabContext } from '../tabContext'
import { usePathname, useRouter } from 'next/navigation'

export default function FeedType() {
  const { tab, updateTab } = useContext(TabContext);

  const router = useRouter();
  const q = usePathname();

  
  return (
    <div className="flex items-center justify-between">
      <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 sm:mt-0 sm:px-0 md:pb-0">
        <TabButton
          name={`Posts`}
          icon={<PencilSquareIcon className="h-4 w-4" />}
          active={tab === 'posts'}
          
        />
        <TabButton
          name={`Replies`}
          icon={<ChatBubbleLeftRightIcon className="h-4 w-4" />}
          active={tab === 'replies'}
        />
        <TabButton
          name={`Media`}
          icon={<FilmIcon className="h-4 w-4" />}
          active={tab === 'media'}
        />
        <TabButton
          name={`Collected`}
          icon={<RectangleStackIcon className="h-4 w-4" />}
          active={tab === 'collected'}
        />
        <TabButton
          name={`Gallery`}
          icon={<RectangleGroupIcon className="h-4 w-4" />}
          active={tab === 'gallery'}
        />
      </div>
    </div>
  )
}

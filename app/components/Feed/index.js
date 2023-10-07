import React from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined'
import ShareIcon from '@mui/icons-material/Share'

export default function Feed() {
  return (
    <div className=''>
    <div class=" rounded mb-5 overflow-hidden border  bg-white mx-3 ">
      <div class="w-full flex justify-between p-3 shadow-lg">
        <div class="flex">
          <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
            <img
              src="https://avatars0.githubusercontent.com/u/38799309?v=4"
              alt="profilepic"
            />
          </div>
          <span class="pt-1 ml-2 font-bold text-sm">braydoncoyer</span>
        </div>
        <span class="px-2 cursor-pointer rounded">
          {/* <i class="fas fa-ellipsis-h pt-2 text-lg"></i> */}
          <button
            href="#_"
            class="inline-flex items-center justify-center px-4 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Collect
          </button>
        </span>
      </div>
      <div>
        <img
          class="w-full h-auto bg-cover object-contain"
          src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
        />
        <h1 className="text-[26px] py-2 px-3 tracking-wide leading-none font-black">
          Lord of the Rings is my favorite film-series.
        </h1>
      </div>
      <div class="px-3 pb-2 shadow-inner py-1">
        <div class="pt-  flex justify-between items-center text-brand-500">
          <div>
            <SentimentSatisfiedAltIcon className="hover:scale-105 cursor-pointer" />
            <span class="text-sm text-black ml-1 font-medium">500</span>
          </div>
          <div>
            <ThumbUpAltOutlinedIcon className="hover:scale-105 cursor-pointer" />
            <span class="text-sm text-black mx-1 font-medium">+500</span>

            <ThumbDownAltOutlinedIcon className="hover:scale-105 cursor-pointer" />
            {/* <span class="text-sm text-black ml-1 font-medium">500</span> */}
          </div>
          <div>
            <InsertCommentOutlinedIcon className="hover:scale-105 cursor-pointer" />
            <span class="text-sm text-black ml-1 font-medium">500</span>
          </div>
          <div>
            <VolumeUpOutlinedIcon className="hover:scale-105 cursor-pointer" />
            <span class="text-sm text-black ml-1 font-medium">500</span>
          </div>
          <div>
            <ShareIcon className="hover:scale-105 cursor-pointer" />
            {/* <span class="text-sm text-black ml-1 font-medium">500</span> */}
          </div>
        </div>
        <div class="pt-2">
          <div class="mb-2 text-sm">
            {/* <span class="font-medium mr-2">braydoncoyer</span>  */}
            Lord of the Rings
            is my favorite film-series. One day I'll make my way to New Zealand
            to visit the Hobbiton set!
          </div>
        </div>
        <div class="text-sm mb-2 hover:text-black text-gray-400 cursor-pointer font-medium">
          View all 14 comments
        </div>
        {/* <div class="mb-2">
          <div class="mb-2 text-sm">
            <span class="font-medium mr-2">razzle_dazzle</span> Dude! How cool!
            I went to New Zealand last summer and had a blast taking the tour!
            So much to see! Make sure you bring a good camera when you go!
          </div>
        </div> */}
      </div>
    </div></div>
  )
}

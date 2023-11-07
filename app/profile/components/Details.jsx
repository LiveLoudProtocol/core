import React from "react";
import { Tooltip } from "../layouts/ToolTip";

export default function Details() {
  return (
    <div className="mb-4 space-y-1 px-5 sm:px-0">
      <div className="relative -mt-24 h-32 w-32 sm:-mt-32 sm:h-52 sm:w-52">
        <div
          className=" bg-[url('https://picsum.photos/128')] bg-cover h-32 w-32 cursor-pointer round-xl bg-gray-200 ring-8 ring-gray-50   sm:h-52 sm:w-52"
          height={128}
          width={128}
        />
      </div>
      <div className=" py-5">
        <div className="flex items-center text-2xl font-bold">
          <div className="truncate">John Doe</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm sm:text-base bg-clip-text bg-gradient-to-r from-brand-600 to-red-600 text-transparent">@johndoe123</div>
        </div>
      </div>
      <div className="markup linkify text-md mr-0 break-words sm:mr-10">
        <div>Profile bio goes here.</div>
      </div>
      <div className="">
       
        
        <div>Invited by goes here.</div>
      <div>Badges go here.</div>
      </div>
      
      
    </div>
  );
}

import React from "react";
import { Tooltip } from "../layouts/ToolTip";

export default function Details() {
  return (
    <div className="mb-4 space-y-5 px-5 sm:px-0">
      <div className="relative -mt-24 h-32 w-32 sm:-mt-32 sm:h-52 sm:w-52">
        <div
          className="h-32 w-32 cursor-pointer rounded-xl bg-gray-200 ring-8 ring-gray-50 dark:bg-gray-700 dark:ring-black sm:h-52 sm:w-52"
          height={128}
          width={128}
        />
      </div>
      <div className="space-y-1 py-2">
        <div className="flex items-center gap-1.5 text-2xl font-bold">
          <div className="truncate">John Doe</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm sm:text-base">@johndoe123</div>
        </div>
      </div>
      <div className="markup linkify text-md mr-0 break-words sm:mr-10">
        <div>Profile bio goes here.</div>
      </div>
      <div className="space-y-5">
        <div>Scam warning goes here.</div>
        <div>Followerings go here.</div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-gray-200 px-2 py-0.5 text-xs dark:bg-gray-700">
            Follows you
          </div>
        </div>
      </div>
      <div className="divider w-full" />
      <div className="space-y-2">
        <div>
          <Tooltip content={`#123456`}>
            <div>
              <a href="#" target="_blank" rel="noreferrer">
                123456
              </a>
            </div>
          </Tooltip>
        </div>
        <div>Location goes here.</div>
        <div>
          <Tooltip content="Website">
            <a href="#" target="_blank" rel="noreferrer noopener">
              Website
            </a>
          </Tooltip>
        </div>
        <div>
          <Tooltip content="X Logo">
            <a href="#" target="_blank" rel="noreferrer noopener">
              X Link
            </a>
          </Tooltip>
        </div>
      </div>
      <div className="divider w-full" />
      <div>Invited by goes here.</div>
      <div>Badges go here.</div>
    </div>
  );
}

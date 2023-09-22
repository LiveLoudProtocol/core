import React from "react";

export default function Details({userName, address}) {
  return (
    <div className="px-4 py-4 flex flex-col ">
      <div>
        {" "}
        <h1 className="text-2xl font-bold -mb-2">{userName}</h1>
        <h1 className="text-sm text-gray-700">@handle</h1>
      </div>
      <div className="my-2 flex flex-col gap-3">
        <h1 className="text-lg text-gray-700 -mb-2">Joined Sept 2023</h1>
        <h1 className="text-lg flex flex-wrap gap-3 text-gray-700">
          <span>
            <span className="font-bold text-black">0</span> Followers
          </span>
          <span>
            <span className="font-bold text-black">0</span> Following
          </span>
        </h1>
      </div>
    </div>
  );
}

// import ParseAddress from "@/app/helpers/addressParser";
import React from "react";
import ParseAddress from "../../helpers/addressParser";

export default function Nav({ userName, address }) {
  return (
    <nav className="shadow-sm w-full min-h-fit gap-4 flex items-center p-2">
      <a href="#" class="buttons ">
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
          <g>
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
          </g>
        </svg>
      </a>
      <div>
        <h1 className="text-xl font-bold">{userName}</h1>
        <h3 className="texl-[13px]">{ParseAddress(address)}</h3>
      </div>
    </nav>
  );
}

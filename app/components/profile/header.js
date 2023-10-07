import React from "react";

export default function Header({ banner, image}) {
  return (
    <header className="relative flex flex-col">
      <div id="banner" className="absolute w-full -z-10">
        <img
          className="w-full h-[200px] object-cover"
          src="https://cdn2.unrealengine.com/egs-magesofmystralia-borealysgames-ic1-400x229-ed5e31b82197.png?h=270&quality=medium&resize=1&w=480"
        />
      </div>

      <div className="relative w-full flex z-10 mt-[135px] flex-row px-4 items-center justify-between">
        <div className="w-32 h-32 flex border-4 round-full">
          <img
            className="round-full w-full h-full object-cover"
            src="https://hindistatusnow.com/wp-content/uploads/2023/01/Smile-Whatsapp-DP-Images-9.jpg"
          />
        </div>
        <a
          href="#"
          class="text-gray-800 hover:text-black border border-black px-4 py-1 round-full hover:bg-gray-200 mt-12"
        >
          <span class="buttons__text ">Edit Profile</span>
        </a>
      </div>
    </header>
  );
}

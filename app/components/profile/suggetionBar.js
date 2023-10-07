import React from "react";

export default function SuggesionBar() {
  return (
    <aside class=" bg-transparent  w-fit float-left h-screen overflow-y-auto hidden md:block">
      <div class=" min-w-fit md:w-[320px] overflow-x-hidden h-screen min-h-fit">
        <section className="py-6 px-4 flex flex-col  bg-white">
          <div className=" ">
            <div className=" p-4 shadow round-lg bg-white flex flex-col justify-center">
              <h1 className="text-xl font-bold">You might like</h1>
              
              
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

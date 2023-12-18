import React from 'react'

export default function RightBar() {
  return (
    <aside class=" bg-transparent border-l-2 w-fit float-left h-screen overflow-y-auto hidden md:block">
      <div class=" min-w-fit md:w-[320px] overflow-x-hidden h-screen min-h-fit">
        <section className="py-6 px-4 flex flex-col  ">
          <div className=" ">
            <div className=" p-4 shadow round-lg bg-white flex flex-col justify-center">
              <h1 className="text-xl font-bold">Subscribe to Premium</h1>
              <h1 className="text-xs my-1 text-gray-600 font-bold">
                Subscribe to unlock new features and if eligible, receive a
                share of ads revenue.
              </h1>
              <button
                className="bg-brand-500 hover:opacity-95 text-white round-lg px-4 py-2 mt-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </aside>
  )
}

import SideBar from 'app/components/sideBar'
import RightBar from 'app/components/rightBar'
import React from 'react'

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className=" xl:48   ">
        <div className="flex relative gap-1 justify-between min-h-screen">
          <aside className=" left-0">
            <SideBar />
          </aside>
          <div className="p-4">{children}</div>
          <aside className=" right-0">
            <RightBar />
          </aside>
        </div>
      </body>
    </html>
  )
}

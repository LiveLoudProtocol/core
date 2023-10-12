import React from 'react'
import { TabContextProvider } from './tabContext'
import SideBar from './components/sideBar'

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className=" xl:48  bg-white ">
        <TabContextProvider>
          <div className="flex relative justify-center min-h-screen">
            <aside className="fixed  left-0">
              <SideBar />
            </aside>
            
            <div>
              {children}</div>
          </div>
        </TabContextProvider>
      </body>
    </html>
  )
}

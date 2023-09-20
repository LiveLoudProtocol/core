import SideBar from "app/components/sideBar";
import RightBar from "app/components/rightBar";
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className=" xl:48   ">
        <div className="flex justify-center min-h-screen">
          <SideBar />
          <div className="p-4">{children}</div>
          <RightBar  />

        </div>
      </body>
    </html>
  );
}

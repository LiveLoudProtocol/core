import SideBar from "app/components/sideBar";
import React from "react";
import SuggesionBar from "../components/profile/suggetionBar";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className=" xl:48   ">
        <div className="flex justify-center min-h-screen">
          <SideBar />
          <div>{children}</div>
          <SuggesionBar  />

        </div>
      </body>
    </html>
  );
}

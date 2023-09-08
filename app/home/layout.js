import React from "react";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-5 xl:48 lg:px-40">
        {children}
      </body>
    </html>
  );
}

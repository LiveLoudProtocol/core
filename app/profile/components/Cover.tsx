import type { FC } from "react";
import colors from "tailwindcss/colors";
import React from "react";

interface CoverProps {
  cover: string;
}

const Cover: FC<CoverProps> = ({ cover }) => {
  return (
    <div
      className="h-52 sm:h-80 w-screen"
      data-testid="profile-cover"
      style={{
        backgroundImage: `url(${"https://picsum.photos/1400/900"})`,
        backgroundColor: colors.violet[500],
        backgroundSize: cover ? "cover" : "30%",
        backgroundPosition: "center center",
        backgroundRepeat: cover ? "no-repeat" : "repeat",
      }}
    ></div>
  );
};

export default Cover;

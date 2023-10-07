import React, { use, useContext, useEffect, useState } from "react";
import cn from "../layouts/cn";
import { TabContext } from "../tabContext";

const TabButton = ({ name, icon, count, showOnSm = false, className = "" }) => {
  const { tab, updateTab } = useContext(TabContext);

  const active = tab === name;
  

  useEffect(() => {
    if (active) {
      document.title = `${name} | ${process.env.NEXT_PUBLIC_APP_NAME}`;
    }
  }, [active]);

  return (
    <button
      type="button"
      className={cn(
        { "text-brand bg-brand-100 dark:bg-brand-300/20": active },
        "flex items-center space-x-2 round-lg px-4 py-2 text-sm font-medium text-gray-500 sm:px-3 sm:py-1.5",
        "hover:bg-brand-100/80 dark:hover:bg-brand-300/30 justify-center",
        className
      )}
      onClick={() => {
        if (tab !== name) {
          updateTab(name);
        }
      }}
      data-testid={`tab-button-${name.toLowerCase()}`}
      aria-label={name}
    >
      {icon}
      <span className={cn({ "hidden sm:block": !showOnSm })}>{name}</span>
      {count ? (
        <span
          className={cn(
            active
              ? "bg-brand-500 dark:bg-brand-500/80 text-white dark:text-white"
              : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
            "ml-2 round-2xl px-2 py-0.5 text-xs font-bold"
          )}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
};

export default TabButton;

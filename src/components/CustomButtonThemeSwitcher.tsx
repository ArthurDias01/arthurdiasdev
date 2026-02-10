"use client";
import { List, X } from "@phosphor-icons/react";
import { forwardRef } from "react";

export const CustomButton = forwardRef((props, forwardedRef) => {
  return (
    <button
      type="button"
      className="group flex h-12 w-12 flex-row items-center justify-center rounded-full bg-primary-400 drop-shadow-md transition-all hover:bg-primary-400"
      {...props}
      ref={forwardedRef as any}
    >
      <List className="h-8 w-8 text-white group-data-[state=open]:hidden dark:text-neutral-900" />
      <X className="h-8 w-8 text-white group-data-[state=closed]:hidden dark:text-neutral-900" />
    </button>
  );
});

CustomButton.displayName = "CustomButtonThemeSwitcher";

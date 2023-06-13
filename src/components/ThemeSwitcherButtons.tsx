'use client'
import { Moon, Sun, List } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MobileMenuPopOver } from "./MobileMenuPopOver";

export const ThemeSwitcherButtons = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button type="button" className="w-12 h-12 bg-primary-400 drop-shadow-md hover:bg-primary-400 rounded-full flex flex-row justify-center items-center overflow-hidden"
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light")
        }}
      >
        {
          theme === "light" ? <Moon className="w-8 h-8 text-white" /> : <Sun className="w-8 h-8 text-neutral-950" />
        }
      </button>
      <div className="block md:hidden">
        <MobileMenuPopOver>
          <button type="button" className="w-12 h-12 bg-primary-400 drop-shadow-md hover:bg-primary-400 rounded-full flex flex-row justify-center items-center">
            <List className="w-8 h-8 text-white dark:text-neutral-950" />
          </button>
        </MobileMenuPopOver>
      </div>
    </>
  )
}

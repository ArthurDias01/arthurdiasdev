import { ThemeSwitcherButtons } from "./ThemeSwitcherButtons";

const ThemeSwitcher = () => {

  return (

    <div className="sticky top-0 z-[9999] flex flex-row justify-end w-full min-h-[64px]  gap-2 py-2 px-4 bg-neutral-300 dark:bg-neutral-950">
      <ThemeSwitcherButtons />
    </div>

  );
};

export default ThemeSwitcher;

'use client';

import { cn } from "../utils/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  handleClick?: () => void;
  text?: string;
}

export const PrimaryButton = ({ children, handleClick, text, className, ...rest }: Props) => {

  return (
    <button className={cn(className, "bg-gradient-to-r from-primary-300 to-teal-600 z-20 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out h-fit w-full")}
      onClick={handleClick}
      {...rest}
    >
      <>
        {text}
        {children}
      </>
    </button >
  )
}

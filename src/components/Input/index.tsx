import * as React from "react";
import { cn } from "@/utils";
import "./input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="relative float-label-input">
        <input
          type={type}
          ref={ref}
          {...props}
          placeholder=" "
          className={cn(
            "block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-3 block appearance-none leading-normal focus:border-accent",
            className
          )}
        />

        <label className="absolute top-2 left-1 text-[#4a4a4a] pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-sm ">
          {label}
        </label>
      </div>
    );
  }
);

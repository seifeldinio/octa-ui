import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import "./button.css";

const buttonStyles = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent hover:bg-accent/80 text-dark font-semibold",
        secondary: "bg-secondary hover:bg-secondary/80 text-dark font-semibold",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-[#fdfdfd]",

        // link: "text-primary underline-offset-4 hover:underline",
        material: "material",
        materialSecondary: "material-secondary",

        ghost: "ghost",
        glass: "glass",
        key: "key",
        gradient: "gradient",
      },
      size: {
        default: "h-10 px-3.5 py-1",
        sm: "h-8 rounded-lg px-2.5",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, className }))}
        {...props}
      />
    );
  }
);

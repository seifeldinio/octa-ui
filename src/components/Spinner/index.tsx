import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import "./spinner.css";

const spinnerStyles = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "default",
        point: "point",
        atom: "atom",
      },
      size: {
        default: "h-10 px-3.5 py-1",
        sm: "h-8 rounded-full px-2.5",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type SpinnerProps = ComponentProps<"span"> & VariantProps<typeof spinnerStyles>;

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(spinnerStyles({ variant, size, className }))}
        {...props}
      />
    );
  }
);

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-mono font-bold tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-purple-600 text-white hover:bg-purple-500 shadow-[4px_4px_0px_0px_rgba(139,92,246,0.35)] hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,0.55)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        outline:
          "border-2 border-purple-600 text-purple-400 bg-transparent hover:bg-purple-600 hover:text-white shadow-[4px_4px_0px_0px_rgba(139,92,246,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(139,92,246,0.4)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        ghost:
          "text-purple-400 hover:bg-purple-900/20 hover:text-purple-300",
        destructive:
          "bg-red-700 text-white hover:bg-red-600",
        secondary:
          "bg-zinc-900 text-zinc-100 border border-zinc-800 hover:bg-zinc-800",
        link: "text-purple-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-10 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };


import * as React from 'react';
import { cn } from "@/lib/utils"; 

const Button = React.forwardRef(({ className, type = 'button', children, ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn(
      "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
Button.displayName = 'Button';

export { Button };
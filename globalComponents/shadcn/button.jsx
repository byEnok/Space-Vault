import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center overflow-hidden justify-center items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-buttonBorder bg-background bg-opacity-50 hover:bg-opacity-100',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-7 w-7',
        sm: 'h-6 w-6',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8',
        iconXl: 'h-9 w-9',
      },
      responsiveSize: {
        small: 'h-6 w-6',
        medium: 'text-md px-4 py-2',
        large: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }

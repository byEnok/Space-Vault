'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, border = false, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn('w-full', { 'border-b': border }, className)} {...props} />)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger ref={ref} className={cn('w-full flex p-0 items-center justify-between transition-all duration-500 ease-in-out hover:bg-buttonHover [&[data-state=open]>svg]:rotate-180  data-[state=open]:bg-buttonHover', className)} {...props}>
      {children}
      <ChevronDown className='h-5 w-5 shrink-0 transition-transform duration-200 hover:rotate-90' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className='max-w-full  overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ' {...props}>
    <div className={cn('pb-0 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq() {
  return (
    <div className='max-w-3xl mx-auto p-6'>
      <div className='text-center mb-8'>
        <Badge variant='secondary' className='mb-4'>
          Frequently Asked Questions
        </Badge>
        <h1 className='text-4xl font-bold mb-4'>Frequently asked questions</h1>
        <p className='text-lg text-muted-foreground'>
          Looking for something else? Chat with us via{' '}
          <a href='#' className='text-primary'>
            hello@horizon-ui.com
          </a>{' '}
          and our teammates will try their best to help you!
        </p>
      </div>
      <Accordion type='single' collapsible className='w-full space-y-4 text-sm'>
        <AccordionItem
          className='rounded border border-slate-200 bg-slate-50 px-4'
          value='item-1'
        >
          <AccordionTrigger>What is a micro-interaction?</AccordionTrigger>
          <AccordionContent className='text-slate-600'>
            Micro-interactions are events which have one main task — a single
            purpose — and they are found all over your device and within apps.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className='rounded border border-slate-200 bg-slate-50 px-4'
          value='item-2'
        >
          <AccordionTrigger>
            Why should I use a micro-interaction?
          </AccordionTrigger>
          <AccordionContent className='text-slate-600'>
            You should use micro-interactions to enhance a simple task and to
            make the experience more enjoyable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className='rounded border border-slate-200 bg-slate-50 px-4'
          value='item-3'
        >
          <AccordionTrigger>How do I use a micro-interaction?</AccordionTrigger>
          <AccordionContent className='text-slate-600'>
            Start by thinking about the task you want the user to perform.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface TestimonialSliderCardProps {
  testimonials: {
    quote: string;
    name: string;
    role: string;
    imgSrc: string;
  }[];
}

const testimonials = [
  {
    quote:
      'Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.',
    name: 'Rose Roberson',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
  {
    quote:
      'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.',
    name: 'Chace Rodgers',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
  {
    quote:
      'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
    name: 'Cornelius Sheppard',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
  {
    quote:
      'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
    name: 'Chace Rodgers',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
    name: 'Cornelius Sheppard',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
  {
    quote:
      'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
    name: 'Chace Rodgers',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
  {
    quote:
      'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
    name: 'Cornelius Sheppard',
    role: 'CEO at Company',
    imgSrc: '/testimonial-1.jpeg',
  },
];

export default function TestimonialSliderCard() {
  return (
    <section className='w-full py-4'>
      <div className='mx-auto lg:max-w-6xl px-3'>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <Card className='shadow-sm'>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <div className='flex flex-col px-4 py-5 sm:p-6'>
                      <q className='flex-1 text-gray-600 dark:text-gray-300'>
                        {testimonial.quote}
                      </q>
                      <div className='mt-6 flex gap-3'>
                        <span className='inline-flex rounded-full'>
                          <Image
                            className='h-10 w-10 rounded-full'
                            height={40}
                            width={40}
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            loading='lazy'
                          />
                        </span>
                        <div>
                          <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                            {testimonial.name}
                          </p>
                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black' />
          <CarouselNext className='absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black' />
        </Carousel>
      </div>
    </section>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hilu9J4flm8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-muted py-6 w-full'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-xs text-muted-foreground'>
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <div className='flex gap-4'>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            {' '}
            Terms of Service
          </Link>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            {' '}
            Terms of Service
          </Link>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            {' '}
            Terms of Service
          </Link>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            {' '}
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

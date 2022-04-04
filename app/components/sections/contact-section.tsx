import * as React from 'react'
import { Link } from 'remix'

import clsx from 'clsx'

export function ContactSection({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        className,
        'bg-bs py-16 text-center text-ts duration-500'
      )}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center'>
          <h2 className='py-4 text-3xl font-bold text-tp sm:text-4xl'>
            Get In Touch
          </h2>
          <p className='mb-8 text-sm sm:text-base lg:text-lg'>
            ご質問だけでも構いません。連絡をお待ちしています。
          </p>
          <Link
            className='btn my-8 mx-auto bg-hp text-base text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none sm:text-lg'
            to='/contact'
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  )
}

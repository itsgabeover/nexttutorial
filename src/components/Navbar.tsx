import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
import MobileNav from './MobileNav'
import Image from "next/image";

const Navbar = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()
  console.log(user)

  return (
    <nav className='sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between border-b border-zinc-200'>
            <Link
              href='/'
              className='flex z-40 font-semibold h-full justify-start'>
              <Image
              src="/brand-logo.svg"
              alt="site logo"
              width={150} // Adjusted width
              height={100}  // Adjusted height
              quality={100}
              className=""
              />
            </Link>

          <MobileNav isAuth={!!user} />

          <div className='hidden items-center space-x-4 sm:flex'>
              <>
                <Link
                  href='/approach'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Our Approach
                </Link>
                <Link
                  href='/insights'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Insights
                </Link>
                <Link
                href='/aitoolshub'
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  Begin Your Journey{' '}
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
              </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
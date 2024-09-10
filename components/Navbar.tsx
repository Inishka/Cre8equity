'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from './MobileNav'; 
import { usePathname } from 'next/navigation';
import { NavbarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className=" flex-between z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Cre8Equity"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Cre8Equity
        </p>
      </Link>
      {NavbarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
        
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-2 items-center p-4 rounded-md justify-start',
                {
                  'bg-blue-1': isActive,
                }
              )}
            >
              <p className="text-lg font-bold text-white max-md:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
  

        <MobileNav />  
      </div>
    </nav>
  )
}

export default Navbar
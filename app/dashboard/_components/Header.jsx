"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function Header() {

  const path=usePathname();
  useEffect(()=>{
    console.log(path);
  },[])

  return(

    <div className='flex p-4 items center justify-between'>
        <Image src={'/logo.svg'} width={160} height={100} alt='logo'/>
        <ul className='hidden md:flex gap-6'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-primary hover:font-bold transistion-all pointercursor
              ${path=='/dashboard'&&'text-primary font-bold'}
              `}>Dashboard</li></Link>
              <li className={`hover:text-primary hover:font-bold transistion-all pointercursor
              ${path=='/dashboard/questions'&&'text-primary font-bold'}
              `}>Questions</li>
                <li className={`hover:text-primary hover:font-bold transistion-all pointercursor
              ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
              `}>Upgrade</li>
                <li className={`hover:text-primary hover:font-bold transistion-all pointercursor
              ${path=='/dashboard/how'&&'text-primary font-bold'}
              `}>How it works</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header

'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="fixed top-0 z-10 w-full bg-white/80 py-4 backdrop-blur-sm lg:py-8">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col justify-center px-10 lg:flex-row lg:items-center">
        <Link className="lg:absolute lg:left-10" href="/">
          <div className="relative h-[40px] w-[170px] cursor-pointer">
            <Image src="/trinitas-horizontal.svg" alt="Logotipo Trinitas" fill sizes="170px" />
          </div>
        </Link>
        <button aria-label="Menu" className="absolute top-1 right-10 my-auto lg:hidden" onClick={() => setIsNavOpen((state) => !state)} type="button">
          {isNavOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
        <nav className={`${isNavOpen ? 'block' : 'hidden'} mt-5 lg:mt-0 lg:block`}>
          <ul className="flex flex-col gap-5 text-lg font-medium lg:flex-row lg:gap-20">
            <li>
              <a href="#quem-somos">Quem somos</a>
            </li>
            <li>
              <a href="#o-curso">O Curso</a>
            </li>
            <li>
              <a href="#calendario">Calendário</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

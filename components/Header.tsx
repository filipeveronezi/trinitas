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
            <Image priority src="/trinitas-horizontal.svg" alt="Logotipo Trinitas" fill sizes="170px" />
          </div>
        </Link>
        <button aria-label="Menu" className="absolute right-10 top-1 my-auto lg:hidden" onClick={() => setIsNavOpen((state) => !state)} type="button">
          {isNavOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
        <nav className={`${isNavOpen ? 'block' : 'hidden'} mt-5 lg:mt-0 lg:block`}>
          <ul className="flex flex-col gap-5 text-lg font-medium lg:flex-row lg:gap-20">
            <li>
              <Link href="#quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link href="#o-curso">O Curso</Link>
            </li>
            <li>
              <Link href="#calendario" className="relative">
                <span>Calendário</span>
                <span className="absolute -right-10 -top-4 w-max rounded-full bg-zinc-950 px-2 py-1 text-xs text-white">2024</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

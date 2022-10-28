import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto max-w-screen-xl px-10 py-8">
      <Link href="/">
        <div className="relative h-[40px] w-[170px] cursor-pointer">
          <Image src="/trinitas-horizontal.svg" alt="Logotipo Trinitas" fill sizes="170px" />
        </div>
      </Link>
    </header>
  )
}

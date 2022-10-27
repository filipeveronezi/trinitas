import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="max-w-screen-xl mx-auto px-10 py-8">
      <Link href="/">
        <div className="relative w-[170px] h-[40px] cursor-pointer">
          <Image src="/trinitas-horizontal.svg" alt="Logotipo Trinitas" fill />
        </div>
      </Link>
    </header>
  )
}

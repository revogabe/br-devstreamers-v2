'use client'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex bg-gray-900/75 backdrop-blur-lg fixed top-0 z-30 items-center justify-between px-24 py-4 w-full max-md:px-12">
      <div className="flex gap-4 group cursor-pointer items-start justify-between w-max max-sm:hidden">
        <Image src={Logo} alt="BR Dev Streamers Logo" width={48} height={48} />
        <div className="flex-col items-start justify-center flex transition-every max-md:hidden">
          <h1 className="font-bold text-purple-400 text-2xl">
            BR Dev Streamers
          </h1>
          <p className="text-xs">Unindo a comunidade de Live Coding</p>
        </div>
      </div>
      <div className="flex bg-gray-950 rounded-md text-xs font-semibold">
        <Link
          className="py-2 px-4 text-gray-700 data-[state=true]:bg-gray-100 hover:bg-gray-900/50 rounded-md m-1.5 transition-every"
          data-state={pathname === '/' ? 'true' : 'false'}
          href="/"
        >
          Assistir
        </Link>
        <Link
          className="py-2 px-4 text-gray-700 data-[state=true]:bg-gray-100 hover:bg-gray-900/50 rounded-md m-1.5 transition-every"
          data-state={pathname === '/sobre' ? 'true' : 'false'}
          href="/sobre"
        >
          Sobre
        </Link>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Link href="https://discord.com/invite/collabcode">
          <DiscordLogoIcon className="w-10 h-10 cursor-pointer transition-every text-purple-400 hover:bg-gray-800 p-2 rounded-md hover:text-gray-200" />
        </Link>
        <Link href="https://github.com/brdevstreamers">
          <GitHubLogoIcon className="w-10 h-10 cursor-pointer transition-every text-purple-400 hover:bg-gray-800 p-2 rounded-md hover:text-gray-200" />
        </Link>
      </div>
    </header>
  )
}

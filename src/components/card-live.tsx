'use client'
import Image from 'next/image'
import { CopyIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { Toaster, toast } from 'react-hot-toast'
import Link from 'next/link'

type Props = {
  name: string
  viewers: number
  avatar: string
  description: string
  thubnail: string
}

export default function CardLive({
  name,
  viewers,
  avatar,
  description,
  thubnail,
}: Props) {
  // função de copyboard

  function handleCopyRaid() {
    navigator.clipboard.writeText(`/raid ${name}`)
    toast.success('Link copiado!')
  }

  return (
    <>
      <div className="absolute bottom-0 right-0">
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          containerStyle={{
            fontSize: '0.8rem',
          }}
        />
      </div>

      <div className="group flex h-80 flex-col items-center justify-start gap-3 rounded-md button-default p-0  hover:-translate-y-2 transition-every overflow-hidden">
        <div className="w-full h-full relative">
          <Link href={`https://twitch.tv/${name}`}>
            <Image
              className="brightness-75 group-hover:brightness-110 cursor-pointer max-md:max-h-48 object-cover"
              src={thubnail}
              alt=""
              width={1280}
              height={720}
            />
            <p className="text-sm absolute bottom-0 right-0 m-2 button-default hover:border-transparent transition-every">
              <EyeOpenIcon className="w-4 h-4" />
              {viewers}
            </p>
          </Link>
        </div>
        <div className="flex flex-col w-full h-full px-4 items-center justify-start gap-3">
          <div className="flex w-full  items-center justify-between">
            <div className="flex gap-2 items-center justify-start overflow-hidden">
              <Image
                className="rounded-full"
                src={avatar}
                alt=""
                width={32}
                height={32}
              />
              <p className="text-sm font-semibold group-hover:text-purple-400">
                {name}
              </p>
            </div>
            <button
              className="button-default text-xs cursor-pointer"
              onClick={handleCopyRaid}
            >
              <CopyIcon className="w-4 h-4" />
              RAID
            </button>
          </div>
          <div className="flex items-start justify-start gap-3 w-full h-max">
            <p className="text-xs">{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

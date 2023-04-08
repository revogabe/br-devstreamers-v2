'use client'
import { StreamProp } from '@/types'
import { MagicWandIcon } from '@radix-ui/react-icons'

type Props = {
  data: StreamProp[]
}

export default function ButtonLucky({ data }: Props) {
  function handleIamLucky() {
    const random = Math.floor(Math.random() * data.length)
    window.location.href = `https://twitch.tv/${data[random].user_name}`
  }

  return (
    <button className="button-default" onClick={handleIamLucky}>
      <MagicWandIcon width={14} height={14} />
      <span>Estou com sorte</span>
    </button>
  )
}

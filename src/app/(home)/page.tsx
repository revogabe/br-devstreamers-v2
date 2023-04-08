import ButtonLucky from '@/components/button-lucky'
import CardLive from '@/components/card-live'
import { StreamProp } from '@/types'
import { DashboardIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import * as https from 'https'

type GetUsersResponse = {
  data: StreamProp[]
}

export default async function Home() {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })

  const response: GetUsersResponse = await axios.get(
    `https://api.brstreamers.dev:8000/public/streams`,
    {
      httpsAgent,
    },
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-20 px-24 py-12 max-md:px-12">
      <div className="w-full h-full flex flex-col">
        <div className="flex items-center justify-between w-full h-max max-md:flex-col max-md:items-start gap-6 ">
          <div>
            <div className="flex gap-3 items-center justify-start">
              <h1 className="text-2xl font-bold">Ao vivo</h1>
              <div className="flex bg-red-500 rounded-full w-max items-center justify-center">
                <div className="w-4 h-4 bg-red-500 animate-ping rounded-full" />
              </div>
            </div>
            <p className="text-sm">Veja quem está ao vivo agora</p>
          </div>
          <div className="flex items-center justify-center gap-3 w-max">
            <button className="button-default cursor-not-allowed opacity-40">
              <DashboardIcon width={14} height={14} />
              <span>Simultâneo</span>
            </button>
            <ButtonLucky data={response.data} />
          </div>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-xl:grid-cols-3 max-md:grid-cols-1 gap-6 w-full h-full mt-12 items-center justify-center">
          {response.data.map((stream) => (
            <CardLive
              key={stream.id}
              avatar={stream.profile_image_url}
              description={stream.description}
              name={stream.user_name}
              thubnail={stream.thumbnail_url
                .replace('{width}', '1920')
                .replace('{height}', '1080')}
              viewers={stream.viewer_count}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

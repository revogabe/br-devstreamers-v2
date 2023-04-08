import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function AccordionSobre() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é o BR DevStreamers?</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 flex w-full">
            <p>
              O Br Dev Streamers surgiu com a ideia de agregar todas as pessoas
              que fazem live coding em português na Twitch.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Como Participar?</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 flex w-full">
            <p>
              Basta começar uma stream dentro da categoria de &ldquo;Software e
              Desenvolvimento de Jogos&ldquo; com a língua em português e você
              aparecerá na lista.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          É verdade que este é um projeto Open Source?
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4 flex w-full">
            <p>
              Sim, o projeto é open source e você pode acessá-lo (e abrir um PR)
              no GitHub em:
            </p>
          </div>
          <div className="flex p-4 gap-3 w-max">
            <Link href="" className="button-default">
              Frontend
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
            <Link href="" className="button-default">
              Backend
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
            <Link href="" className="button-default">
              Bot
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
            <Link href="" className="button-default">
              Documentação
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

import { AccordionSobre } from '@/components/accordion-sobre'

export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-24 pt-32">
      <div className="flex flex-col w-full h-max gap-2 items-start justify-center">
        <h1 className="text-3xl font-bold text-gray-100">Sobre</h1>
        <p className="text-gray-300 text-base">
          Conheça um pouco mais sobre o projeto.
        </p>
      </div>
      <div className="flex w-full p-4 rounded-lg border-gray-900 border">
        <AccordionSobre />
      </div>
    </main>
  )
}

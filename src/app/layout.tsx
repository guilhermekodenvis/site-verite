import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Vérité | Perícias Judiciais - Excelência em Laudos Técnicos',
  description: 'Empresa especializada em perícias judiciais: médica, engenharia, criminal, grafotécnica, ambiental e informática. Laudos técnicos com credibilidade e precisão.',
  keywords: 'perícia judicial, perícia médica, perícia de engenharia, perito judicial, laudo técnico, Brasil',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Vérité | Perícias Judiciais',
    description: 'Empresa especializada em perícias judiciais com excelência em laudos técnicos.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

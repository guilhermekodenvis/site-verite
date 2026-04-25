import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia de Engenharia | Vérité Perícias',
  description: 'Perícia de engenharia especializada para processos judiciais. Avaliação de imóveis, danos estruturais, construções, instalações elétricas e mecânicas.',
}

const relatedServices = [
  { title: 'Perícia Ambiental', href: '/servicos/pericia-ambiental' },
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
]

export default function PericiaEngenhariaPage() {
  return (
    <ServicePageTemplate
      iconName="engineering"
      title="Perícia de Engenharia"
      subtitle="Análise técnica especializada em construções, imóveis e instalações"
      description="Realizamos perícias de engenharia completas para processos judiciais, com avaliações técnicas precisas de imóveis, estruturas, instalações e danos em construções."
      longDescription={[
        "A perícia de engenharia é essencial para esclarecer questões técnicas relacionadas a construções, imóveis, instalações e sistemas mecânicos ou elétricos em disputas judiciais. Nossa equipe é formada por engenheiros com especialização em diversas áreas e ampla experiência em trabalhos periciais.",
        "Atuamos em casos de vícios construtivos, avaliação de imóveis para inventários e partilhas, danos estruturais, acidentes de trabalho em obras, instalações elétricas e hidráulicas, entre outros. Utilizamos equipamentos de última geração para inspeções e medições.",
        "Nossos laudos seguem as normas técnicas da ABNT e do IBAPE, garantindo a fundamentação necessária para a aceitação judicial. Realizamos vistorias detalhadas com registro fotográfico completo e utilizamos metodologias reconhecidas para avaliações de imóveis.",
      ]}
      areas={[
        "Avaliação de imóveis urbanos e rurais",
        "Vícios construtivos e patologias em edificações",
        "Danos estruturais e análise de sinistros",
        "Instalações elétricas, hidráulicas e sanitárias",
        "Sistemas mecânicos e equipamentos industriais",
        "Acidentes de trabalho em canteiros de obras",
        "Servidões e desapropriações",
        "Ruídos, vibrações e conforto ambiental",
      ]}
      benefits={[
        "Engenheiros com registro no CREA e especializações diversas",
        "Equipamentos profissionais para medições e inspeções",
        "Laudos com farta documentação fotográfica",
        "Metodologia baseada nas normas ABNT e IBAPE",
        "Experiência em avaliações de alta complexidade",
        "Conhecimento atualizado das normas técnicas aplicáveis",
      ]}
      color="bg-yellow-600"
      relatedServices={relatedServices}
    />
  )
}

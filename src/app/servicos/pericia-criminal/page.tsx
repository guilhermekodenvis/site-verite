import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Criminal/Cível | Vérité Perícias',
  description: 'Perícia criminal e cível especializada. Análise de local de crime, vestígios, acidentes de trânsito, incêndios e documentoscopia para processos judiciais.',
}

const relatedServices = [
  { title: 'Perícia Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
]

export default function PericiaCriminalPage() {
  return (
    <ServicePageTemplate
      iconName="criminal"
      title="Perícia Criminal/Cível"
      subtitle="Investigação técnica especializada para esclarecimento de crimes e questões cíveis"
      description="Oferecemos perícias criminais e cíveis completas e especializadas, com análises técnicas rigorosas de vestígios, documentos e evidências para processos criminais e cíveis."
      longDescription={[
        "A perícia criminal é fundamental para o esclarecimento de crimes e a busca pela verdade real nos processos penais. Nossa equipe de peritos criminais possui formação multidisciplinar e experiência em diversas áreas da criminalística, garantindo análises técnicas precisas e imparciais.",
        "Atuamos como assistentes técnicos das partes em processos criminais, realizando pareceres técnicos sobre laudos periciais oficiais, acompanhando perícias e orientando advogados sobre aspectos técnicos relevantes para a defesa ou acusação.",
        "Nossa metodologia segue rigorosamente os protocolos científicos da criminalística moderna, utilizando técnicas reconhecidas internacionalmente para coleta, preservação e análise de evidências.",
      ]}
      areas={[
        "Análise de local de crime e reconstituição de eventos",
        "Análise de vestígios papilares (impressões digitais)",
        "Documentoscopia e verificação de autenticidade",
        "Acidentes de trânsito",
        "Incêndios e explosões",
      ]}
      benefits={[
        "Peritos com formação em criminalística e ciências forenses",
        "Experiência em casos de alta repercussão",
        "Análise crítica e imparcial de laudos oficiais",
        "Conhecimento profundo dos protocolos de cadeia de custódia",
        "Atualização constante em técnicas forenses modernas",
        "Suporte técnico completo à defesa ou acusação",
      ]}
      color="bg-red-600"
      relatedServices={relatedServices}
    />
  )
}

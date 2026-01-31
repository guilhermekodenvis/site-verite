import { Metadata } from 'next'
import { FaSearch } from 'react-icons/fa'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Criminal | Vérité Perícias',
  description: 'Perícia criminal especializada. Análise de local de crime, vestígios, balística, química forense e biologia forense para processos judiciais.',
}

const relatedServices = [
  { title: 'Perícia Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
]

export default function PericiaCriminalPage() {
  return (
    <ServicePageTemplate
      icon={FaSearch}
      title="Perícia Criminal"
      subtitle="Investigação técnica especializada para esclarecimento de crimes"
      description="Oferecemos perícias criminais completas e especializadas, com análises técnicas rigorosas de vestígios, documentos e evidências para processos criminais."
      longDescription={[
        "A perícia criminal é fundamental para o esclarecimento de crimes e a busca pela verdade real nos processos penais. Nossa equipe de peritos criminais possui formação multidisciplinar e experiência em diversas áreas da criminalística, garantindo análises técnicas precisas e imparciais.",
        "Atuamos como assistentes técnicos das partes em processos criminais, realizando pareceres técnicos sobre laudos periciais oficiais, acompanhando perícias e orientando advogados sobre aspectos técnicos relevantes para a defesa ou acusação.",
        "Nossa metodologia segue rigorosamente os protocolos científicos da criminalística moderna, utilizando técnicas reconhecidas internacionalmente para coleta, preservação e análise de evidências.",
      ]}
      areas={[
        "Análise de local de crime e reconstituição de eventos",
        "Balística forense e análise de disparos de arma de fogo",
        "Química forense e análise de substâncias",
        "Biologia forense e genética",
        "Análise de vestígios papilares (impressões digitais)",
        "Documentoscopia e verificação de autenticidade",
        "Acidentes de trânsito com vítimas",
        "Incêndios e explosões",
      ]}
      process={[
        "Análise detalhada dos autos processuais e laudos periciais oficiais",
        "Identificação de pontos técnicos relevantes para o caso",
        "Acompanhamento de perícias oficiais quando autorizado",
        "Realização de exames complementares quando possível",
        "Elaboração de parecer técnico fundamentado cientificamente",
        "Suporte técnico ao advogado para formulação de quesitos e arguições",
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

import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Odontológica | Vérité Perícias',
  description: 'Perícia odontológica especializada. Odontologia Legal aplicada a processos cíveis, criminais, trabalhistas e previdenciários.',
}

const relatedServices = [
  { title: 'Perícia Documentoscópica/Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { title: 'Perícia Criminal/Cível', href: '/servicos/pericia-criminal' },
]

export default function PericiaOdontologicaPage() {
  return (
    <ServicePageTemplate
      iconName="odontology"
      title="Perícia Odontológica"
      subtitle="Odontologia Legal aplicada ao campo jurídico"
      description="A Odontologia Legal é a área das Ciências Forenses que utiliza os conhecimentos do campo da odontologia para atender as demandas legais em processos cíveis, criminais, trabalhistas e previdenciários."
      longDescription={[
        "A Odontologia Legal é a área das Ciências Forenses que utiliza os conhecimentos do campo da odontologia para atender as demandas legais em processos cíveis, criminais, trabalhistas e previdenciários.",
        "Sua importância vem ganhando impulso pela relevância do complexo buco-facial na detecção de danos que possuam repercussão na região da face, dentes e tecidos bucais.",
        "Nossos peritos possuem formação em Odontologia com especialização em Odontologia Legal, garantindo análises técnicas precisas e fundamentadas para a instrução de processos judiciais.",
      ]}
      areas={[
        "Avaliação de erros odontológicos e responsabilidade profissional",
        "Responsabilidade civil em processos de indenização — determinação do nexo causal",
        "Auditorias e seguros — avaliação de conformidades contratuais para evitar fraudes",
        "Área trabalhista — verificação de nexo causal entre doença/acidente e incapacidade para o trabalho",
        "Análise de danos na região buco-facial",
        "Perícia em processos previdenciários odontológicos",
      ]}
      benefits={[
        "Perita com formação em Odontologia e especialização em Odontologia Legal",
        "Mais de 30 anos de experiência em perícias forenses",
        "Formação em Academia de Polícia Civil do Estado de São Paulo",
        "Laudos fundamentados em metodologia científica rigorosa",
        "Atuação em processos cíveis, criminais, trabalhistas e previdenciários",
        "Experiência em casos de alta complexidade e repercussão",
      ]}
      color="bg-pink-600"
      relatedServices={relatedServices}
    />
  )
}

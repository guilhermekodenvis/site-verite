import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Documentoscópica/Grafotécnica | Vérité Perícias',
  description: 'Perícia documentoscópica e grafotécnica especializada. Averiguação de fraudes em documentos, autenticidade de assinaturas, montagens, adulterações e falsificações de escrita.',
}

const relatedServices = [
  { title: 'Perícia Criminal', href: '/servicos/pericia-criminal' },
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
]

export default function PericiaGrafotecnicaPage() {
  return (
    <ServicePageTemplate
      iconName="graphotechnical"
      title="Perícia Documentoscópica/Grafotécnica"
      subtitle="Área dedicada a averiguar fraudes em documentos e assinaturas"
      description="Realizamos perícias documentoscópicas e grafotécnicas para averiguação de fraudes em documentos como montagens, adulterações/alterações, falsificações de escrita e verificação de autenticidade de assinaturas."
      longDescription={[
        "A perícia grafotécnica é a área da documentoscopia dedicada ao exame de grafismos, com foco especial na verificação de autenticidade de assinaturas e identificação de autoria de manuscritos. Nossos peritos são especialistas em análise grafotécnica com formação específica e ampla experiência judicial.",
        "Utilizamos técnicas científicas consagradas para analisar as características individuais da escrita, que são tão únicas quanto impressões digitais. Cada pessoa possui um padrão de escrita próprio, determinado por fatores neuromusculares e psicológicos que se manifestam nos grafismos.",
        "Nossos exames incluem análise de assinaturas questionadas, identificação de falsificações por imitação ou decalque, verificação de adulterações em documentos, e determinação de autoria de textos manuscritos. Utilizamos equipamentos de alta precisão para captar detalhes imperceptíveis a olho nu.",
      ]}
      areas={[
        "Verificação de autenticidade de assinaturas",
        "Identificação de falsificações por imitação",
        "Detecção de falsificações por decalque ou transferência",
        "Análise de adulterações em documentos",
        "Identificação de autoria de manuscritos",
        "Exame de testamentos e documentos particulares",
        "Análise de contratos e procurações",
        "Verificação de cheques e títulos de crédito",
      ]}
      benefits={[
        "Peritos especializados em documentoscopia e grafotecnia",
        "Equipamentos de magnificação e iluminação especial",
        "Laudos ilustrados com análises comparativas detalhadas",
        "Metodologia científica baseada em princípios da grafoscopia",
        "Experiência em documentos de alta complexidade",
        "Análise de documentos em formato físico e digital",
      ]}
      color="bg-purple-600"
      relatedServices={relatedServices}
    />
  )
}

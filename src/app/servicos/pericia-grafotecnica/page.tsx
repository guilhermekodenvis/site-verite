import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Grafotécnica | Vérité Perícias',
  description: 'Perícia grafotécnica especializada. Autenticidade de assinaturas, análise de documentos e identificação de fraudes na escrita.',
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
      title="Perícia Grafotécnica"
      subtitle="Análise técnica especializada em documentos e assinaturas"
      description="Realizamos perícias grafotécnicas completas para verificação de autenticidade de assinaturas, análise de documentos e identificação de fraudes na escrita."
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
      process={[
        "Recebimento e análise dos documentos questionados",
        "Coleta de padrões de comparação (material autêntico do autor)",
        "Análise minuciosa com equipamentos de magnificação óptica",
        "Estudo comparativo dos elementos genéricos e genéticos da escrita",
        "Elaboração de laudo pericial com fundamentação técnica detalhada",
        "Ilustração do laudo com ampliações e marcações dos pontos relevantes",
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

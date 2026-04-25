import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Contábil | Vérité Perícias',
  description: 'Perícia contábil especializada para processos judiciais. Fraudes financeiras, avaliação patrimonial, cálculos trabalhistas e questões tributárias.',
}

const relatedServices = [
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { title: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { title: 'Perícia Grafotécnica', href: '/servicos/pericia-grafotecnica' },
]

export default function PericiaContabilPage() {
  return (
    <ServicePageTemplate
      iconName="accounting"
      title="Perícia Contábil"
      subtitle="Análise técnica especializada em questões financeiras e patrimoniais"
      description="Oferecemos perícias contábeis completas para processos judiciais, com análises detalhadas de documentos financeiros, cálculos precisos e laudos fundamentados tecnicamente."
      longDescription={[
        "A perícia contábil é um instrumento fundamental para a elucidação de questões financeiras e patrimoniais em processos judiciais. Nossos peritos contábeis são profissionais com registro no CRC e vasta experiência em análises complexas de natureza contábil, financeira e tributária.",
        "Realizamos levantamentos patrimoniais, análise de fraudes financeiras, cálculos trabalhistas, revisão de contratos bancários, apuração de haveres societários e diversas outras análises que demandam conhecimento técnico especializado em contabilidade.",
        "Nossa metodologia segue rigorosamente as Normas Brasileiras de Contabilidade aplicáveis à perícia contábil (NBC TP 01 e NBC PP 01), garantindo a qualidade técnica e a aceitação judicial dos nossos laudos.",
      ]}
      areas={[
        "Fraudes financeiras e desvios contábeis",
        "Avaliação e apuração de haveres societários",
        "Cálculos trabalhistas e previdenciários",
        "Revisão de contratos bancários",
        "Análise de impostos e questões tributárias",
        "Dissolução de sociedades empresariais",
        "Inventários e partilhas de bens",
        "Recuperação judicial e falências",
      ]}
      benefits={[
        "Peritos com registro ativo no CRC e certificação em perícia contábil",
        "Experiência em processos de alta complexidade",
        "Memórias de cálculo detalhadas e auditáveis",
        "Utilização de softwares especializados para cálculos",
        "Conhecimento atualizado da legislação tributária e trabalhista",
        "Capacidade de análise de grandes volumes de dados",
      ]}
      color="bg-green-600"
      relatedServices={relatedServices}
    />
  )
}

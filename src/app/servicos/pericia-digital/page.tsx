import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícias em Assinaturas Digitais e Eletrônicas | Vérité Perícias',
  description: 'Perícia especializada em assinaturas digitais, eletrônicas e arquivos PDF. Análise de evidências digitais com ferramentas específicas para processos judiciais.',
}

const relatedServices = [
  { title: 'Perícia Documentoscópica/Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { title: 'Perícia Criminal/Cível', href: '/servicos/pericia-criminal' },
]

export default function PericiaDigitalPage() {
  return (
    <ServicePageTemplate
      iconName="digital"
      title="Perícias em Assinaturas Digitais e Eletrônicas"
      subtitle="Análise especializada de assinaturas digitais, eletrônicas e arquivos PDF"
      description="O impacto da transformação tecnológica vai além das mudanças no estilo de vida, influenciando profundamente o campo jurídico. A popularização dos dispositivos móveis trouxe uma nova dimensão para a coleta e análise de evidências em diversos tipos de processos legais."
      longDescription={[
        "O impacto da transformação tecnológica vai além das mudanças no estilo de vida, influenciando profundamente o campo jurídico. A popularização dos dispositivos móveis trouxe uma nova dimensão para a coleta e análise de evidências em diversos tipos de processos legais e devem incluir procedimentos de extração de dados, coleta e análise com uso de ferramentas específicas, análise de dados, entre outros.",
        "Os peritos do Instituto Vérité são treinados para seguir procedimentos rigorosos, garantir a preservação dos dados e entender os impactos legais de cada ação durante o trabalho técnico.",
        "Com o crescimento das transações digitais e a adoção massiva de assinaturas eletrônicas em contratos, procurações e documentos oficiais, a perícia em assinaturas digitais tornou-se fundamental para a segurança jurídica. Nossa equipe possui formação específica para analisar a autenticidade e integridade de documentos assinados digitalmente.",
      ]}
      areas={[
        "Verificação de autenticidade de assinaturas digitais",
        "Análise de assinaturas eletrônicas em contratos e documentos",
        "Perícia em arquivos PDF e metadados",
        "Extração e análise de dados de dispositivos móveis",
        "Verificação de integridade de documentos eletrônicos",
        "Análise de certificados digitais",
        "Detecção de adulterações em documentos digitais",
        "Coleta e preservação de evidências digitais",
      ]}
      benefits={[
        "Peritos treinados com procedimentos rigorosos de análise digital",
        "Ferramentas especializadas para extração e análise de dados",
        "Preservação da cadeia de custódia digital",
        "Conhecimento profundo dos impactos legais de cada ação técnica",
        "Experiência em análise de múltiplas plataformas e formatos",
        "Laudos técnicos detalhados com fundamentação científica",
      ]}
      color="bg-teal-600"
      relatedServices={relatedServices}
    />
  )
}

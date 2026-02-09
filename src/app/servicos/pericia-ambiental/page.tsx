import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Ambiental | Vérité Perícias',
  description: 'Perícia ambiental especializada para processos judiciais. Análise de impactos ambientais, contaminação, desmatamento e questões ecológicas.',
}

const relatedServices = [
  { title: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
  { title: 'Perícia Criminal', href: '/servicos/pericia-criminal' },
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
]

export default function PericiaAmbientalPage() {
  return (
    <ServicePageTemplate
      iconName="environmental"
      title="Perícia Ambiental"
      subtitle="Análise técnica especializada em questões ecológicas e meio ambiente"
      description="Oferecemos perícias ambientais completas para processos judiciais, com análises técnicas de impactos ambientais, contaminação de solo e água, e danos ecológicos."
      longDescription={[
        "A perícia ambiental é fundamental para o esclarecimento de questões relacionadas ao meio ambiente em disputas judiciais. Nossa equipe é formada por profissionais das áreas de biologia, engenharia ambiental, geologia e química, garantindo uma análise multidisciplinar dos casos.",
        "Atuamos em casos de contaminação de solo e água, desmatamento ilegal, danos à fauna e flora, licenciamento ambiental, recuperação de áreas degradadas, e valoração de danos ambientais. Utilizamos metodologias reconhecidas pelos órgãos ambientais e pela comunidade científica.",
        "Nossos laudos são elaborados com base em levantamentos de campo detalhados, análises laboratoriais quando necessário, e interpretação de imagens de satélite e outros recursos de sensoriamento remoto. Seguimos rigorosamente a legislação ambiental vigente.",
      ]}
      areas={[
        "Contaminação de solo e águas subterrâneas",
        "Desmatamento e danos à vegetação nativa",
        "Danos à fauna silvestre e aquática",
        "Poluição atmosférica e sonora",
        "Licenciamento ambiental e estudos de impacto",
        "Valoração econômica de danos ambientais",
        "Recuperação de áreas degradadas",
        "Crimes ambientais e infrações administrativas",
      ]}
      process={[
        "Análise documental do processo e licenças ambientais envolvidas",
        "Planejamento e realização de vistoria técnica em campo",
        "Coleta de amostras para análises laboratoriais quando necessário",
        "Interpretação de imagens de satélite e dados de sensoriamento remoto",
        "Avaliação dos impactos ambientais e elaboração do laudo pericial",
        "Cálculo da valoração do dano ambiental quando aplicável",
      ]}
      benefits={[
        "Equipe multidisciplinar (biólogos, engenheiros, geólogos)",
        "Laboratórios parceiros certificados para análises",
        "Uso de tecnologia de geoprocessamento e sensoriamento remoto",
        "Conhecimento profundo da legislação ambiental brasileira",
        "Experiência em casos de alta complexidade ambiental",
        "Metodologias aceitas pelos órgãos ambientais",
      ]}
      color="bg-emerald-600"
      relatedServices={relatedServices}
    />
  )
}

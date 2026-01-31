import { Metadata } from 'next'
import { FaUserMd } from 'react-icons/fa'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia Médica | Vérité Perícias',
  description: 'Perícia médica especializada para casos judiciais. Erros médicos, acidentes de trabalho, invalidez e danos à saúde. Laudos técnicos precisos e imparciais.',
}

const relatedServices = [
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { title: 'Perícia Criminal', href: '/servicos/pericia-criminal' },
  { title: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
  { title: 'Perícia Ambiental', href: '/servicos/pericia-ambiental' },
]

export default function PericiaMedicaPage() {
  return (
    <ServicePageTemplate
      icon={FaUserMd}
      title="Perícia Médica"
      subtitle="Avaliação técnica especializada em questões de saúde"
      description="Realizamos perícias médicas completas e imparciais para processos judiciais, com laudos técnicos detalhados que auxiliam juízes e advogados na tomada de decisões fundamentadas."
      longDescription={[
        "A perícia médica é um procedimento técnico-científico realizado por médico especializado que tem como objetivo esclarecer questões relacionadas à saúde em processos judiciais. Nossa equipe de peritos médicos possui ampla experiência em diversas especialidades, garantindo análises precisas e fundamentadas.",
        "Atuamos em casos de erros médicos, acidentes de trabalho, doenças ocupacionais, invalidez, lesões corporais e danos à saúde em geral. Cada caso é tratado com rigor técnico e ética profissional, seguindo os mais altos padrões da medicina legal.",
        "Nossos laudos são elaborados de forma clara e objetiva, com linguagem acessível aos operadores do direito, sem perder a precisão técnica necessária. Utilizamos metodologias reconhecidas internacionalmente e nos mantemos atualizados com os mais recentes avanços da medicina.",
      ]}
      areas={[
        "Erros médicos e responsabilidade profissional",
        "Acidentes de trabalho e doenças ocupacionais",
        "Avaliação de invalidez e incapacidade laboral",
        "Lesões corporais e danos estéticos",
        "Perícias previdenciárias (INSS)",
        "Danos morais e materiais relacionados à saúde",
        "Simulação e dissimulação de doenças",
        "Nexo causal entre doenças e atividades",
      ]}
      process={[
        "Análise detalhada dos autos processuais e documentação médica disponível",
        "Agendamento e realização de exame pericial presencial quando necessário",
        "Solicitação de exames complementares se indicados tecnicamente",
        "Elaboração de laudo pericial completo com fundamentação científica",
        "Resposta aos quesitos formulados pelas partes de forma clara e objetiva",
        "Comparecimento em audiência para esclarecimentos quando convocado",
      ]}
      benefits={[
        "Peritos médicos com registro no CRM e especialização em medicina legal",
        "Experiência em mais de 500 perícias médicas realizadas",
        "Laudos claros, objetivos e tecnicamente fundamentados",
        "Imparcialidade absoluta e compromisso com a verdade científica",
        "Atendimento em todo o estado de São Paulo",
        "Prazos cumpridos rigorosamente",
      ]}
      color="bg-blue-600"
      relatedServices={relatedServices}
    />
  )
}

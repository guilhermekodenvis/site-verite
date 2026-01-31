import { Metadata } from 'next'
import { FaLaptop } from 'react-icons/fa'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Perícia em Informática | Vérité Perícias',
  description: 'Perícia em informática e forense digital. Crimes cibernéticos, análise de dados digitais, recuperação de evidências e segurança da informação.',
}

const relatedServices = [
  { title: 'Perícia Criminal', href: '/servicos/pericia-criminal' },
  { title: 'Perícia Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { title: 'Perícia Médica', href: '/servicos/pericia-medica' },
]

export default function PericiaInformaticaPage() {
  return (
    <ServicePageTemplate
      icon={FaLaptop}
      title="Perícia em Informática"
      subtitle="Investigação digital e análise forense de sistemas computacionais"
      description="Realizamos perícias em informática e forense digital para processos judiciais, com análise de dados digitais, crimes cibernéticos e recuperação de evidências eletrônicas."
      longDescription={[
        "A perícia em informática, também conhecida como forense digital ou computação forense, é a área especializada na coleta, preservação e análise de evidências digitais. Com o crescimento exponencial das tecnologias digitais, essa modalidade pericial tornou-se essencial para a resolução de disputas judiciais.",
        "Nossa equipe é formada por especialistas em segurança da informação, análise forense digital e investigação de crimes cibernéticos. Utilizamos ferramentas forenses reconhecidas internacionalmente e seguimos metodologias que garantem a preservação da cadeia de custódia digital.",
        "Atuamos em casos de crimes cibernéticos, fraudes eletrônicas, vazamento de dados, violação de propriedade intelectual em ambiente digital, disputas contratuais envolvendo sistemas de TI, e qualquer situação que demande análise técnica de dispositivos eletrônicos ou dados digitais.",
      ]}
      areas={[
        "Crimes cibernéticos e fraudes eletrônicas",
        "Análise forense de computadores e dispositivos móveis",
        "Recuperação de dados apagados ou corrompidos",
        "Investigação de vazamento de informações",
        "Análise de e-mails e comunicações eletrônicas",
        "Violação de propriedade intelectual digital",
        "Disputas envolvendo sistemas de software",
        "Análise de logs e trilhas de auditoria",
      ]}
      process={[
        "Planejamento da coleta e preservação das evidências digitais",
        "Aquisição forense de mídias com validação de integridade (hash)",
        "Preservação da cadeia de custódia digital documentada",
        "Análise técnica detalhada utilizando ferramentas forenses especializadas",
        "Elaboração de laudo pericial com evidências e capturas de tela",
        "Apresentação de resultados em linguagem acessível ao judiciário",
      ]}
      benefits={[
        "Peritos certificados em forense digital (EnCE, CCE, GCFE)",
        "Laboratório equipado com ferramentas forenses licenciadas",
        "Metodologia que preserva a cadeia de custódia digital",
        "Capacidade de análise de múltiplas plataformas e sistemas",
        "Experiência em casos de alta complexidade tecnológica",
        "Atualização constante sobre novas tecnologias e ameaças",
      ]}
      color="bg-cyan-600"
      relatedServices={relatedServices}
    />
  )
}

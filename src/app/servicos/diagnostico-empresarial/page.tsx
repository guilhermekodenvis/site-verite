import { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Diagnóstico Empresarial | Vérité Perícias',
  description: 'Diagnóstico empresarial completo com mapeamento de riscos tributários, financeiros, trabalhistas e contábeis. Laudo técnico com base normativa NBC, CPC, CLT, BACEN, ISO e COSO.',
}

const relatedServices = [
  { title: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { title: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { title: 'Perícia Criminal/Cível', href: '/servicos/pericia-criminal' },
  { title: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
]

export default function DiagnosticoEmpresarialPage() {
  return (
    <ServicePageTemplate
      iconName="diagnostic"
      title="Diagnóstico Empresarial"
      subtitle="Análise integrada de riscos tributários, financeiros, trabalhistas e contábeis"
      description="Realizamos diagnóstico empresarial completo para identificar riscos ocultos antes que se transformem em problemas críticos, entregando laudo técnico claro com base normativa sólida e recomendações prontas para decisão."
      longDescription={[
        "Realizamos diagnóstico empresarial completo para identificar riscos tributários, financeiros, trabalhistas e contábeis que muitas vezes passam despercebidos. Nossa análise é estruturada, baseada em normas como NBC, CPC, CLT, BACEN, ISO e COSO, combinando avaliação técnica, cruzamento de dados e testes de integridade para garantir consistência e confiabilidade.",
        "O trabalho envolve análise documental, indicadores financeiros, identificação de passivos ocultos, verificação de conformidade e detecção de inconsistências — sempre com base normativa. Cada achado é documentado com evidências, impacto estimado e grau de urgência, permitindo priorização precisa das ações corretivas.",
        "O resultado é um laudo claro, objetivo e pronto para decisão, com mapeamento de riscos, evidências, impactos e recomendações práticas. Ideal para empresas que precisam de transparência técnica antes de transações relevantes, acesso a crédito, entrada de investidores ou processos de regularização e crescimento estruturado.",
      ]}
      areas={[
        "Empresas buscando crédito — laudo técnico que demonstra saúde financeira e transparência para bancos e credores",
        "Fusões e Aquisições (M&A) — due diligence independente para identificar passivos ocultos antes de fechar qualquer negócio",
        "Entrada de investidores — demonstre conhecimento completo da empresa de cima a baixo com base normativa sólida",
        "Regularização fiscal — mapeie e priorize riscos tributários antes que virem autuação, execução ou exclusão de parcelamento",
        "Prevenção a fraudes internas — detecte desvios, inconsistências e comportamentos atípicos com metodologia antifraude estruturada",
        "Crescimento acelerado — valide se os controles acompanham a expansão antes que os riscos escalem",
        "Setor Automotivo/Manufatura (IATF 16949) — atendimento ao requisito 8.4.1.2: avaliação de fornecedores com base em risco financeiro e operacional",
        "Contadores e escritórios — amplie sua autoridade técnica e diferencie seu escritório com diagnóstico independente",
      ]}
      benefits={[
        "Análise estruturada com base normativa em NBC, CPC, CLT, BACEN, ISO e COSO",
        "Cruzamento de dados e testes de integridade para máxima confiabilidade",
        "Identificação de passivos ocultos antes que virem autuações ou litígios",
        "Laudo técnico objetivo, claro e pronto para apresentação a credores ou investidores",
        "Metodologia antifraude estruturada com evidências documentadas e impacto estimado",
        "Atendimento ao requisito IATF 16949 – 8.4.1.2 para o setor automotivo e manufatura",
      ]}
      color="bg-amber-600"
      relatedServices={relatedServices}
    />
  )
}

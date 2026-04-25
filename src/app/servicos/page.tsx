import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { FaStethoscope, FaCalculator, FaHardHat, FaFingerprint, FaLeaf, FaLaptop, FaGavel, FaFileSignature, FaTooth, FaChartBar } from 'react-icons/fa'

const services = [
  {
    icon: FaFingerprint,
    title: 'Perícia Documentoscópica/Grafotécnica',
    description: 'Averiguação de fraudes em documentos como montagens, adulterações/alterações, falsificações de escrita.',
    href: '/servicos/pericia-grafotecnica',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    areas: ['Autenticidade de assinaturas', 'Análise de documentos', 'Fraudes na escrita', 'Adulterações e montagens'],
  },
  {
    icon: FaFileSignature,
    title: 'Perícias em Assinaturas Digitais e Eletrônicas',
    description: 'Análise de assinaturas digitais, eletrônicas e arquivos PDF com ferramentas específicas.',
    href: '/servicos/pericia-digital',
    color: 'bg-teal-50 text-teal-600 border-teal-200',
    areas: ['Assinaturas digitais', 'Assinaturas eletrônicas', 'Arquivos PDF', 'Extração de dados'],
  },
  {
    icon: FaStethoscope,
    title: 'Perícia Médica',
    description: 'Avaliação técnica especializada em questões de saúde, acidentes de trabalho, invalidez e danos corporais.',
    href: '/servicos/pericia-medica',
    color: 'bg-red-50 text-red-600 border-red-200',
    areas: ['Erros médicos', 'Acidentes de trabalho (INSS)', 'Invalidez', 'Danos à saúde'],
  },
  {
    icon: FaTooth,
    title: 'Perícia Odontológica',
    description: 'Odontologia Legal aplicada a processos cíveis, criminais, trabalhistas e previdenciários.',
    href: '/servicos/pericia-odontologica',
    color: 'bg-pink-50 text-pink-600 border-pink-200',
    areas: ['Erros odontológicos', 'Auditorias/Seguros', 'Área trabalhista', 'Danos buco-faciais'],
  },
  {
    icon: FaHardHat,
    title: 'Perícia de Engenharia',
    description: 'Avaliação técnica de imóveis, estruturas, instalações e sistemas mecânicos e elétricos.',
    href: '/servicos/pericia-engenharia',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    areas: ['Avaliação de imóveis', 'Danos estruturais', 'Construções', 'Elétrica e mecânica'],
  },
  {
    icon: FaCalculator,
    title: 'Perícia Contábil',
    description: 'Análise técnica de questões financeiras, patrimoniais e trabalhistas para subsidiar decisões judiciais.',
    href: '/servicos/pericia-contabil',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    areas: ['Fraudes financeiras', 'Avaliação patrimonial', 'Cálculos trabalhistas', 'Impostos'],
  },
  {
    icon: FaLeaf,
    title: 'Perícia Ambiental',
    description: 'Avaliação técnica de impactos ambientais e questões ecológicas para processos judiciais.',
    href: '/servicos/pericia-ambiental',
    color: 'bg-green-50 text-green-600 border-green-200',
    areas: ['Questões ambientais', 'Avaliação de impactos', 'Danos ecológicos'],
  },
  {
    icon: FaLaptop,
    title: 'Perícia em Informática',
    description: 'Análise forense de dados digitais, crimes cibernéticos e evidências eletrônicas.',
    href: '/servicos/pericia-informatica',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    areas: ['Crimes cibernéticos', 'Análise de dados digitais', 'Evidências eletrônicas'],
  },
  {
    icon: FaGavel,
    title: 'Perícia Criminal/Cível',
    description: 'Análise técnico-científica de evidências para esclarecimento de fatos criminais e cíveis.',
    href: '/servicos/pericia-criminal',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    areas: ['Análise de local de crime', 'Vestígios', 'Acidentes de trânsito', 'Incêndios'],
  },
  {
    icon: FaChartBar,
    title: 'Diagnóstico Empresarial',
    description: 'Diagnóstico completo de riscos tributários, financeiros, trabalhistas e contábeis com base normativa sólida (NBC, CPC, CLT, BACEN, ISO, COSO) e laudo técnico pronto para decisão.',
    href: '/servicos/diagnostico-empresarial',
    color: 'bg-gray-100 text-amber-600 border-gray-200',
    areas: ['Fusões e Aquisições (M&A)', 'Acesso a crédito', 'Prevenção a fraudes', 'Regularização fiscal'],
  },
]

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6">
              Nossos <span className="text-gold-400">Serviços</span>
            </h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              Oferecemos uma ampla gama de serviços periciais especializados, 
              atendendo às mais diversas demandas do sistema judiciário brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border-2 ${service.color.split(' ')[2]} p-8 hover:shadow-xl transition-shadow`}
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Icon */}
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 ${service.color.split(' ')[0]} ${service.color.split(' ')[1]} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-8">
                    <h2 className="font-heading font-semibold text-2xl text-primary-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-primary-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.map((area, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="md:col-span-3 flex md:justify-end">
                    <Link 
                      href={service.href}
                      className="inline-flex items-center px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors group"
                    >
                      Saiba mais
                      <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-900 mb-6">
              Precisa de uma perícia especializada?
            </h2>
            <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma análise inicial do seu caso. 
              Nossa equipe está pronta para ajudá-lo.
            </p>
            <Link href="/contato" className="btn-primary bg-primary-900 hover:bg-primary-800">
              Solicitar Orçamento
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

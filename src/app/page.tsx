import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheck, FiPhone, FiAward, FiUsers, FiFileText, FiShield } from 'react-icons/fi'
import { FaStethoscope, FaCalculator, FaHardHat, FaFingerprint, FaLeaf, FaLaptop, FaGavel } from 'react-icons/fa'

const services = [
  {
    icon: FaStethoscope,
    title: 'Perícia Médica',
    description: 'Erros médicos, acidentes de trabalho (INSS), invalidez e danos à saúde.',
    href: '/servicos/pericia-medica',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: FaCalculator,
    title: 'Perícia Contábil',
    description: 'Fraudes financeiras, avaliação patrimonial, cálculos trabalhistas e impostos.',
    href: '/servicos/pericia-contabil',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FaHardHat,
    title: 'Perícia de Engenharia',
    description: 'Avaliação de imóveis, danos estruturais, construções, elétrica e mecânica.',
    href: '/servicos/pericia-engenharia',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: FaGavel,
    title: 'Perícia Criminal',
    description: 'Análise de local de crime, vestígios, balística, química e biologia forense.',
    href: '/servicos/pericia-criminal',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: FaFingerprint,
    title: 'Perícia Grafotécnica',
    description: 'Autenticidade de assinaturas, análise de documentos e fraudes na escrita.',
    href: '/servicos/pericia-grafotecnica',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: FaLeaf,
    title: 'Perícia Ambiental',
    description: 'Questões ligadas ao meio ambiente e avaliação de seus impactos.',
    href: '/servicos/pericia-ambiental',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: FaLaptop,
    title: 'Perícia em Informática',
    description: 'Crimes cibernéticos e análise de dados digitais.',
    href: '/servicos/pericia-informatica',
    color: 'bg-cyan-50 text-cyan-600',
  },
]

const differentials = [
  {
    icon: FiAward,
    title: 'Expertise Comprovada',
    description: 'Profissionais altamente qualificados com anos de experiência em perícias judiciais.',
  },
  {
    icon: FiFileText,
    title: 'Laudos Detalhados',
    description: 'Relatórios técnicos completos, fundamentados e de fácil compreensão.',
  },
  {
    icon: FiUsers,
    title: 'Atendimento Personalizado',
    description: 'Acompanhamento próximo do cliente em todas as etapas do processo.',
  },
  {
    icon: FiShield,
    title: 'Credibilidade',
    description: 'Reconhecimento no meio jurídico pela qualidade e imparcialidade dos trabalhos.',
  },
]

const stats = [
  { value: '500+', label: 'Perícias Realizadas' },
  { value: '15+', label: 'Anos de Experiência' },
  { value: '98%', label: 'Clientes Satisfeitos' },
  { value: '7', label: 'Áreas de Atuação' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-sm">
                <FiAward className="w-4 h-4 mr-2" />
                Excelência em Perícias Judiciais
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                A <span className="text-gold-400">verdade</span> fundamentada em{' '}
                <span className="text-gold-400">ciência</span> e{' '}
                <span className="text-gold-400">expertise</span>
              </h1>
              
              <p className="text-xl text-primary-200 leading-relaxed max-w-xl">
                Somos especialistas em perícias judiciais, oferecendo laudos técnicos imparciais, 
                precisos e fundamentados para todas as esferas do direito.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato" className="btn-secondary">
                  Solicitar Orçamento
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/servicos" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Conheça Nossos Serviços
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-primary-300">
                  <FiPhone className="w-5 h-5 text-gold-400" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-[500px] rounded-2xl bg-primary-800/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Image 
                      src="/logo.jpg" 
                      alt="Vérité Perícias" 
                      width={200} 
                      height={200}
                      className="mx-auto mb-6 rounded-lg"
                    />
                    <div className="image-placeholder w-full h-48 rounded-xl">
                      <div className="text-center p-4">
                        <p className="text-sm">Espaço para imagem institucional</p>
                        <p className="text-xs mt-1">Sugestão: Foto profissional das sócias</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500/20 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary-900">
                    {stat.value}
                  </div>
                  <div className="text-primary-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-6">Nossos Serviços</h2>
            <p className="section-subtitle mx-auto">
              Oferecemos uma ampla gama de serviços periciais, atendendo às mais diversas 
              demandas do sistema judiciário brasileiro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="card p-6 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-gold-600 text-sm font-medium group-hover:text-gold-700">
                  Saiba mais
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/servicos" className="btn-primary">
              Ver Todos os Serviços
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title mb-6">
                Conheça a <span className="text-gold-500">Vérité</span>
              </h2>
              <p className="text-primary-600 text-lg mb-6 leading-relaxed">
                A Vérité é uma empresa especializada em perícias judiciais, fundada com o 
                compromisso de fornecer laudos técnicos imparciais, precisos e fundamentados 
                cientificamente.
              </p>
              <p className="text-primary-600 mb-8 leading-relaxed">
                Nossa equipe é formada por profissionais altamente qualificados, com vasta 
                experiência em suas respectivas áreas de atuação, garantindo a excelência 
                em cada trabalho realizado.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Laudos técnicos detalhados e fundamentados',
                  'Equipe multidisciplinar de peritos especializados',
                  'Atendimento em todo o território nacional',
                  'Compromisso com prazos e qualidade',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheck className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sobre" className="btn-primary">
                  Conheça Nossa História
                </Link>
                <Link href="/equipe" className="btn-outline">
                  Nossa Equipe
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full h-[400px] rounded-2xl image-placeholder">
                  <div className="text-center p-8">
                    <FiUsers className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Espaço para imagem da equipe</p>
                    <p className="text-xs mt-2">Sugestão: Foto das sócias em ambiente profissional</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-100 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-primary-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-white mb-6">Por que escolher a Vérité?</h2>
            <p className="text-primary-200 text-lg">
              Nosso compromisso é com a verdade técnica e a excelência em cada laudo produzido.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-900" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              Precisa de uma perícia judicial?
            </h2>
            <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma análise inicial do seu caso. 
              Nossa equipe está pronta para atender suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-primary bg-primary-900 hover:bg-primary-800">
                Solicitar Orçamento
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+5511999999999" className="btn-outline border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                <FiPhone className="mr-2 w-5 h-5" />
                (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

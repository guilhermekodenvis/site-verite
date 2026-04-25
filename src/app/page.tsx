'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheck, FiPhone, FiAward, FiUsers, FiFileText, FiShield } from 'react-icons/fi'
import { FaStethoscope, FaCalculator, FaHardHat, FaFingerprint, FaLeaf, FaLaptop, FaGavel, FaFileSignature, FaTooth, FaChartBar } from 'react-icons/fa'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect, useState, useRef } from 'react'

const services = [
  {
    icon: FaFingerprint,
    title: 'Perícia Documentoscópica/Grafotécnica',
    description: 'Averiguação de fraudes em documentos, montagens, adulterações, falsificações de escrita.',
    href: '/servicos/pericia-grafotecnica',
    color: 'from-indigo-500/20 to-indigo-600/10',
    iconColor: 'text-indigo-500',
    borderColor: 'border-indigo-500/20 hover:border-indigo-500/40',
  },
  {
    icon: FaFileSignature,
    title: 'Perícias em Assinaturas Digitais e Eletrônicas',
    description: 'Análise de assinaturas digitais, eletrônicas e arquivos PDF com ferramentas específicas.',
    href: '/servicos/pericia-digital',
    color: 'from-teal-500/20 to-teal-600/10',
    iconColor: 'text-teal-500',
    borderColor: 'border-teal-500/20 hover:border-teal-500/40',
  },
  {
    icon: FaStethoscope,
    title: 'Perícia Médica',
    description: 'Erros médicos, acidentes de trabalho (INSS), invalidez e danos à saúde.',
    href: '/servicos/pericia-medica',
    color: 'from-red-500/20 to-red-600/10',
    iconColor: 'text-red-500',
    borderColor: 'border-red-500/20 hover:border-red-500/40',
  },
  {
    icon: FaTooth,
    title: 'Perícia Odontológica',
    description: 'Odontologia Legal para processos cíveis, criminais, trabalhistas e previdenciários.',
    href: '/servicos/pericia-odontologica',
    color: 'from-pink-500/20 to-pink-600/10',
    iconColor: 'text-pink-500',
    borderColor: 'border-pink-500/20 hover:border-pink-500/40',
  },
  {
    icon: FaHardHat,
    title: 'Perícia de Engenharia',
    description: 'Avaliação de imóveis, danos estruturais, construções, elétrica e mecânica.',
    href: '/servicos/pericia-engenharia',
    color: 'from-orange-500/20 to-orange-600/10',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
  },
  {
    icon: FaCalculator,
    title: 'Perícia Contábil',
    description: 'Fraudes financeiras, avaliação patrimonial, cálculos trabalhistas e impostos.',
    href: '/servicos/pericia-contabil',
    color: 'from-blue-500/20 to-blue-600/10',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
  },
  {
    icon: FaLeaf,
    title: 'Perícia Ambiental',
    description: 'Questões ligadas ao meio ambiente e avaliação de seus impactos.',
    href: '/servicos/pericia-ambiental',
    color: 'from-emerald-500/20 to-emerald-600/10',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
  {
    icon: FaLaptop,
    title: 'Perícia em Informática',
    description: 'Crimes cibernéticos e análise de dados digitais.',
    href: '/servicos/pericia-informatica',
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    icon: FaGavel,
    title: 'Perícia Criminal/Cível',
    description: 'Análise de local de crime, vestígios, acidentes de trânsito e incêndios.',
    href: '/servicos/pericia-criminal',
    color: 'from-purple-500/20 to-purple-600/10',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
  },
  {
    icon: FaChartBar,
    title: 'Diagnóstico Empresarial',
    description: 'Mapeamento integrado de riscos tributários, financeiros, trabalhistas e contábeis com laudo técnico.',
    href: '/servicos/diagnostico-empresarial',
    color: 'from-amber-500/20 to-amber-600/10',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
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
  { value: 500, suffix: '+', label: 'Perícias Realizadas' },
  { value: 30, suffix: '+', label: 'Anos de Experiência' },
  { value: 98, suffix: '%', label: 'Clientes Satisfeitos' },
  { value: 10, suffix: '', label: 'Áreas de Atuação' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) {
              window.requestAnimationFrame(step)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function HomePage() {
  const servicesReveal = useScrollReveal()
  const aboutReveal = useScrollReveal()
  const differentialsReveal = useScrollReveal()
  const ctaReveal = useScrollReveal()

  return (
    <>
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
          
          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 opacity-60 mesh-gradient-dark" />
          
          {/* Animated Floating Shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-float-slow" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                 backgroundSize: '50px 50px'
               }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-gold-300 text-sm">
                <FiAward className="w-4 h-4" />
                <span>Excelência em Perícias Judiciais</span>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] tracking-tight">
                A <span className="text-gradient-gold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">verdade</span> fundamentada em{' '}
                <span className="text-gradient-gold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">ciência</span> e{' '}
                <span className="text-gradient-gold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">expertise</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-primary-200/90 leading-relaxed max-w-xl">
                Somos especialistas em perícias judiciais, oferecendo laudos técnicos imparciais, 
                precisos e fundamentados para todas as esferas do direito.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contato" className="btn-secondary group">
                  <span>Solicitar Orçamento</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/servicos" className="btn-glass-dark">
                  Conheça Nossos Serviços
                </Link>
              </div>
              

            </div>
            
            {/* Right Content - Hero Image & Stats */}
            <div className="hidden lg:block animate-fade-in-left delay-300">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10">
                  <div className="glass-card-dark p-3">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/socias.png"
                        alt="Sócias do Instituto Vérité"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 z-20 glass p-6 rounded-2xl shadow-glass-lg animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                      <FiAward className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-semibold text-primary-900">30+</p>
                      <p className="text-primary-500 text-sm">Anos de experiência</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-400/30 rounded-2xl -z-10 animate-pulse-soft" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-transparent rounded-2xl blur-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-12 pb-12">
        <div className="container-custom">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-glass-lg border border-white/60">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-heading font-semibold text-primary-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-primary-500 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-primary-50/50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/50 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary-100/50 to-transparent opacity-60" />
        
        <div className="container-custom relative">
          <div 
            ref={servicesReveal.ref}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              servicesReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label mb-4 inline-block">Áreas de Atuação</span>
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
                className={`group relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border ${service.borderColor} 
                           shadow-soft hover:shadow-glass-lg hover:-translate-y-2 
                           transition-all duration-500 ease-smooth overflow-hidden`}
                style={{ 
                  transitionDelay: servicesReveal.isRevealed ? `${index * 75}ms` : '0ms',
                  opacity: servicesReveal.isRevealed ? 1 : 0,
                  transform: servicesReveal.isRevealed ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-4 
                                 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary-900 mb-2 group-hover:text-primary-950">
                    {service.title}
                  </h3>
                  <p className="text-primary-500 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-gold-600 text-sm font-medium">
                    Saiba mais
                    <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/servicos" className="btn-primary">
              <span>Ver Todos os Serviços</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div 
            ref={aboutReveal.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              aboutReveal.isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image Side */}
            <div className={`relative transition-all duration-700 delay-200 ${
              aboutReveal.isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <Image
                    src="/images/eneida-reuniao.png"
                    alt="Eneida em reunião"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Secondary Image */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 z-10">
                  <div className="glass rounded-2xl p-2 shadow-glass-lg">
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src="/images/satisfacao.png"
                        alt="Satisfação e certificação"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-200 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gold-400/20 to-transparent rounded-2xl blur-xl -z-10" />
              </div>
            </div>

            {/* Content Side */}
            <div className={`transition-all duration-700 delay-400 ${
              aboutReveal.isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <span className="section-label mb-4 inline-block">Sobre Nós</span>
              <h2 className="section-title mb-6">
                Conheça a <span className="text-gradient-gold">Vérité</span>
              </h2>
              <p className="text-primary-600 text-lg mb-6 leading-relaxed">
                A Vérité é uma empresa especializada em perícias judiciais, fundada com o 
                compromisso de fornecer laudos técnicos imparciais, precisos e fundamentados 
                cientificamente.
              </p>
              <p className="text-primary-500 mb-8 leading-relaxed">
                Nossa equipe é formada por profissionais altamente qualificados, com formação em 
                Academia de Polícia Civil do Estado de São Paulo e com o mínimo de 25 anos de 
                experiência em laudos periciais, garantindo a excelência 
                em cada trabalho realizado.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Laudos técnicos detalhados e fundamentados',
                  'Profissionais multidisciplinares e peritos especializados',
                  'Atendimento em todo o território nacional',
                  'Compromisso com prazos e qualidade',
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 group"
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiCheck className="w-3.5 h-3.5 text-gold-700" />
                    </div>
                    <span className="text-primary-600">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sobre" className="btn-primary">
                  <span>Conheça Nossa História</span>
                </Link>
                <Link href="/fundadora" className="btn-outline">
                  <span>Nossa Fundadora</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient-dark opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div 
            ref={differentialsReveal.ref}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              differentialsReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-500/20 text-gold-400 text-sm font-medium rounded-full border border-gold-500/30 mb-4">
              Nossos Diferenciais
            </span>
            <h2 className="section-title text-white mb-6">Por que escolher a Vérité?</h2>
            <p className="text-primary-300 text-lg">
              Nosso compromisso é com a verdade técnica e a excelência em cada laudo produzido.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className={`group text-center p-8 rounded-2xl glass-card-dark hover:bg-primary-900/60 
                           transition-all duration-500`}
                style={{ 
                  transitionDelay: differentialsReveal.isRevealed ? `${index * 100}ms` : '0ms',
                  opacity: differentialsReveal.isRevealed ? 1 : 0,
                  transform: differentialsReveal.isRevealed ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 
                               shadow-glow-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-primary-950" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-900/10 rounded-full blur-3xl animate-float-delayed" />
        
        <div 
          ref={ctaReveal.ref}
          className={`container-custom relative z-10 transition-all duration-700 ${
            ctaReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-950 mb-6">
              Precisa de uma perícia judicial?
            </h2>
            <p className="text-primary-900/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco para uma análise inicial do seu caso. 
              Nossa equipe está pronta para atender suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-primary bg-primary-950 hover:bg-primary-900 shadow-glow-primary">
                <span>Solicitar Orçamento</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+5511982887949" className="btn-glass bg-white/20 hover:bg-white/40 text-primary-950">
                <FiPhone className="w-5 h-5" />
                <span>(11) 98288-7949</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

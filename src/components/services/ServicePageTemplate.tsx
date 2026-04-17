'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheck, FiPhone, FiFileText, FiArrowUp } from 'react-icons/fi'
import { FaUserMd, FaHardHat, FaFingerprint, FaSignature, FaLeaf, FaLaptopCode, FaFileSignature, FaTooth } from 'react-icons/fa'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Map icon names to components
const iconMap = {
  'medical': FaUserMd,
  'engineering': FaHardHat,
  'criminal': FaFingerprint,
  'graphotechnical': FaSignature,
  'environmental': FaLeaf,
  'it': FaLaptopCode,
  'digital': FaFileSignature,
  'odontology': FaTooth,
} as const

// Map icon names to service images
const imageMap: Record<string, string> = {
  'medical': '/images/medica.png',
  'engineering': '/images/engenharia.png',
  'criminal': '/images/criminal.png',
  'graphotechnical': '/images/grafotecnica.png',
  'environmental': '/images/ambiental.png',
  'it': '/images/informatica.png',
  'digital': '/images/digital.png',
  'odontology': '/images/odontologica.png',
}

type IconName = keyof typeof iconMap

interface ServicePageTemplateProps {
  iconName: IconName
  title: string
  subtitle: string
  description: string
  longDescription: string[]
  areas: string[]
  benefits: string[]
  color: string
  relatedServices: {
    title: string
    href: string
  }[]
}

export default function ServicePageTemplate({
  iconName,
  title,
  subtitle,
  description,
  longDescription,
  areas,
  benefits,
  color,
  relatedServices,
}: ServicePageTemplateProps) {
  const Icon = iconMap[iconName]
  const serviceImage = imageMap[iconName]
  const contentReveal = useScrollReveal()
  const areasReveal = useScrollReveal()
  const ctaReveal = useScrollReveal()

  return (
    <>
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
          <div className="absolute inset-0 opacity-40 mesh-gradient-dark" />
          
          {/* Floating Shapes */}
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl animate-float-delayed" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                 backgroundSize: '60px 60px'
               }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
            {/* Icon Badge */}
            <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-gold`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 tracking-tight">
              {title}
            </h1>
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center px-5 py-2 glass-gold rounded-full text-gold-300 mb-6">
              <span className="text-sm font-medium">{subtitle}</span>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-primary-200/90 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contato" className="btn-secondary">
                <span>Solicitar Orçamento</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+5511982887949" className="btn-glass-dark">
                <FiPhone className="w-5 h-5" />
                <span>(11) 98288-7949</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About Section */}
              <div 
                ref={contentReveal.ref}
                className={`transition-all duration-700 ${
                  contentReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="section-label mb-4 inline-block">Detalhes</span>
                <h2 className="section-title mb-8">Sobre Este Serviço</h2>
                
                <div className="prose prose-lg max-w-none text-primary-600 space-y-6">
                  {longDescription.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Areas of Expertise */}
              <div 
                ref={areasReveal.ref}
                className={`transition-all duration-700 ${
                  areasReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-8">
                  Áreas de Atuação
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-5 glass-card group"
                      style={{ 
                        transitionDelay: areasReveal.isRevealed ? `${index * 50}ms` : '0ms',
                        opacity: areasReveal.isRevealed ? 1 : 0,
                        transform: areasReveal.isRevealed ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform duration-300">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-primary-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              

              
              {/* Service Image */}
              <div className="pt-4">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src={serviceImage}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Benefits Card */}
                <div className="glass rounded-2xl p-8 shadow-glass-lg border border-white/60">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-primary-900">
                      Por que nos escolher?
                    </h3>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold-200 transition-colors">
                          <FiCheck className="w-3 h-3 text-gold-700" />
                        </div>
                        <span className="text-primary-600 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Link href="/contato" className="btn-secondary w-full justify-center text-sm">
                      <span>Solicitar Orçamento</span>
                    </Link>
                    <a href="tel:+5511982887949" className="btn-outline w-full justify-center text-sm">
                      <FiPhone className="w-4 h-4" />
                      <span>Ligar Agora</span>
                    </a>
                  </div>
                </div>
                
                {/* Related Services */}
                <div className="glass-card p-6">
                  <h3 className="font-heading font-semibold text-lg text-primary-900 mb-5">
                    Outros Serviços
                  </h3>
                  <ul className="space-y-3">
                    {relatedServices.map((service, index) => (
                      <li key={index}>
                        <Link 
                          href={service.href}
                          className="flex items-center justify-between p-3 rounded-xl text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-all duration-300 group"
                        >
                          <span className="text-sm font-medium">{service.title}</span>
                          <FiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="divider-gradient my-4" />
                  <Link 
                    href="/servicos" 
                    className="flex items-center justify-center gap-2 text-gold-600 hover:text-gold-700 text-sm font-medium transition-colors"
                  >
                    <span>Ver todos os serviços</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Selo de Certificação */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/certificado.png"
                    alt="Selo de certificação"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
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
              Precisa de {title}?
            </h2>
            <p className="text-primary-900/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco para uma análise inicial do seu caso. 
              Nossa equipe de peritos especializados está pronta para ajudá-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-primary bg-primary-950 hover:bg-primary-900 shadow-glow-primary">
                <span>Solicitar Orçamento</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/servicos" className="btn-glass bg-white/20 hover:bg-white/40 text-primary-950">
                <span>Ver Todos os Serviços</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

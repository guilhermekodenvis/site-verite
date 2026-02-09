'use client'

import Link from 'next/link'
import { FiCheck, FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiFileText, FiShield, FiArrowRight, FiImage } from 'react-icons/fi'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function ImagePlaceholder({ 
  suggestion, 
  aspectRatio = 'aspect-video',
  icon: Icon = FiImage,
  className = ''
}: { 
  suggestion: string
  aspectRatio?: string
  icon?: React.ElementType
  className?: string
}) {
  return (
    <div className={`relative ${aspectRatio} rounded-2xl overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-gold-100/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" 
           style={{ backgroundSize: '200% 100%' }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-3 shadow-soft group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-primary-400" />
        </div>
        <p className="text-primary-500 text-sm font-medium">Espaço para imagem</p>
        <p className="text-primary-400 text-xs mt-1 max-w-[200px]">{suggestion}</p>
      </div>
      <div className="absolute inset-0 border-2 border-dashed border-primary-200/50 rounded-2xl pointer-events-none" />
    </div>
  )
}

const values = [
  {
    icon: FiShield,
    title: 'Integridade',
    description: 'Atuamos com ética e transparência em todos os nossos trabalhos, garantindo imparcialidade absoluta.',
  },
  {
    icon: FiAward,
    title: 'Excelência',
    description: 'Buscamos a perfeição técnica em cada laudo, com fundamentação científica sólida.',
  },
  {
    icon: FiUsers,
    title: 'Compromisso',
    description: 'Dedicação total aos nossos clientes, cumprindo prazos e superando expectativas.',
  },
  {
    icon: FiFileText,
    title: 'Precisão',
    description: 'Análises meticulosas e conclusões fundamentadas em metodologia científica rigorosa.',
  },
]

const timeline = [
  {
    year: '2010',
    title: 'Fundação',
    description: 'A Vérité foi fundada com a missão de oferecer perícias judiciais de excelência.',
  },
  {
    year: '2013',
    title: 'Expansão de Serviços',
    description: 'Ampliação do portfólio para incluir novas áreas de perícia especializada.',
  },
  {
    year: '2017',
    title: 'Reconhecimento',
    description: 'Consolidação como referência em perícias judiciais na região.',
  },
  {
    year: '2020',
    title: 'Atendimento Nacional',
    description: 'Expansão para atendimento em todo o território nacional.',
  },
  {
    year: 'Hoje',
    title: 'Liderança',
    description: 'Referência em qualidade e confiabilidade no mercado de perícias judiciais.',
  },
]

export default function SobrePage() {
  const historyReveal = useScrollReveal()
  const missionReveal = useScrollReveal()
  const valuesReveal = useScrollReveal()
  const timelineReveal = useScrollReveal()
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
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-gold rounded-full text-gold-300 text-sm font-medium mb-6">
              Conheça Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 tracking-tight">
              Sobre a <span className="text-gradient-gold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">Vérité</span>
            </h1>
            <p className="text-xl text-primary-200/90 leading-relaxed max-w-3xl mx-auto">
              Conheça nossa história, missão e os valores que guiam nosso trabalho 
              em busca da verdade técnica e científica.
            </p>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div 
            ref={historyReveal.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              historyReveal.isRevealed ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Content */}
            <div className={`transition-all duration-700 delay-200 ${
              historyReveal.isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <span className="section-label mb-4 inline-block">Quem Somos</span>
              <h2 className="section-title mb-8">
                Nossa <span className="text-gradient-gold">História</span>
              </h2>
              <div className="space-y-6 text-primary-600 leading-relaxed">
                <p>
                  A <strong className="text-primary-900">Vérité</strong> nasceu da visão de profissionais 
                  apaixonados pela busca da verdade técnica no âmbito judicial. Nosso nome, que significa 
                  "verdade" em francês, representa nosso compromisso fundamental: oferecer laudos periciais 
                  imparciais, precisos e fundamentados cientificamente.
                </p>
                <p>
                  Desde nossa fundação, trabalhamos incansavelmente para construir uma reputação sólida 
                  no mercado de perícias judiciais. Nossa equipe multidisciplinar combina conhecimento 
                  técnico especializado com experiência prática, garantindo que cada trabalho atenda 
                  aos mais altos padrões de qualidade.
                </p>
                <p>
                  Hoje, somos reconhecidos como referência em perícias judiciais, atendendo advogados, 
                  escritórios de advocacia, empresas e órgãos públicos em todo o território nacional.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className={`relative transition-all duration-700 delay-400 ${
              historyReveal.isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="relative">
                <ImagePlaceholder 
                  suggestion="Foto do escritório, fachada ou recepção"
                  aspectRatio="aspect-[4/3]"
                  icon={FiUsers}
                  className="shadow-soft-lg"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-glass-lg animate-float z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                      <FiAward className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-semibold text-primary-900">15+</p>
                      <p className="text-primary-500 text-sm">Anos de experiência</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-200 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/50 to-transparent opacity-60" />
        
        <div className="container-custom relative">
          <div 
            ref={missionReveal.ref}
            className={`grid md:grid-cols-3 gap-8 mb-24 transition-all duration-700 ${
              missionReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Mission */}
            <div 
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow-gold group-hover:scale-110 transition-transform">
                <FiTarget className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Missão</h3>
              <p className="text-primary-600 leading-relaxed">
                Fornecer perícias judiciais de excelência, com laudos técnicos imparciais, 
                precisos e fundamentados cientificamente, contribuindo para a justiça.
              </p>
            </div>
            
            {/* Vision */}
            <div 
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                <FiEye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Visão</h3>
              <p className="text-primary-600 leading-relaxed">
                Ser reconhecida como a principal referência em perícias judiciais no Brasil, 
                destacando-se pela qualidade técnica e confiabilidade.
              </p>
            </div>
            
            {/* Values */}
            <div 
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-highlight to-highlight-dark rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                <FiHeart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Valores</h3>
              <p className="text-primary-600 leading-relaxed">
                Ética, transparência, compromisso com a qualidade, respeito ao cliente e 
                dedicação incansável à busca da verdade.
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div 
            ref={valuesReveal.ref}
            className={`transition-all duration-700 ${
              valuesReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-block">Nossos Pilares</span>
              <h2 className="section-title mb-4">Nossos Valores</h2>
              <p className="section-subtitle mx-auto">
                Os pilares que fundamentam cada trabalho que realizamos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 text-center group hover:-translate-y-2"
                  style={{ 
                    transitionDelay: valuesReveal.isRevealed ? `${index * 100}ms` : '0ms',
                    opacity: valuesReveal.isRevealed ? 1 : 0,
                    transform: valuesReveal.isRevealed ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-primary-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-primary-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-200 to-transparent" />
        </div>
        
        <div className="container-custom relative">
          <div 
            ref={timelineReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              timelineReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label mb-4 inline-block">Trajetória</span>
            <h2 className="section-title mb-4">Nossa História</h2>
            <p className="section-subtitle mx-auto">
              Marcos importantes na trajetória da Vérité.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-300 transform md:-translate-x-1/2 rounded-full" />
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ 
                    transitionDelay: timelineReveal.isRevealed ? `${index * 150}ms` : '0ms',
                    opacity: timelineReveal.isRevealed ? 1 : 0,
                    transform: timelineReveal.isRevealed ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.6s ease-out'
                  }}
                >
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="glass-card p-6 group hover:shadow-glass-lg transition-all duration-500">
                      <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-bold rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg z-10" />
                  
                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient-dark opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" />
        
        <div 
          ref={ctaReveal.ref}
          className={`container-custom relative z-10 transition-all duration-700 ${
            ctaReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6">
              Conheça Nossa Equipe
            </h2>
            <p className="text-primary-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Profissionais altamente qualificados, comprometidos com a excelência 
              em cada trabalho pericial.
            </p>
            <Link href="/equipe" className="btn-secondary">
              <span>Conhecer a Equipe</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

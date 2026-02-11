'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiLinkedin, FiAward, FiArrowRight, FiBookOpen, FiUser } from 'react-icons/fi'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const teamMembers = [
  {
    name: 'Nome da Sócia 1',
    role: 'Sócia-Fundadora',
    specialization: 'Especialização Principal',
    image: '/images/eneida.png',
    bio: 'Breve biografia profissional destacando formação acadêmica, experiência e principais conquistas na área de perícias judiciais. Descreva aqui a trajetória profissional, cursos de especialização, tempo de atuação no mercado e diferenciais.',
    credentials: [
      'Graduação em [Área] pela [Universidade]',
      'Pós-graduação em [Especialização]',
      'Membro do [Conselho/Associação Profissional]',
      'Registro profissional: [Número]',
    ],
    expertise: [
      'Área de especialização 1',
      'Área de especialização 2',
      'Área de especialização 3',
    ],
    email: 'socia1@verite.com.br',
    phone: '(11) 98288-7949',
    linkedin: '#',
  },
  {
    name: 'Nome da Sócia 2',
    role: 'Sócia-Fundadora',
    specialization: 'Especialização Principal',
    image: '/images/ana.png',
    bio: 'Breve biografia profissional destacando formação acadêmica, experiência e principais conquistas na área de perícias judiciais. Descreva aqui a trajetória profissional, cursos de especialização, tempo de atuação no mercado e diferenciais.',
    credentials: [
      'Graduação em [Área] pela [Universidade]',
      'Pós-graduação em [Especialização]',
      'Membro do [Conselho/Associação Profissional]',
      'Registro profissional: [Número]',
    ],
    expertise: [
      'Área de especialização 1',
      'Área de especialização 2',
      'Área de especialização 3',
    ],
    email: 'socia2@verite.com.br',
    phone: '(11) 98288-7949',
    linkedin: '#',
  },
]

const certifications = [
  {
    title: 'Certificação Profissional',
    description: 'Descrição da certificação ou reconhecimento obtido pela empresa ou equipe.',
  },
  {
    title: 'Registro em Conselho',
    description: 'Detalhes sobre registros profissionais e habilitações da equipe.',
  },
  {
    title: 'Associações',
    description: 'Participação em associações e entidades de classe relevantes.',
  },
]

export default function EquipePage() {
  const teamReveal = useScrollReveal()
  const certsReveal = useScrollReveal()
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
              Nossos Profissionais
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 tracking-tight">
              Nossa <span className="text-gradient-gold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">Equipe</span>
            </h1>
            <p className="text-xl text-primary-200/90 leading-relaxed max-w-3xl mx-auto">
              Conheça as profissionais por trás da Vérité: experiência, 
              qualificação e compromisso com a excelência.
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

      {/* Team Members */}
      <section className="py-24 bg-white relative">
        <div 
          ref={teamReveal.ref}
          className="container-custom"
        >
          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 ${
                  teamReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Photo */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative max-w-md mx-auto lg:mx-0">
                    {/* Photo Card */}
                    <div className="glass rounded-3xl p-3 shadow-glass-lg group">
                      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Role Badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-5 py-2.5 rounded-full shadow-glass">
                        <div className="flex items-center gap-2">
                          <FiAward className="w-4 h-4 text-gold-500" />
                          <span className="text-sm font-medium text-primary-900">{member.role}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-200 rounded-2xl -z-10" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-gold-100 to-gold-200/50 rounded-2xl -z-10 blur-sm" />
                  </div>
                </div>
                
                {/* Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-lg text-gold-600 font-medium">{member.specialization}</p>
                  </div>
                  
                  <p className="text-primary-600 leading-relaxed text-lg">
                    {member.bio}
                  </p>
                  
                  {/* Credentials */}
                  <div className="glass-card p-6">
                    <h3 className="font-heading font-semibold text-lg text-primary-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                        <FiBookOpen className="w-4 h-4 text-white" />
                      </div>
                      Formação e Credenciais
                    </h3>
                    <ul className="space-y-3">
                      {member.credentials.map((credential, i) => (
                        <li key={i} className="flex items-start text-primary-600 text-sm group">
                          <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Expertise */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary-900 mb-4">
                      Áreas de Atuação
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((area, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 glass text-primary-700 rounded-xl text-sm font-medium hover:bg-white/80 transition-colors cursor-default"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 glass-card hover:shadow-glass-lg text-primary-700 rounded-xl transition-all duration-300 group"
                    >
                      <FiMail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{member.email}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 glass-card hover:shadow-glass-lg text-primary-700 rounded-xl transition-all duration-300 group"
                    >
                      <FiPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{member.phone}</span>
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-all duration-300 group border border-blue-100"
                    >
                      <FiLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-b from-primary-50 via-white to-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/50 to-transparent opacity-60" />
        
        <div className="container-custom relative">
          <div 
            ref={certsReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              certsReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label mb-4 inline-block">Qualificações</span>
            <h2 className="section-title mb-4">Certificações e Reconhecimentos</h2>
            <p className="section-subtitle mx-auto">
              Qualificações que atestam nossa competência técnica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500"
                style={{ 
                  transitionDelay: certsReveal.isRevealed ? `${index * 100}ms` : '0ms',
                  opacity: certsReveal.isRevealed ? 1 : 0,
                  transform: certsReveal.isRevealed ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FiAward className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-900 mb-3">
                  {cert.title}
                </h3>
                <p className="text-primary-500 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
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
              Pronta para nos conhecer melhor?
            </h2>
            <p className="text-primary-900/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato e descubra como podemos ajudar no seu caso. 
              Nossa equipe está preparada para atendê-lo.
            </p>
            <Link href="/contato" className="btn-primary bg-primary-950 hover:bg-primary-900 shadow-glow-primary">
              <span>Entrar em Contato</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

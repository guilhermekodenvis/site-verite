'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiClock, FiInstagram, FiLinkedin, FiFacebook, FiArrowRight } from 'react-icons/fi'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  { name: 'Perícia Documentoscópica/Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { name: 'Assinaturas Digitais e Eletrônicas', href: '/servicos/pericia-digital' },
  { name: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { name: 'Perícia Odontológica', href: '/servicos/pericia-odontologica' },
  { name: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
  { name: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { name: 'Perícia Ambiental', href: '/servicos/pericia-ambiental' },
  { name: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
  { name: 'Perícia Criminal/Cível', href: '/servicos/pericia-criminal' },
  { name: 'Diagnóstico Empresarial', href: '/servicos/diagnostico-empresarial' },
]

const quickLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Nossa Fundadora', href: '/fundadora' },
  { name: 'Contato', href: '/contato' },
]

const socialLinks = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const footerReveal = useScrollReveal({ threshold: 0.1 })

  return (
    <footer className="relative bg-primary-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient-dark opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      {/* Main Footer */}
      <div 
        ref={footerReveal.ref}
        className={`container-custom py-20 relative z-10 transition-all duration-1000 ${
          footerReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image 
                  src="/logo.png" 
                  alt="Vérité Perícias" 
                  width={60} 
                  height={60}
                  className="relative w-14 h-14 object-contain rounded-xl transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-xl text-white">Vérité</span>
                <span className="text-xs text-primary-400 -mt-0.5">Perícias Judiciais</span>
              </div>
            </Link>
            <p className="text-primary-400 text-sm leading-relaxed">
              Excelência em perícias judiciais, oferecendo laudos técnicos com credibilidade, 
              precisão e fundamentação científica para todas as áreas do direito.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 glass-card-dark flex items-center justify-center rounded-xl 
                           hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary-400 group-hover:text-primary-950 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500 rounded-full" />
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-primary-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-500" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500 rounded-full" />
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-primary-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <div className="mt-8">
              <Link 
                href="/contato" 
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-gold rounded-xl text-gold-300 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Solicitar Orçamento</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500 rounded-full" />
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 glass-card-dark rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold-500/50 transition-colors">
                    <FiMapPin className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-primary-400 text-sm leading-relaxed group-hover:text-primary-300 transition-colors">
                    Vinhedo - SP
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+5511982887949" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 glass-card-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/50 transition-colors">
                    <FiPhone className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-primary-400 text-sm group-hover:text-white transition-colors">
                    (11) 98288-7949
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:prieto.eneida@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 glass-card-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/50 transition-colors">
                    <FiMail className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-primary-400 text-sm group-hover:text-white transition-colors">
                    prieto.eneida@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 glass-card-dark rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiClock className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-primary-400 text-sm leading-relaxed">
                    Seg - Sex: 8h às 18h<br />
                    Sáb: 9h às 13h
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800/50 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vérité Perícias Judiciais. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/politica-privacidade" className="text-primary-500 hover:text-gold-400 transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-primary-700">|</span>
              <Link href="/termos-uso" className="text-primary-500 hover:text-gold-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

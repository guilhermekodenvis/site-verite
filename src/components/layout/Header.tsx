'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { useHeaderScroll } from '@/hooks/useScrollReveal'

const services = [
  { name: 'Perícia Documentoscópica/ Grafotécnica', href: '/servicos/pericia-grafotecnica', icon: '✍️' },
  { name: 'Assinaturas Digitais e Eletrônicas', href: '/servicos/pericia-digital', icon: '📝' },
  { name: 'Perícia Médica', href: '/servicos/pericia-medica', icon: '🩺' },
  { name: 'Perícia Odontológica', href: '/servicos/pericia-odontologica', icon: '🦷' },
  { name: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia', icon: '🏗️' },
  { name: 'Perícia Contábil', href: '/servicos/pericia-contabil', icon: '📊' },
  { name: 'Perícia Ambiental', href: '/servicos/pericia-ambiental', icon: '🌿' },
  { name: 'Perícia em Informática', href: '/servicos/pericia-informatica', icon: '💻' },
  { name: 'Perícia Criminal/Cível', href: '/servicos/pericia-criminal', icon: '🔍' },
  { name: 'Diagnóstico Empresarial', href: '/servicos/diagnostico-empresarial', icon: '📈' },
]

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Serviços', href: '/servicos', hasDropdown: true },
  { name: 'Fundadora', href: '/fundadora' },
  { name: 'Contato', href: '/contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const isScrolled = useHeaderScroll(20)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Find active index
  const activeIndex = navigation.findIndex(item => isActive(item.href))

  // Update indicator position
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex
    const targetElement = itemRefs.current[targetIndex]
    const navElement = navRef.current

    if (targetElement && navElement && targetIndex >= 0) {
      const navRect = navElement.getBoundingClientRect()
      const itemRect = targetElement.getBoundingClientRect()
      
      setIndicatorStyle({
        left: itemRect.left - navRect.left + itemRect.width / 2 - 3,
        width: 6,
        opacity: 1
      })
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    }
  }, [hoveredIndex, activeIndex, pathname])

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-smooth ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-soft border-b border-white/50' 
            : 'bg-transparent'
        }`}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 transition-all duration-300"
             style={{ width: `${typeof window !== 'undefined' ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0}%` }} />
        
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className={`absolute inset-0 bg-gold-500/20 rounded-xl blur-xl transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'}`} />
                <Image 
                  src="/logo.png" 
                  alt="Vérité Perícias" 
                  width={60} 
                  height={60}
                  className="relative w-14 h-14 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-semibold text-xl transition-colors duration-300 ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
                  Instituto Vérité
                </span>
                <span className={`text-xs transition-colors duration-300 -mt-1 ${isScrolled ? 'text-primary-500' : 'text-primary-300'}`}>
                  Perícias Judiciais
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div 
              ref={navRef}
              className="hidden lg:flex items-center space-x-1 relative"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated Indicator */}
              <span 
                className="absolute bottom-1 h-1.5 w-1.5 bg-gold-500 rounded-full transition-all duration-300 ease-in-out pointer-events-none"
                style={{
                  left: indicatorStyle.left,
                  opacity: indicatorStyle.opacity,
                  transform: 'translateX(-50%)'
                }}
              />
              
              {navigation.map((item, index) => (
                <div 
                  key={item.name} 
                  className="relative"
                  ref={el => { itemRefs.current[index] = el }}
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => { setServicesOpen(true); setHoveredIndex(index) }}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button 
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          isActive(item.href)
                            ? 'text-gold-500' 
                            : isScrolled 
                              ? 'text-primary-600 hover:text-primary-900' 
                              : 'text-primary-200 hover:text-white'
                        }`}
                      >
                        <span>{item.name}</span>
                        <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown */}
                      <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                          servicesOpen 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="w-72 glass rounded-2xl shadow-glass-lg border border-white/60 overflow-hidden">
                          <div className="p-2">
                            {services.map((service, idx) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary-700 hover:bg-primary-900 hover:text-white transition-all duration-300 group/item"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                <span className="text-lg group-hover/item:scale-110 transition-transform duration-300">{service.icon}</span>
                                <span className="font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-primary-100 p-2 bg-primary-50/50">
                            <Link
                              href="/servicos"
                              className="flex items-center justify-between px-4 py-3 rounded-xl text-gold-600 hover:bg-gold-50 font-medium transition-all duration-300 group/all"
                            >
                              <span>Ver todos os serviços</span>
                              <FiArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        isActive(item.href)
                          ? 'text-gold-500' 
                          : isScrolled 
                            ? 'text-primary-600 hover:text-primary-900' 
                            : 'text-primary-200 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pl-4">
                <Link href="/contato" className="btn-secondary text-sm">
                  <span>Solicitar Orçamento</span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled ? 'hover:bg-primary-50' : 'hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <div className="relative w-6 h-6">
                <FiX className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isScrolled ? 'text-primary-900' : 'text-white'
                } ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
                <FiMenu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isScrolled ? 'text-primary-900' : 'text-white'
                } ${mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Slide-in Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-smooth ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
            <nav className="flex-1 space-y-2">
              {navigation.map((item, index) => (
                <div 
                  key={item.name}
                  className={`transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center justify-between w-full px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                          isActive(item.href) ? 'bg-gold-50 text-gold-700' : 'text-primary-700 hover:bg-primary-50'
                        }`}
                      >
                        <span className="text-lg">{item.name}</span>
                        <FiChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary-100 pl-4">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-3 px-4 py-3 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-all duration-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>{service.icon}</span>
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
                        isActive(item.href) ? 'bg-gold-50 text-gold-700' : 'text-primary-700 hover:bg-primary-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            <div 
              className={`pt-6 border-t border-primary-100 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <Link 
                href="/contato" 
                className="btn-secondary w-full justify-center text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

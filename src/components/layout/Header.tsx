'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const services = [
  { name: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { name: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { name: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
  { name: 'Perícia Criminal', href: '/servicos/pericia-criminal' },
  { name: 'Perícia Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { name: 'Perícia Ambiental', href: '/servicos/pericia-ambiental' },
  { name: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
]

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Serviços', href: '/servicos', hasDropdown: true },
  { name: 'Equipe', href: '/equipe' },
  { name: 'Contato', href: '/contato' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo.jpg" 
              alt="Vérité Perícias" 
              width={60} 
              height={60}
              className="w-14 h-14 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary-900">Vérité</span>
              <span className="text-xs text-primary-600 -mt-1">Perícias Judiciais</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-primary-700 hover:text-primary-900 font-medium transition-colors">
                      <span>{item.name}</span>
                      <FiChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-primary-100 py-2 animate-fadeIn">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2.5 text-primary-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <div className="border-t border-primary-100 mt-2 pt-2">
                          <Link
                            href="/servicos"
                            className="block px-4 py-2.5 text-gold-600 hover:bg-gold-50 font-medium transition-colors"
                          >
                            Ver todos os serviços →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-primary-700 hover:text-primary-900 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link href="/contato" className="btn-primary">
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6 text-primary-900" />
            ) : (
              <FiMenu className="w-6 h-6 text-primary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-100 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-primary-700 hover:bg-primary-50 rounded-lg"
                      >
                        <span>{item.name}</span>
                        <FiChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {servicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-2 text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-primary-700 hover:bg-primary-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 px-4">
                <Link href="/contato" className="btn-primary w-full text-center">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

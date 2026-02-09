'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiX, FiArrowUp } from 'react-icons/fi'

export default function WhatsAppButton() {
  const phoneNumber = '5511999999999'
  const message = 'Olá! Gostaria de mais informações sobre os serviços de perícia judicial.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasPulsed, setHasPulsed] = useState(false)

  useEffect(() => {
    // Entrada animada após carregar
    const timer = setTimeout(() => setIsVisible(true), 1000)
    
    // Parar pulse após 5 segundos
    const pulseTimer = setTimeout(() => setHasPulsed(true), 5000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(pulseTimer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 glass rounded-full flex items-center justify-center shadow-glass 
                   hover:shadow-glass-lg hover:scale-110 transition-all duration-500 group
                   ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <FiArrowUp className="w-5 h-5 text-primary-700 group-hover:text-primary-900 transition-colors" />
      </button>

      {/* Contact FAB */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3 transition-all duration-700 ease-smooth
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Expanded Options */}
        <div className={`flex flex-col gap-3 transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {/* Email */}
          <a
            href="mailto:contato@verite.com.br"
            className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-glass hover:shadow-glass-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Enviar email"
          >
            <FiMail className="w-5 h-5 text-primary-700" />
            <span className="absolute right-full mr-3 px-3 py-2 glass text-primary-900 text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-glass">
              Email
            </span>
          </a>
          
          {/* Phone */}
          <a
            href="tel:+5511999999999"
            className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-glass hover:shadow-glass-lg hover:scale-110 transition-all duration-300 group"
            aria-label="Ligar"
          >
            <FiPhone className="w-5 h-5 text-primary-700" />
            <span className="absolute right-full mr-3 px-3 py-2 glass text-primary-900 text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-glass">
              Ligar
            </span>
          </a>
        </div>

        {/* Main WhatsApp Button */}
        <div className="relative">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Fale conosco pelo WhatsApp"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <FaWhatsapp className="w-7 h-7 text-white" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-4 py-2.5 bg-white/90 backdrop-blur-xl text-primary-900 text-sm font-medium rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-glass border border-white/60">
              💬 Fale conosco!
            </span>
            
            {/* Pulse animation - only shows initially */}
            {!hasPulsed && (
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
            )}
            
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-green-400/20 blur-xl -z-10 group-hover:bg-green-400/40 transition-colors" />
          </a>
          
          {/* Expand toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center 
                       transition-all duration-300 hover:scale-110 ${isExpanded ? 'rotate-45' : ''}`}
            aria-label={isExpanded ? 'Fechar opções' : 'Mais opções de contato'}
          >
            <FiX className={`w-3 h-3 text-primary-600 transition-transform duration-300 ${isExpanded ? '' : 'rotate-45'}`} />
          </button>
        </div>
      </div>
    </>
  )
}

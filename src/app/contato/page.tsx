'use client'

import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageSquare, FiImage, FiArrowUpRight } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'

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
        <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-primary-400" />
        </div>
        <p className="text-primary-500 text-sm font-medium">Espaço para imagem</p>
        <p className="text-primary-400 text-xs mt-1 max-w-[200px]">{suggestion}</p>
      </div>
      <div className="absolute inset-0 border-2 border-dashed border-primary-200/50 rounded-2xl pointer-events-none" />
    </div>
  )
}

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Telefone',
    content: '(11) 99999-9999',
    description: 'Ligue para nós',
    href: 'tel:+5511999999999',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    content: '(11) 99999-9999',
    description: 'Atendimento rápido',
    href: 'https://wa.me/5511999999999',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: FiMail,
    title: 'E-mail',
    content: 'contato@veritepericias.com.br',
    description: 'Envie sua mensagem',
    href: 'mailto:contato@veritepericias.com.br',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: FiMapPin,
    title: 'Endereço',
    content: 'Rua Exemplo, 123 - Centro',
    description: 'São Paulo - SP',
    href: '#mapa',
    color: 'from-primary-400 to-primary-600',
  },
]

const businessHours = [
  { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
  { day: 'Sábado', hours: '09:00 - 13:00' },
  { day: 'Domingo', hours: 'Fechado' },
]

export default function ContatoPage() {
  const formReveal = useScrollReveal()
  const mapReveal = useScrollReveal()
  const ctaReveal = useScrollReveal()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    assunto: '',
    mensagem: '',
    privacidade: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <>
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Hero Section */}
      <section className="pt-32 pb-32 relative overflow-hidden">
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
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 tracking-tight">
              Entre em <span className="text-gradient-gold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">Contato</span>
            </h1>
            <p className="text-xl text-primary-200/90 leading-relaxed max-w-2xl mx-auto">
              Estamos prontos para atendê-lo. Solicite um orçamento, 
              tire dúvidas ou agende uma consulta.
            </p>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f8f6f3"/>
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 bg-gradient-to-b from-[#f8f6f3] to-white relative">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a 
                  key={index}
                  href={info.href}
                  className="glass-card p-6 hover:shadow-glass-lg hover:-translate-y-2 transition-all duration-500 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary-900 mb-1 flex items-center gap-2">
                    {info.title}
                    <FiArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-primary-900 font-medium text-sm">{info.content}</p>
                  <p className="text-sm text-primary-500">{info.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white relative">
        <div 
          ref={formReveal.ref}
          className={`container-custom transition-all duration-700 ${
            formReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 md:p-10">
                <h2 className="section-title mb-2">Envie sua Mensagem</h2>
                <p className="text-primary-600 mb-8">
                  Preencha o formulário abaixo que retornaremos em até 24 horas úteis.
                </p>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="nome" className="block text-sm font-medium text-primary-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/50 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all duration-300 placeholder:text-primary-300"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/50 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all duration-300 placeholder:text-primary-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="telefone" className="block text-sm font-medium text-primary-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/50 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all duration-300 placeholder:text-primary-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="servico" className="block text-sm font-medium text-primary-700 mb-2">
                        Tipo de Perícia
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        value={formData.servico}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 bg-white/50 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all duration-300 text-primary-700"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="medica">Perícia Médica</option>
                        <option value="contabil">Perícia Contábil</option>
                        <option value="engenharia">Perícia de Engenharia</option>
                        <option value="criminal">Perícia Criminal</option>
                        <option value="grafotecnica">Perícia Grafotécnica</option>
                        <option value="ambiental">Perícia Ambiental</option>
                        <option value="informatica">Perícia em Informática</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="assunto" className="block text-sm font-medium text-primary-700 mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/50 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all duration-300 placeholder:text-primary-300"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="mensagem" className="block text-sm font-medium text-primary-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/50 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all duration-300 resize-none placeholder:text-primary-300"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacidade"
                      name="privacidade"
                      checked={formData.privacidade}
                      onChange={handleInputChange}
                      required
                      className="mt-1.5 w-4 h-4 text-gold-500 border-primary-300 rounded focus:ring-gold-500"
                    />
                    <label htmlFor="privacidade" className="text-sm text-primary-600 leading-relaxed">
                      Concordo com a <Link href="/politica-de-privacidade" className="text-gold-600 hover:text-gold-700 font-medium hover:underline">Política de Privacidade</Link> e 
                      autorizo o contato da Vérité Perícias sobre este formulário.
                    </label>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <FiSend className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Business Hours */}
              <div className="glass-card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-glow-gold">
                    <FiClock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary-900">
                    Horário de Atendimento
                  </h3>
                </div>
                <ul className="space-y-3">
                  {businessHours.map((item, index) => (
                    <li key={index} className="flex justify-between items-center py-3 border-b border-primary-100 last:border-0">
                      <span className="text-primary-600">{item.day}</span>
                      <span className={`font-medium ${item.hours === 'Fechado' ? 'text-red-500' : 'text-primary-900'}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Quick Contact */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
                <div className="absolute inset-0 mesh-gradient-dark opacity-30" />
                <div className="relative p-8 text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-glow-gold">
                      <FiMessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">
                      Atendimento Rápido
                    </h3>
                  </div>
                  <p className="text-primary-200 mb-6 leading-relaxed">
                    Precisa de uma resposta imediata? Entre em contato pelo WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20perícia."
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="glass-card p-8">
                <h3 className="font-heading font-semibold text-lg text-primary-900 mb-3">
                  Redes Sociais
                </h3>
                <p className="text-primary-600 text-sm mb-6">
                  Acompanhe nosso conteúdo e novidades nas redes.
                </p>
                <div className="flex space-x-3">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white transition-all duration-300 group"
                  >
                    <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary-600 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 group"
                  >
                    <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="py-24 bg-gradient-to-b from-primary-50 via-white to-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/50 to-transparent opacity-60" />
        
        <div className="container-custom relative">
          <div 
            ref={mapReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              mapReveal.isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label mb-4 inline-block">Localização</span>
            <h2 className="section-title mb-4">Nossa Localização</h2>
            <p className="section-subtitle mx-auto">
              Estamos localizados em uma região de fácil acesso em São Paulo. 
              Venha nos visitar ou agende um atendimento online.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <ImagePlaceholder 
                suggestion="Mapa do Google Maps mostrando a localização do escritório"
                aspectRatio="aspect-[16/10]"
                icon={FiMapPin}
                className="shadow-soft"
              />
            </div>
            
            {/* Address Details */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 h-full">
                <h3 className="font-heading font-semibold text-xl text-primary-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-white" />
                  </div>
                  Endereço Completo
                </h3>
                <div className="space-y-4 text-primary-600">
                  <div className="glass p-4 rounded-xl">
                    <p>
                      <span className="block font-medium text-primary-900 mb-1">Escritório Principal</span>
                      Rua Exemplo, 123 - Sala 1001<br />
                      Centro - São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-primary-900">Como chegar:</strong><br />
                    Próximo à estação de metrô. Estacionamento rotativo disponível no prédio.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary-100">
                  <h4 className="font-medium text-primary-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Atendimento em Todo o Estado
                  </h4>
                  <p className="text-sm text-primary-600 leading-relaxed">
                    Realizamos perícias em todas as cidades do estado de São Paulo. 
                    Para outras localidades, consulte disponibilidade.
                  </p>
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
              Não Encontrou o que Procurava?
            </h2>
            <p className="text-primary-900/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco por telefone ou WhatsApp. 
              Nossa equipe está pronta para esclarecer todas as suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+5511999999999" className="btn-primary bg-primary-950 hover:bg-primary-900 shadow-glow-primary">
                <FiPhone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </a>
              <Link href="/servicos" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-primary-950 font-semibold rounded-xl transition-all duration-300 border border-primary-900/20">
                <span>Ver Nossos Serviços</span>
                <FiArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contato | Vérité Perícias',
  description: 'Entre em contato com a Vérité Perícias. Solicite orçamento para perícias judiciais, tire dúvidas ou agende uma consulta com nossos especialistas.',
}

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Telefone',
    content: '(11) 99999-9999',
    description: 'Ligue para nós',
    href: 'tel:+5511999999999',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    content: '(11) 99999-9999',
    description: 'Atendimento rápido',
    href: 'https://wa.me/5511999999999',
  },
  {
    icon: FiMail,
    title: 'E-mail',
    content: 'contato@veritepericias.com.br',
    description: 'Envie sua mensagem',
    href: 'mailto:contato@veritepericias.com.br',
  },
  {
    icon: FiMapPin,
    title: 'Endereço',
    content: 'Rua Exemplo, 123 - Centro',
    description: 'São Paulo - SP',
    href: '#mapa',
  },
]

const businessHours = [
  { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
  { day: 'Sábado', hours: '09:00 - 13:00' },
  { day: 'Domingo', hours: 'Fechado' },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Entre em <span className="text-gold-400">Contato</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-200 leading-relaxed max-w-2xl mx-auto">
              Estamos prontos para atendê-lo. Entre em contato conosco para 
              solicitar um orçamento, tirar dúvidas ou agendar uma consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-primary-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a 
                  key={index}
                  href={info.href}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors">
                    <Icon className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-primary-900 font-medium">{info.content}</p>
                  <p className="text-sm text-primary-500">{info.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-2">Envie sua Mensagem</h2>
              <p className="text-primary-600 mb-8">
                Preencha o formulário abaixo que retornaremos em até 24 horas úteis.
              </p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-primary-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-primary-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-primary-700 mb-2">
                      Tipo de Perícia
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
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
                
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-primary-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-primary-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacidade"
                    name="privacidade"
                    required
                    className="mt-1 w-4 h-4 text-gold-500 border-primary-200 rounded focus:ring-gold-500"
                  />
                  <label htmlFor="privacidade" className="text-sm text-primary-600">
                    Concordo com a <Link href="/politica-de-privacidade" className="text-gold-600 hover:underline">Política de Privacidade</Link> e 
                    autorizo o contato da Vérité Perícias sobre este formulário.
                  </label>
                </div>
                
                <button type="submit" className="btn-primary">
                  <FiSend className="mr-2 w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Business Hours */}
              <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                    <FiClock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary-900">
                    Horário de Atendimento
                  </h3>
                </div>
                <ul className="space-y-3">
                  {businessHours.map((item, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-primary-100 last:border-0">
                      <span className="text-primary-700">{item.day}</span>
                      <span className="font-medium text-primary-900">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-primary-900 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                    <FiMessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl">
                    Atendimento Rápido
                  </h3>
                </div>
                <p className="text-primary-200 mb-6">
                  Precisa de uma resposta imediata? Entre em contato pelo WhatsApp.
                </p>
                <a 
                  href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20perícia."
                  className="btn-primary bg-green-600 hover:bg-green-700 w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </div>
              
              {/* Social Media */}
              <div className="bg-white border border-primary-100 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-4">
                  Redes Sociais
                </h3>
                <p className="text-primary-600 text-sm mb-6">
                  Acompanhe nosso conteúdo e novidades nas redes sociais.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 hover:bg-gold-500 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 hover:bg-gold-500 hover:text-white transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Nossa Localização</h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Estamos localizados em uma região de fácil acesso em São Paulo. 
              Venha nos visitar ou agende um atendimento online.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="w-full h-96 rounded-2xl image-placeholder">
                <div className="text-center p-8">
                  <FiMapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Mapa do Google</p>
                  <p className="text-sm">Espaço reservado para incorporação do Google Maps</p>
                </div>
              </div>
            </div>
            
            {/* Address Details */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 h-full">
                <h3 className="font-heading font-bold text-xl text-primary-900 mb-6">
                  Endereço Completo
                </h3>
                <div className="space-y-4 text-primary-600">
                  <p className="flex items-start space-x-3">
                    <FiMapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Rua Exemplo, 123 - Sala 1001<br />
                      Centro - São Paulo - SP<br />
                      CEP: 01234-567
                    </span>
                  </p>
                  <p className="text-sm">
                    <strong className="text-primary-900">Como chegar:</strong><br />
                    Próximo à estação de metrô. Estacionamento rotativo disponível no prédio.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary-100">
                  <h4 className="font-medium text-primary-900 mb-3">Atendimento em Todo o Estado</h4>
                  <p className="text-sm text-primary-600">
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
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              Não Encontrou o que Procurava?
            </h2>
            <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco por telefone ou WhatsApp. 
              Nossa equipe está pronta para esclarecer todas as suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+5511999999999" className="btn-primary bg-primary-900 hover:bg-primary-800">
                <FiPhone className="mr-2 w-5 h-5" />
                Ligar Agora
              </a>
              <Link href="/servicos" className="btn-outline border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                Ver Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

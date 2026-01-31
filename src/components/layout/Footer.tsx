import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiClock, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi'

const services = [
  { name: 'Perícia Médica', href: '/servicos/pericia-medica' },
  { name: 'Perícia Contábil', href: '/servicos/pericia-contabil' },
  { name: 'Perícia de Engenharia', href: '/servicos/pericia-engenharia' },
  { name: 'Perícia Criminal', href: '/servicos/pericia-criminal' },
  { name: 'Perícia Grafotécnica', href: '/servicos/pericia-grafotecnica' },
  { name: 'Perícia Ambiental', href: '/servicos/pericia-ambiental' },
  { name: 'Perícia em Informática', href: '/servicos/pericia-informatica' },
]

const quickLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Nossa Equipe', href: '/equipe' },
  { name: 'Contato', href: '/contato' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.jpg" 
                alt="Vérité Perícias" 
                width={60} 
                height={60}
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white">Vérité</span>
                <span className="text-xs text-primary-300 -mt-1">Perícias Judiciais</span>
              </div>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed">
              Excelência em perícias judiciais, oferecendo laudos técnicos com credibilidade, 
              precisão e fundamentação científica para todas as áreas do direito.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold-400">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-primary-300 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold-400">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-gold-400">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-primary-300 text-sm">
                  Rua Exemplo, 123 - Centro<br />
                  Cidade - Estado, CEP 00000-000
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-primary-300 hover:text-white transition-colors text-sm">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:contato@verite.com.br" className="text-primary-300 hover:text-white transition-colors text-sm">
                  contato@verite.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiClock className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-primary-300 text-sm">
                  Seg - Sex: 8h às 18h<br />
                  Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vérité Perícias Judiciais. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-privacidade" className="text-primary-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-primary-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

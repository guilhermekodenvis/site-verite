import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheck, FiPhone, FiFileText } from 'react-icons/fi'
import { IconType } from 'react-icons'

interface ServicePageTemplateProps {
  icon: IconType
  title: string
  subtitle: string
  description: string
  longDescription: string[]
  areas: string[]
  process: string[]
  benefits: string[]
  color: string
  relatedServices: {
    title: string
    href: string
  }[]
}

export default function ServicePageTemplate({
  icon: Icon,
  title,
  subtitle,
  description,
  longDescription,
  areas,
  process,
  benefits,
  color,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              {title}
            </h1>
            <p className="text-xl text-gold-400 font-medium mb-4">{subtitle}</p>
            <p className="text-lg text-primary-200 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-6">Sobre Este Serviço</h2>
              
              <div className="prose prose-lg max-w-none text-primary-600 mb-12">
                {longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
              
              {/* Areas of Expertise */}
              <div className="mb-12">
                <h3 className="font-heading font-bold text-2xl text-primary-900 mb-6">
                  Áreas de Atuação
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-primary-50 rounded-xl">
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-primary-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Process */}
              <div className="mb-12">
                <h3 className="font-heading font-bold text-2xl text-primary-900 mb-6">
                  Nosso Processo de Trabalho
                </h3>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-primary-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="mb-12">
                <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Image 
                      src="/logo.jpg" 
                      alt="Vérité Perícias" 
                      width={80} 
                      height={80}
                      className="mx-auto mb-4 rounded-lg opacity-70"
                    />
                    <p className="text-sm text-primary-400">Espaço para imagem relacionada ao serviço</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Benefits Card */}
              <div className="bg-primary-50 rounded-2xl p-8 mb-8 sticky top-24">
                <h3 className="font-heading font-bold text-xl text-primary-900 mb-6">
                  Por que nos escolher?
                </h3>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheck className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-4">
                  <Link href="/contato" className="btn-primary w-full text-center">
                    Solicitar Orçamento
                  </Link>
                  <a href="tel:+5511999999999" className="btn-outline w-full text-center">
                    <FiPhone className="mr-2 w-4 h-4" />
                    Ligar Agora
                  </a>
                </div>
              </div>
              
              {/* Related Services */}
              <div className="bg-white border border-primary-100 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-4">
                  Outros Serviços
                </h3>
                <ul className="space-y-3">
                  {relatedServices.map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.href}
                        className="flex items-center justify-between text-primary-600 hover:text-primary-900 transition-colors group"
                      >
                        <span>{service.title}</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
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
              Precisa de {title}?
            </h2>
            <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma análise inicial do seu caso. 
              Nossa equipe de peritos especializados está pronta para ajudá-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-primary bg-primary-900 hover:bg-primary-800">
                Solicitar Orçamento
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/servicos" className="btn-outline border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                Ver Todos os Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { FiCheck, FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiFileText, FiShield, FiArrowRight } from 'react-icons/fi'

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
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Sobre a <span className="text-gold-400">Vérité</span>
            </h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              Conheça nossa história, missão e os valores que guiam nosso trabalho 
              em busca da verdade técnica e científica.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">
                Nossa <span className="text-gold-500">História</span>
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
                  Nosso compromisso com a excelência permanece inabalável, sempre em busca de contribuir 
                  para a justiça através de análises técnicas precisas e confiáveis.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-[450px] rounded-2xl bg-primary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <Image 
                    src="/logo.jpg" 
                    alt="Vérité Perícias" 
                    width={150} 
                    height={150}
                    className="mx-auto mb-6 rounded-lg"
                  />
                  <div className="image-placeholder w-full h-48 rounded-xl">
                    <div className="text-center p-4">
                      <FiUsers className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Espaço para imagem institucional</p>
                      <p className="text-xs mt-1">Sugestão: Foto do escritório ou equipe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-6">
                <FiTarget className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Missão</h3>
              <p className="text-primary-600 leading-relaxed">
                Fornecer perícias judiciais de excelência, com laudos técnicos imparciais, 
                precisos e fundamentados cientificamente, contribuindo para a justiça e a 
                busca da verdade.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <FiEye className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Visão</h3>
              <p className="text-primary-600 leading-relaxed">
                Ser reconhecida como a principal referência em perícias judiciais no Brasil, 
                destacando-se pela qualidade técnica, confiabilidade e compromisso com a 
                verdade.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <FiHeart className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Valores</h3>
              <p className="text-primary-600 leading-relaxed">
                Ética, transparência, compromisso com a qualidade, respeito ao cliente e 
                dedicação incansável à busca da verdade técnica e científica.
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Nossos Valores</h2>
            <p className="section-subtitle mx-auto">
              Os pilares que fundamentam cada trabalho que realizamos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-primary-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-primary-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Nossa Trajetória</h2>
            <p className="section-subtitle mx-auto">
              Marcos importantes na história da Vérité.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-100">
                      <span className="text-gold-500 font-heading font-bold text-lg">{item.year}</span>
                      <h3 className="font-heading font-semibold text-xl text-primary-900 mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold-500 rounded-full transform -translate-x-1/2 border-4 border-white shadow"></div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Conheça Nossa Equipe
            </h2>
            <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
              Profissionais altamente qualificados, comprometidos com a excelência 
              em cada trabalho pericial.
            </p>
            <Link href="/equipe" className="btn-secondary">
              Conhecer a Equipe
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

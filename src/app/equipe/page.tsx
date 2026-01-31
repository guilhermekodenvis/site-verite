import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiLinkedin, FiAward, FiArrowRight, FiBookOpen } from 'react-icons/fi'

const teamMembers = [
  {
    name: 'Nome da Sócia 1',
    role: 'Sócia-Fundadora',
    specialization: 'Especialização Principal',
    image: null, // Placeholder para imagem
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
    phone: '(11) 99999-9999',
    linkedin: '#',
  },
  {
    name: 'Nome da Sócia 2',
    role: 'Sócia-Fundadora',
    specialization: 'Especialização Principal',
    image: null, // Placeholder para imagem
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
    phone: '(11) 99999-9999',
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
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Nossa <span className="text-gold-400">Equipe</span>
            </h1>
            <p className="text-xl text-primary-200 leading-relaxed">
              Conheça as profissionais por trás da Vérité: experiência, 
              qualificação e compromisso com a excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Photo */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="w-full aspect-[4/5] max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Image 
                          src="/logo.jpg" 
                          alt="Vérité Perícias" 
                          width={100} 
                          height={100}
                          className="mx-auto mb-4 rounded-lg opacity-70"
                        />
                        <div className="image-placeholder w-40 h-48 rounded-xl mx-auto">
                          <div className="text-center p-4">
                            <div className="w-16 h-16 bg-primary-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-2xl text-primary-600">👤</span>
                            </div>
                            <p className="text-xs">Foto profissional</p>
                            <p className="text-xs mt-1">{member.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-100 rounded-2xl -z-10"></div>
                  </div>
                </div>
                
                {/* Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">
                    <FiAward className="w-4 h-4 mr-2" />
                    {member.role}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-lg text-gold-600 font-medium mb-6">{member.specialization}</p>
                  
                  <p className="text-primary-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Credentials */}
                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-lg text-primary-900 mb-3 flex items-center">
                      <FiBookOpen className="w-5 h-5 mr-2 text-gold-500" />
                      Formação e Credenciais
                    </h3>
                    <ul className="space-y-2">
                      {member.credentials.map((credential, i) => (
                        <li key={i} className="flex items-start text-primary-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Expertise */}
                  <div className="mb-8">
                    <h3 className="font-heading font-semibold text-lg text-primary-900 mb-3">
                      Áreas de Atuação
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((area, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center px-4 py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg transition-colors"
                    >
                      <FiMail className="w-4 h-4 mr-2" />
                      {member.email}
                    </a>
                    <a 
                      href={`tel:${member.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center px-4 py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg transition-colors"
                    >
                      <FiPhone className="w-4 h-4 mr-2" />
                      {member.phone}
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
                    >
                      <FiLinkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Certificações e Reconhecimentos</h2>
            <p className="section-subtitle mx-auto">
              Qualificações que atestam nossa competência técnica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiAward className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-900 mb-3">
                  {cert.title}
                </h3>
                <p className="text-primary-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              Pronta para nos conhecer melhor?
            </h2>
            <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos ajudar no seu caso. 
              Nossa equipe está preparada para atendê-lo.
            </p>
            <Link href="/contato" className="btn-primary bg-primary-900 hover:bg-primary-800">
              Entrar em Contato
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

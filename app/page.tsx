import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import WorkCard from "@/components/work-card"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="text-xl font-semibold">
          digital<span className="text-neutral-400">presence</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm hover:text-neutral-500 transition-colors">
            Servicios
          </Link>
          <Link href="#work" className="text-sm hover:text-neutral-500 transition-colors">
            Proyectos
          </Link>
          <Link href="#about" className="text-sm hover:text-neutral-500 transition-colors">
            Sobre nosotros
          </Link>
          <Link href="#contact" className="text-sm hover:text-neutral-500 transition-colors">
            Contacto
          </Link>
        </nav>
        <Link href="#contact" passHref legacyBehavior>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Hablemos <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden">
          <ChevronDown className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-8 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Sitios web gratis. <br />
              Potencial ilimitado.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
              Ayudamos a marcas y negocios a expresar su máximo potencial con diseño web gratuito y mantenimiento asequible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="#services" passHref legacyBehavior>
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Nuestros servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16">
            <span className="text-sm text-neutral-500">Nuestro enfoque</span>
            <h2 className="text-3xl md:text-4xl font-bold">Precios simples y transparentes</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mt-2">
              Creemos que un gran diseño no debe ser una barrera. Obtén un sitio web profesional gratis y solo paga por el mantenimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Diseño web gratuito"
              description="Sitios web profesionales y responsivos diseñados y desarrollados sin costo inicial. Eliminamos la barrera de entrada para negocios de todos los tamaños."
              icon="Layout"
            />
            <ServiceCard
              title="Cuota de mantenimiento simple"
              description="Una tarifa mensual transparente cubre hosting, actualizaciones de seguridad y cambios básicos de contenido para que tu sitio funcione sin problemas."
              icon="Shield"
            />
            <ServiceCard
              title="Expresión de marca"
              description="Ayudamos a traducir la voz y visión única de tu marca en una experiencia digital coherente que resuene con tu audiencia."
              icon="Palette"
            />
            <ServiceCard
              title="Optimización de rendimiento"
              description="Sitios web rápidos, optimizados para SEO y que funcionan bien en todos los dispositivos, ayudando a mejorar tu visibilidad online."
              icon="Zap"
            />
            <ServiceCard
              title="Estrategia de contenido"
              description="Asesoría para crear contenido atractivo que conecte con tu audiencia y comunique eficazmente tu mensaje."
              icon="FileText"
            />
            <ServiceCard
              title="Soporte para el crecimiento"
              description="A medida que tu negocio crece, ofrecemos servicios adicionales para ayudarte a escalar tu presencia digital de manera efectiva."
              icon="TrendingUp"
            />
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-6 md:px-10 lg:px-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-16">
              <span className="text-sm text-neutral-500">Nuestro trabajo</span>
              <h2 className="text-3xl md:text-4xl font-bold">Proyectos seleccionados</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <WorkCard
                title="Rebranding panadería artesanal"
                category="Identidad de marca, Diseño web"
                imageUrl="/placeholder.svg?key=8eve2"
              />
              <WorkCard
                title="Plataforma startup tecnológica"
                category="Desarrollo web, Diseño UX"
                imageUrl="/placeholder.svg?key=teqx4"
              />
              <WorkCard
                title="E-commerce de moda de lujo"
                category="E-commerce, Estrategia digital"
                imageUrl="/placeholder.svg?key=kob4b"
              />
              <WorkCard
                title="Interfaz app de bienestar"
                category="Diseño UI, App móvil"
                imageUrl="/placeholder.svg?key=cpdnw"
              />
              <WorkCard
                title="Sistema de Parking Parkr"
                category="App de reservas, UX/UI Design"
                imageUrl="/placeholder.jpg"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-[70vh] bg-neutral-100 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xl">
                  Foto del equipo
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-sm text-neutral-500">Nuestra misión</span>
              <h2 className="text-3xl md:text-4xl font-bold">Ayudamos a las marcas a expresar su máximo potencial</h2>
              <p className="text-lg text-neutral-600">
                Creemos que todo negocio merece un gran sitio web. Nuestra misión es eliminar las barreras financieras que impiden que las marcas expresen todo su potencial online.
              </p>
              <p className="text-lg text-neutral-600">
                Ofreciendo diseño web gratuito y cobrando solo por el mantenimiento, hemos creado un modelo que hace accesible la presencia profesional en la web para todos: desde startups hasta empresas consolidadas que buscan renovar su identidad digital.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <div>
                  <h3 className="text-5xl font-bold mb-2">100+</h3>
                  <p className="text-neutral-600">Sitios web gratuitos entregados</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">92%</h3>
                  <p className="text-neutral-600">Tasa de retención de clientes</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">24h</h3>
                  <p className="text-neutral-600">Tiempo de respuesta de soporte</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">$0</h3>
                  <p className="text-neutral-600">Costo de diseño inicial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-10 lg:px-20 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex flex-col gap-8">
                <span className="text-sm text-neutral-400">Comienza ahora</span>
                <h2 className="text-3xl md:text-4xl font-bold">¿Listo para un sitio web gratis?</h2>
                <p className="text-lg text-neutral-300">
                  Cuéntanos sobre tu negocio y lo que buscas. Te contactaremos en menos de 24 horas para hablar sobre cómo podemos ayudarte a expresar tu máximo potencial online.
                </p>
                <div className="mt-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Correo electrónico</h3>
                    <p className="text-neutral-300">hello@digitalpresence.com</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                    <p className="text-neutral-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-12 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <Link href="/" className="text-xl font-semibold">
              digital<span className="text-neutral-400">presence</span>
            </Link>
            <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <Link href="#services" className="text-sm text-neutral-300 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="#work" className="text-sm text-neutral-300 hover:text-white transition-colors">
                Proyectos
              </Link>
              <Link href="#about" className="text-sm text-neutral-300 hover:text-white transition-colors">
                Sobre nosotros
              </Link>
              <Link href="#contact" className="text-sm text-neutral-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-400">
            <p>© 2025 Digital Presence. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

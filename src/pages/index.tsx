import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Users,
  Globe,
  UserPen,
  BookHeart,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          // src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop"
          src="/images/LogoHero.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Kyo-Sai Nieves
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Psicóloga Clínica y Psicoterapeuta en Formación Acompañando a
              adolescentes y adultos en su camino hacia el bienestar emocional.
              <br />
              🌿 Descubre el don de fluir hacia una vida plena.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Agenda tu cita ahora
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Mis servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                🌟 Psicoterapia Individual
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Acompañamiento emocional y psicológico personalizado para
                adolescentes y adultos, en sesiones diseñadas para explorar,
                sanar y crecer.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                🌐 Consulta Online
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accede a sesiones terapéuticas desde la comodidad de tu hogar,
                con la misma calidad y atención que en las consultas
                presenciales.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <UserPen className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                🛋️ Consulta Presencial
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sesiones en un espacio seguro y acogedor ubicado en Consultorios
                Royal Center, Marbella, Ciudad de Panamá.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <BookHeart className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                🧠 Evaluaciones Psicológicas
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Diagnósticos especializados para identificar y abordar
                necesidades específicas en salud mental.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                🤝 Orientación y Apoyo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Asesoramiento individual o grupal para gestionar situaciones de
                crisis y promover el bienestar emocional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {/* <section className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2053&auto=format&fit=crop"
                alt="Blog post"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Understanding Anxiety
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn about common anxiety triggers and effective coping
                  strategies...
                </p>
                <Link
                  href="/blog/understanding-anxiety"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

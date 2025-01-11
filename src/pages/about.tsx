import Image from "next/image";
import { Award, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            Psi. Kyo-Sai Nieves
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Kyo-Sai Nieves es una psicóloga profesional comprometida con el
            bienestar emocional de adolescentes y adultos. Con experiencia en
            psicología clínica y en formación como psicoterapeuta, ofrece un
            enfoque integral y empático para abordar temas como ansiedad,
            depresión, crecimiento personal y manejo de crisis.
            <br />
            <br />
            Su objetivo es brindar un espacio seguro donde cada persona pueda
            explorar sus emociones, superar desafíos y alcanzar un equilibrio
            mental y emocional. Con sesiones tanto presenciales en los
            Consultorios Royal Center de Marbella, Ciudad de Panamá, como en
            modalidad online, adapta sus servicios a las necesidades
            individuales de cada paciente.
            <br />
            <br />
            🌿 El don de fluir hacia una vida plena comienza con un primer paso.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="dark:text-gray-300">
                Psicóloga Clínica Licenciada
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="dark:text-gray-300">
                Especialista en Psicoterapia Integrativa
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="dark:text-gray-300">
                Coordinadora de Programas Juveniles
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-[600px]">
          <Image
            src={"/images/KyoSaiNieves.jpg"}
            alt="Dr. Sarah Johnson"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Education & Experience */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Educación</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Licenciatura en Psicología
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Universidad Latinoamericana de Comercio Exterior (2012 - 2017)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Trabajo de grado: "La aplicación de la arteterapia para mejorar
                la autoestima en jóvenes en riesgo social."
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Psicología Clínica con Especialización en Psicoterapia
                Integrativa
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Universidad Especializada de Las Américas (2018 - 2022)
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Psicoterapia Psicodinámica en Niños y Adolescentes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instituto Internacional de Psicoterapia (Mar. 2022 - Oct. 2022)
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="font-semibold text-lg dark:text-white">
                Diplomados
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  • Fundamentos de Psicoterapia Psicodinámica (2020 - 2021)
                </li>
                <li>• Psicología Clínica (2019)</li>
                <li>• Psicología en la Infancia y Adolescencia (2019)</li>
                <li>• Pruebas Psicológicas en su Campo de Acción (2018)</li>
                <li>
                  • Marketing Digital 2.0 y Community Manager (2020 - 2021)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Experiencia Profesional
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Psicóloga Independiente
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                2018 - Actualidad
              </p>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Psicoterapia individual para adolescentes y adultos</li>
                <li>• Evaluaciones psicológicas y elaboración de informes</li>
                <li>• Facilitación de grupos de apoyo</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Coordinadora de Programas Juveniles
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secretaría Nacional de Niñez, Adolescencia y Familia (2023 -
                Actualidad)
              </p>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Gestión y planificación de actividades para NNA</li>
                <li>• Intervención en crisis y orientación psicológica</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Directora de Proyecto
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Red Apoyo Psicológico Panamá (2020 - 2022)
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Supervisión de protocolos, asignación de casos y manejo de redes
                sociales
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-xl dark:text-white">
                Psicóloga
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Novus Medical Center (2019 - 2021)
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Evaluaciones psicológicas, orientación emocional y psicoterapia
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

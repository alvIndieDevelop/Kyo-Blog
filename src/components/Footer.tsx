import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Sarah Johnson</h3>
            <p className="text-gray-600">
              Psicóloga profesional especializada en salud mental, desarrollo
              personal y psicoterapia para adolescentes y adultos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Informacion de contactos
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-600" />
                <span className="text-gray-600">
                  psi.kyosainieves@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-600" />
                <span className="text-gray-600">(+507) 6433-3779</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-gray-600" />
                <span className="text-gray-600">
                  Consultorios Royal Center, Marbella, Panama City, Panama
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Psi. Kyo-Sai Nieves. Derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

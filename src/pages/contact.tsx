import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-[-100px]">
        <Image
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
          alt="Contact header"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
            <p className="text-lg text-gray-200">
              Let's start a conversation about your well-being
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-blue-600 dark:bg-blue-700 p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-blue-100 mb-8">
                    I'm here to help you on your journey to better mental
                    health. Feel free to reach out with any questions.
                  </p>
                  <ContactInfo />
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-blue-100">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <div>
                <h2 className="text-2xl font-semibold mb-2 dark:text-white">
                  Send a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Therapy St", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@drjohnson.com"],
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map((item) => (
        <div key={item.title} className="flex items-start space-x-4">
          <div className="bg-blue-500 dark:bg-blue-600 rounded-lg p-3">
            <item.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">{item.title}</h3>
            {item.details.map((detail, index) => (
              <p key={index} className="text-blue-100">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

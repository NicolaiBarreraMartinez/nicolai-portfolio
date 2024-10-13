"use client";

import { FaCode, FaMobileAlt, FaRobot, FaDesktop } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Java Development",
    icon: <FaCode size={40} className="text-[#FF7A29]" />,
    description:
      "Build robust and scalable backend systems with Java, covering from microservices to enterprise-level applications.",
  },
  {
    id: 2,
    title: "iOS Development",
    icon: <FaMobileAlt size={40} className="text-[#FF7A29]" />,
    description:
      "Design and develop high-performance native iOS apps that provide an exceptional user experience.",
  },
  {
    id: 3,
    title: "AI Solutions",
    icon: <FaRobot size={40} className="text-[#FF7A29]" />,
    description:
      "Implement advanced AI technologies to create smarter and more intuitive applications with machine learning.",
  },
  {
    id: 4,
    title: "Front-End Development",
    icon: <FaDesktop size={40} className="text-[#FF7A29]" />,
    description:
      "Create stunning, responsive, and interactive front-end interfaces using modern technologies like React.",
  },
];

const Services = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        {/* Título e Introducción */}
        <h2 className="text-white text-5xl font-bold text-center mb-6">
          My Services
        </h2>
        <p className="text-white text-center text-lg mb-10 max-w-2xl mx-auto">
          I offer a variety of development services, specializing in creating
          high-performance software solutions, from backend systems in Java, to
          modern front-end interfaces, AI development, and native iOS apps. 
        </p>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center items-center mb-4">
                <span className="text-5xl font-bold text-[#FF7A29]">
                  {service.id}
                </span>
              </div>
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-[#FF7A29] text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Subtítulo Final */} 
        <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF7A29" }}>Additional Services</h2>
        <p className="mb-4">
         Consulting, training, and specialized solutions tailored to your needs.
</p>
</div>
      </div>
    </section>
  );
};

export default Services;




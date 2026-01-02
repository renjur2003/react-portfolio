import { RevealOnScroll } from "../RevealOnScroll";

export const Services = () => {
  const services = [
    {
      title: "Business Website Development",
      description:
        "Professional, responsive, and SEO-friendly websites tailored for your brand to attract more customers.",
    },
    {
      title: "Booking & Enquiry Systems",
      description:
        "Custom booking platforms with automated enquiry forms, perfect for tourism and service-based businesses.",
    },
    {
      title: "WhatsApp & Email Integration",
      description:
        "Seamless communication tools that send instant notifications to your phone and email whenever a customer contacts you.",
    },
    {
      title: "Website Redesign & Optimization",
      description:
        "Revamping outdated websites with modern designs, faster load times, and mobile responsiveness.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600 bg-clip-text text-transparent text-center">
            My Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass p-8 rounded-xl hover:-translate-y-1 transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] cursor-default"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default function Services() {
    const services = [
      { title: "Personal Loans", description: "For your personal financial needs with a simple process." },
      { title: "Business Loans", description: "Expand your business with easy-to-apply solutions." },
      { title: "Home Loans", description: "Make your dream home a reality with affordable plans." }
    ];
  
    return (
      <section id="services" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-indigo-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
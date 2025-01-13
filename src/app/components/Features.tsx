export default function Features() {
    const features = [
      { title: "Quick Approvals", description: "Get approved for your loan in just a few minutes." },
      { title: "Low Interest Rates", description: "Enjoy competitive interest rates tailored to your financial needs." },
      { title: "Flexible Terms", description: "Choose repayment options that work best for your budget." }
    ];
  
    return (
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
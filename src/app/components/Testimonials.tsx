export default function Testimonials() {
    const testimonials = [
      { quote: "LoanPro made the process so easy and stress-free. Highly recommended!", name: "John Doe" },
      { quote: "I got my loan approved in minutes. The rates are unbeatable.", name: "Jane Smith" }
    ];
  
    return (
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <h4 className="text-indigo-600 font-semibold mt-4">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
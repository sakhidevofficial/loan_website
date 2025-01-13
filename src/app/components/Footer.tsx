export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About LoanPro</h3>
            <p className="text-gray-400 mb-4">
              LoanPro offers flexible and affordable loan solutions to meet your financial needs. Transparency and reliability are our priorities.
            </p>
            <a href="#about" className="text-blue-400 hover:underline">Learn More</a>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400">Contact</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-blue-400">FAQs</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Loan Street, Finance City</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400 mb-2">Email: support@loanpro.com</p>
            <div className="mt-4">
              <a href="#" className="text-blue-400 hover:underline mr-4">Facebook</a>
              <a href="#" className="text-blue-400 hover:underline mr-4">Twitter</a>
              <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; 2025 LoanPro. All rights reserved. | <a href="#privacy" className="text-blue-400 hover:underline">Privacy Policy</a> | <a href="#terms" className="text-blue-400 hover:underline">Terms of Service</a></p>
        </div>
      </footer>
    );
  }
  
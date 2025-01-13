import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Features from '@/app/components/Features'
import Testimonials from '@/app/components/Testimonials'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}



import Header from '../layout/Header';
import Hero from './Hero';
import LatestToursSection from './LatestToursSection';
import About from './About';
import Articles from './Articles';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from '../layout/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <Hero />
      <LatestToursSection />
      <About />
      <Articles />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

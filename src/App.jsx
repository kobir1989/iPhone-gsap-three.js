import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Highlights from './components/Highlights/Highlights';
import Model from './components/Model/Model';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWork';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};
export default App;

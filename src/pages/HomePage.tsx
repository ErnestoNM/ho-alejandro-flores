import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id='images-home-div' >
        <img id='img-home-1' className='img-home' src='/assets/home1.jpeg' />
        <img id='img-home-2' className='img-home' src='/assets/home2.jpeg' />
        <img id='img-home-3' className='img-home' src='/assets/home3.jpeg' />
        <img id='img-home-3' className='img-home' src='/assets/home4.jpeg' />
      </div>
      <Services />
      <About />
      <Contact />
    </>
  );

}

export default HomePage;

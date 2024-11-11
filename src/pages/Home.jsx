import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Highlight from '../components/Highlights/Highlight';
import Technical from '../components/Technical/Technical';
import About from '../components/About/About';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Highlight />
            <Technical/>
            <About />
            <Partners />
            <Footer  />
        </div>
    );
};

export default Home;

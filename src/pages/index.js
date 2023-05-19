import React, {useState}from 'react';
import Navbar from '../components/navBar';
import HeroSection from '../components/heroSection';
import SideBar from '../components/sideBar';
import Footer from '../components/footer';
import { SectionAinfo } from '../components/heroSection/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div><p>hero section</p></div>
            <HeroSection {...SectionAinfo} />
            <Footer/>

            
        </div>
    )
}

export default Home
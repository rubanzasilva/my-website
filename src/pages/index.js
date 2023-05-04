import React, {useState}from 'react';
import Navbar from '../components/navBar';
import SideBar from '../components/sideBar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            
        </div>
    )
}

export default Home
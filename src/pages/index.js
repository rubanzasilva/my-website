import React, {useState}from 'react';
import Navbar from '../components/navBar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
            <p>Hommmmmmeeeeeeeeeeeeeeeeeeeeeee</p>
            <Navbar toggle={toggle} />

            
        </div>
    )
}

export default Home
import React, {useState}from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
            <p>Hommmmmmeeeeeeeeeeeeeeeeeeeeeee</p>

            
        </div>
    )
}

export default Home
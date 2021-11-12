import React from 'react';
import "./Banner.css"
import banner from '../../../image/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div  className="banner1" style={{  
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} >
            <div className="mt-5">
               
               <Link className="navLink " to="/explore"><button className="btn-common">Expolore Here</button></Link>
            </div>
        </div>
    );
};

export default Banner;
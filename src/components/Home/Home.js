import React from 'react';
import Footer from '../Footer/Footer';

import Banner from './Banner/Banner';
import Products from './Products/Products';
import UserComment from './UserComment/UserComment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <UserComment></UserComment>
            <Footer></Footer>
        </div>
    );
};

export default Home;
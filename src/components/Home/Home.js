import React from 'react';
import LatestBlog from '../LatestBlog/LatestBlog';

import Banner from './Banner/Banner';
import Products from './Products/Products';
import UserComment from './UserComment/UserComment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <LatestBlog></LatestBlog>
            <UserComment></UserComment>
            
        </div>
    );
};

export default Home;
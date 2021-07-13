import React, { Fragment } from 'react';

//components
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import About from '../components/section-about/about';
import Promotions from '../components/promotions/promotions';

const Index = () => {
    return ( 
        <Fragment>
        <Navbar />
        <Header />
        <About />
        <Promotions />
        </Fragment>
     );
}
 
export default Index;
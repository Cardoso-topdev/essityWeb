import React, { Fragment } from 'react';

//components
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import About from '../components/section-about/about';

const Index = () => {
    return ( 
        <Fragment>
        <Navbar />
        <Header />
        <About />
        </Fragment>
     );
}
 
export default Index;
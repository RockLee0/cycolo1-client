import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Cycles from '../Cycles/Cycles';
import Gift from '../Gift/Gift';
import Header from '../Header/Header';
import Feedbacks from '../Feedbacks/Feedbacks';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <Cycles></Cycles>
            <Gift></Gift>
            <Feedbacks></Feedbacks>
            <Footer></Footer> 
        </>
    );
};

export default Home;
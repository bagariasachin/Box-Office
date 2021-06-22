import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Title from './Title';

const MainPageLayout = ({children}) => {
   
    return (
        <div>
            <Title title="Box Office"  subtitle="Are you looking for an actor or a movie ?"/>
             <Navbar />

             {children}
        </div>
    )
}

export default MainPageLayout;

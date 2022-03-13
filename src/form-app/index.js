import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './login'; 
const SignUp = lazy(() => import('./signup')); 
const Welcome = lazy(() => import('./welcome')); 

const Index = () => {

    return (
        <React.Fragment>
            
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </Suspense> 
                
        </React.Fragment>
    )
}

export default Index;

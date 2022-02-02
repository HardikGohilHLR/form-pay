import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './login'; 
const SignUp = lazy(() =>  import('./signup')); 

const Index = () => {
    return (
        <React.Fragment>
            
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </Suspense> 
                
        </React.Fragment>
    )
}

export default Index;

/**
* Sign up 
*/

import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useForceUpdate } from '../../common/hooks/useForceUpdate';

// Packages
import Validator from 'simple-react-validator';

// Components
import PersonalInfo from './personal-info';
import WorkInfo from './work-info';

const SignUp = () => {
    
    const dispatch = useDispatch();

    const forceUpdate = useForceUpdate(); 
    const validator = useRef(new Validator({ element: message => <>{message}</>, autoForceUpdate: {forceUpdate} })); 

    const _STEP = useSelector(e => e.form.signupStep)
    console.log('_STEP', _STEP);
    const [fieldValues, setFieldValues] = useState({});

    const [tabs] = useState([
        { id: 1, name: 'Personal Information', isActive: true, isCompleted: false },
        { id: 2, name: 'Work Experience', isActive: false, isCompleted: false },
    ])

    const submit = (e) => {
        e.preventDefault();
        if(_STEP?.currentStep === 1) {
            if(validator?.current?.allValid()) {
                dispatch({ type: 'SET_STEP', payload: 2});
            } else {
                validator?.current?.showMessages();
            }
        }
    }

    const changeTab = (tab) => {

    }
    
    return (
        <React.Fragment>
            <div className="f_signup-wpr f_form-wpr">
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-screen-lg	 w-full space-y-8">
                        
                        <div> 
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Create your account </h2>
                            <p className="mt-2 text-center text-sm text-gray-600"> Already have an account? <Link to="/" className="text-indigo-600 font-semibold">Login</Link> </p>
                        </div>

                        <div>
                            <ul className="flex">
                                {
                                    tabs?.map(tab => {
                                        return <li 
                                        className={`
                                            text-base cursor-pointer px-6 py-2 border-b-4 text-gray-800
                                            ${tab?.isActive ? 'font-semibold border-indigo-600' : 'nt-medium border-transparent'}
                                        `}
                                        onClick={() => changeTab(tab)}
                                        key={tab?.id}
                                        >
                                            {tab?.name }
                                        </li>
                                    })
                                }
                            </ul>
                        </div>                        

                        <div className="md:grid md:grid-cols-2 md:gap-6"> 
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form>
                                    {
                                        _STEP?.currentStep === 1 && <PersonalInfo validator={validator} updateData={(data) => setFieldValues(data)} />
                                    }
                                    
                                    {
                                        _STEP?.currentStep === 2 && <WorkInfo />
                                    }

                                    <div className="py-3 text-right"> 
                                        <button onClick={submit} className="group relative w-56 ml-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3"> 
                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            Next
                                        </button>
                                    </div>
                                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>

        </React.Fragment>
    )
}

export default SignUp;

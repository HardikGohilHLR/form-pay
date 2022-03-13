/**
* Sign up 
*/

import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useForceUpdate } from '../../common/hooks/useForceUpdate';

// Packages
import Validator from 'simple-react-validator';

// Components
import PersonalInfo from './personal-info';
import WorkInfo from './work-info';

const SignUp = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const forceUpdate = useForceUpdate(); 
    const validator = useRef(new Validator({ element: message => <>{message}</>, autoForceUpdate: {forceUpdate} })); 

    const _STEP = useSelector(e => e.form.signupStep);
    const [fieldValues, setFieldValues] = useState({});

    const [tabs, setTabs] = useState([
        { id: 1, name: 'Personal Information', isActive: true, isCompleted: false },
        { id: 2, name: 'Work Experience', isActive: false, isCompleted: false },
    ]);

    useEffect(() => {
        let tabsData = [...tabs];
        tabsData?.forEach(tab => {
            tab.isActive = false;
            if(tab.id === _STEP?.currentStep) {
                tab.isActive = true;
            }
            return tab;
        });
        setTabs(tabsData);
    }, [_STEP]);

    const next = (e) => {
        e.preventDefault();
        if(_STEP?.currentStep === 1) {
            if(validator?.current?.allValid()) {
                dispatch({ type: 'SET_STEP', payload: 2});
                dispatch({ type: 'SIGNUP', payload: fieldValues});
            } else {
                validator?.current?.showMessages();
            }
        }
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SIGNUP', payload: fieldValues});  
        navigate('/welcome');
    }

    const back = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_STEP', payload: 1});
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
                                        _STEP?.currentStep === 1 && <PersonalInfo validator={validator} updateData={(data) => setFieldValues({...fieldValues, ...data})} />
                                    }
                                    
                                    {
                                        _STEP?.currentStep === 2 && <WorkInfo updateData={(data) => setFieldValues({...fieldValues, ...data})} />
                                    }

                                    <div className="py-3 flex justify-end"> 
                                        {
                                            _STEP?.currentStep > 1 &&   
                                                <button onClick={back} className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">                                                
                                                    Back
                                                </button>
                                        }
                                        {
                                            _STEP?.currentStep > 1 &&   
                                            <button onClick={submit} className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 ml-3 hover:bg-indigo-700">                                                
                                                Submit
                                            </button>
                                        }
                                        {
                                            _STEP?.currentStep === 1 &&   
                                            <button onClick={next} className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 ml-3 hover:bg-indigo-700">                                                
                                                Next
                                            </button>
                                        }
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

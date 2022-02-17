/**
* Login 
*/

import React, { useState } from 'react';

// Components
import FInput from '../../components/input/FInput';

const Login = () => {

    const [fieldValues, setFieldValues] = useState({
        username: '',
        password: ''
    });

    const login = (e) => {
        e.preventDefault();
        console.log('fieldValues', fieldValues);
    }

    const inputChange = e => {
        let { name, value } = e.target;
        setFieldValues({...fieldValues, [name]: value});
    }
    
    return (
        <React.Fragment>
            <div className="f_login-wpr f_form-wpr">
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">

                        <div> 
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Sign in to your account </h2>
                            <p className="mt-2 text-center text-sm text-gray-600"> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                        </div>

                        <div className="rounded bg-white max-w-md rounded overflow-hidden p-5">

                            <form className="space-y-4">
                                
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="grid gap-6">
                                        <div className="col-span-12">
                                            <FInput label="Username" required isError={true}> 
                                                <input type="text" name="username" value={fieldValues?.username} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </FInput>
                                        </div>

                                        <div className="col-span-12">
                                            
                                            <FInput label="Password" required>
                                                <input type="password" name="password" value={fieldValues?.password} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            </FInput>

                                        </div>
                                    </div>
                                </div>

                                <button onClick={login} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"> 
                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Sign in
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
	        </div>

        </React.Fragment>
    )
}

export default Login;

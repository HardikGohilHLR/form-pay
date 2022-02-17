/**
* Sign up 
*/

import React, { useState } from 'react';

// Components
import FInput from '../../components/input/FInput';

const SignUp = () => {

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
                    <div className="max-w-screen-lg	 w-full space-y-8">
                        
                        <div> 
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Create your account </h2>
                            <p className="mt-2 text-center text-sm text-gray-600"> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-6"> 
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form>
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">

                                                <div className="col-span-6 sm:col-span-3">
                                                    <FInput label="First name" required isError={true}> 
                                                        <input type="text" name="first-name" value={fieldValues?.firstName} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <FInput label="Last name" required isError={true}> 
                                                        <input type="text" name="last-name" value={fieldValues?.lastName} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <FInput label="Email address" required isError={true}>  
                                                        <input type="text" name="email-address" value={fieldValues?.email} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <FInput label="Country" required isError={true}>   
                                                        <select id="country" name="country" value={fieldValues?.country} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6">
                                                    <FInput label="Street address" required isError={true}>
                                                        <input type="text" name="street-address" value={fieldValues?.address} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <FInput label="City" required isError={true}>
                                                        <input type="text" name="vity" value={fieldValues?.city} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <FInput label="State / Province" required isError={true}>
                                                        <input type="text" name="state" value={fieldValues?.state} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <FInput label="ZIP / Postal code" required isError={true}>
                                                        <input type="text" name="postal-code" value={fieldValues?.postalCode} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </FInput> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"> 
                                            <button onClick={login} className="group relative max-w-xs w-full ml-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="absolute left-0 inset-y-0 flex items-center pl-3"> 
                                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                Submit
                                            </button>
                                        </div>
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

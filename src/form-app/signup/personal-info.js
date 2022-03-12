/**
* Sign up - Personal Information
*/

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useForceUpdate } from '../../common/hooks/useForceUpdate';

// Packages
import Validator from 'simple-react-validator';

// Components
import FInput from '../../components/input/FInput';

const PersonalInfo = () => {
 
    const forceUpdate = useForceUpdate(); 
    const validator = useRef(new Validator({ element: message => <>{message}</>, autoForceUpdate: {forceUpdate} })); 
    
    const [fieldValues, setFieldValues] = useState({});

    const inputChange = e => {
        let { name, value } = e.target;
        setFieldValues({...fieldValues, [name]: value});
    }

    return (
        <React.Fragment>
            
            <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                    <FInput label="First name" required isError={validator?.current?.message('firstName', fieldValues?.firstName, 'required')}> 
                        <input type="text" name="first-name" value={fieldValues?.firstName} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <FInput label="Last name" required isError={validator?.current?.message('lastName', fieldValues?.lastName, 'required')}> 
                        <input type="text" name="last-name" value={fieldValues?.lastName} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <FInput label="Phone Number" required isError={false}>  
                        <input type="text" name="phone-number" value={fieldValues?.phoneNumber} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-6 sm:col-span-3">  
                    <FInput label="Email address" required isError={validator?.current?.message('email', fieldValues?.email, 'required')}> 
                        <input type="text" name="email" value={fieldValues?.email} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Gender" required isError={false} /> 
                    <div className="flex items-center">
                        <div className="flex items-center mr-4">
                            <input name="gender" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label className="ml-3 block text-sm font-medium text-gray-700">
                                Male
                            </label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input name="gender" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label className="ml-3 block text-sm font-medium text-gray-700">
                                Female
                            </label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input name="gender" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label className="ml-3 block text-sm font-medium text-gray-700">
                                Other
                            </label>
                        </div>
                    </div>

                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Date of birth" required isError={false}>  
                        <input type="date" name="dob" value={fieldValues?.email} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Country" required isError={false}>   
                        <select id="country" name="country" value={fieldValues?.country} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            <option>India</option>
                            <option>United States</option>
                            <option>Canada</option>
                        </select>
                    </FInput> 
                </div>

                <div className="col-span-6">
                    <FInput label="Address" required isError={false}>
                        <textarea name="street-address" value={fieldValues?.address} onChange={inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

            </div>

        </React.Fragment>
    )
}

export default PersonalInfo;

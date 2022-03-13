/**
* Sign up - Personal Information
*/

import React, { useEffect, useState } from 'react';

// Components
import FInput from '../../components/input/FInput';

const PersonalInfo = ({validator, updateData}) => {
 
    const [fieldValues, setFieldValues] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        gender: 'male',
        dob: '',
        country: 'canada',
        address: '',
    });
    
    useEffect(() => {
        updateData(fieldValues);
    }, [fieldValues]);

    const handle = {
        change: (e, option) => {
            let { id } = e.target;
            setFieldValues({...fieldValues, [option]: id});
        },
        inputChange: e => {
            let { name, value } = e.target;
            setFieldValues({...fieldValues, [name]: value});
        }
    }
    
    return (
        <React.Fragment>
            
            <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                    <FInput label="First name" required isError={validator?.current?.message('firstName', fieldValues?.firstName, 'required')}> 
                        <input type="text" name="firstName" value={fieldValues?.firstName} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <FInput label="Last name" required isError={validator?.current?.message('lastName', fieldValues?.lastName, 'required')}> 
                        <input type="text" name="lastName" value={fieldValues?.lastName} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <FInput label="Phone Number">  
                        <input type="text" name="phoneNumber" value={fieldValues?.phoneNumber} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-6 sm:col-span-3">  
                    <FInput label="Email address" required isError={validator?.current?.message('email', fieldValues?.email, 'required|email')}> 
                        <input type="text" name="email" value={fieldValues?.email} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Gender" /> 
                    <div className="flex items-center">
                        <div className="flex items-center mr-4">
                            <input name="gender" id="male" type="radio" checked={fieldValues?.gender === 'male'} onChange={e => handle.change(e, 'gender')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input name="gender" type="radio" id="female" checked={fieldValues?.gender === 'female'} onChange={e => handle.change(e, 'gender')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                            <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>

                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Date of birth">  
                        <input type="date" name="dob" value={fieldValues?.dob} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Country">   
                        <select id="country" name="country" onChange={handle.inputChange} value={fieldValues?.country} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </FInput> 
                </div>

                <div className="col-span-6">
                    <FInput label="Address">
                        <textarea name="address" value={fieldValues?.address} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

            </div>

        </React.Fragment>
    )
}

export default PersonalInfo;

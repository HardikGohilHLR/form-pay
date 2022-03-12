/**
* Sign up - Work Information
*/

import React, { useState } from 'react';
import FInput from '../../components/input/FInput';

const WorkInfo = () => {

    const [fieldValues, setFieldValues] = useState({});

    
    const handle = {
        inputChange: e => {
            let { name, value } = e.target;
            setFieldValues({...fieldValues, [name]: value});
        }
    }

    return (
        <React.Fragment>

            <div className="col-span-12 sm:col-span-12">
                <h3>Organization Details</h3>
            </div>

            <div className="grid grid-cols-6 gap-6">

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Name" required isError={true}> 
                        <input type="text" name="company-name" value={fieldValues?.companyName} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Job Title" required isError={false}> 
                        <input type="text" name="job-title" value={fieldValues?.jobTitle} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Location" required isError={false}>  
                        <input type="text" name="location" value={fieldValues?.location} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Start Date" required isError={false}> 
                        <input type="date" name="start-date" value={fieldValues?.startDate} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="End Date" required isError={false}> 
                        <input type="date" name="end-date" value={fieldValues?.endDate} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Job Type" required isError={false}>
                        <select name="country" value={fieldValues?.jobType} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Freelance</option>
                            <option>Intern</option>
                            <option>Co-founder</option>
                        </select>
                    </FInput>
                </div>

                <div className="col-span-12 sm:col-span-12">
                    <FInput label="Search Skills..." required isError={false}>   
                        <select name="skills" value={fieldValues?.country} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            <option selected>Skills</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>Javascript</option>
                        </select>
                    </FInput> 
                </div>

            </div>
        </React.Fragment>
    )
}

export default WorkInfo;
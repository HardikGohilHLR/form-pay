/**
* Sign up - Work Information
*/

import React, { useState, useEffect } from 'react';
import FInput from '../../components/input/FInput';

const WorkInfo = ({updateData}) => {

    const [fieldValues, setFieldValues] = useState({
        companyName: '',
        jobTitle: '',
        location: '',
        startDate: '',
        endDate: '',
        jobType: '',
        skills: []
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
        },
        selectChange: (e) => {
            let { name, selectedOptions } = e.target;
            let value = Array.from(selectedOptions, option => option.value);
            setFieldValues({...fieldValues, [name]: value});
        }
    }

    return (
        <React.Fragment>

            <div className="col-span-12 sm:col-span-12 mb-4">
                <h3 className="text-xl font-bold text-gray-800">Organization Details</h3>
            </div>

            <div className="grid grid-cols-6 gap-6">

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Name"> 
                        <input type="text" name="companyName" value={fieldValues?.companyName} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Job Title"> 
                        <input type="text" name="jobTitle" value={fieldValues?.jobTitle} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Location">  
                        <input type="text" name="location" value={fieldValues?.location} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Start Date"> 
                        <input type="date" name="startDate" value={fieldValues?.startDate} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="End Date"> 
                        <input type="date" name="endDate" value={fieldValues?.endDate} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </FInput> 
                </div>

                <div className="col-span-4 sm:col-span-2">
                    <FInput label="Job Type">
                        <select name="jobType" value={fieldValues?.jobType} onChange={handle.inputChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Intern">Intern</option>
                            <option value="Co-founder">Co-founder</option>
                        </select>
                    </FInput>
                </div>

                <div className="col-span-12 sm:col-span-6">
                    <FInput label="Search Skills...">   
                        <select name="skills" multiple onChange={handle.selectChange}  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
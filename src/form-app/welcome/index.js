/**
* Welcome
*/

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const navigate = useNavigate();
    const _USER = useSelector(e => e.form.signup);
    
    useEffect(() => {
        if(Object.keys(_USER)?.length === 0) {
            navigate('/');
        }
    }, [_USER]);
    

    return (
        <React.Fragment>
            <div className="f_signup-wpr f_form-wpr">
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-screen-sm	w-full space-y-8">
                        
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Welcome, { _USER?.firstName } { _USER?.lastName } </h2>
                        
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-4 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ _USER?.firstName } { _USER?.lastName }</dd>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.email || '-'}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.phoneNumber || '-'}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.gender || '-'}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Date of birth</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.dob || '-'}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Country</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.country || '-'}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.address || '-'}</dd>
                                    </div>                               
                                
                                </dl>
                            </div>
                            <div className="px-4 py-4 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Work Information</h3>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ _USER?.companyName || '-' }</dd>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.jobTitle || '-' }</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.location || '-'}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.startDate || '-'}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">End Date</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.endDate || '-'}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Job Type</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{_USER?.jobType || '-'}</dd>
                                    </div>    
                                    <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Skills</dt>
                                        {
                                            _USER?.skills ? 
                                            <div className="flex">
                                                {
                                                    _USER?.skills?.map(skill => {
                                                        return (
                                                        <label class="px-4 py-1 mr-3 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600">
                                                            {skill}                                                        
                                                        </label>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : 
                                            '-'
                                        }
                                    </div>                            
                                
                                </dl>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </React.Fragment>
    )
}

export default Welcome;

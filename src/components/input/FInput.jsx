/**
* Input 
*/

import React from 'react';

const FInput = ({label, required, isError, children}) => {
    return (
        <React.Fragment>
            <div className={`f_input`}>
                
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

                <div className="f_input-area">
                    { children }

                    {
                        isError && 
                        <span>{isError}</span>
                    }   
                </div>
            </div>
        </React.Fragment>
    )
}

export default FInput;

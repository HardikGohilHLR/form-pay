/**
* Input 
*/

import React from 'react';

const FInput = ({label, required, isError, children}) => {
    return (
        <React.Fragment>
            <div className={`f_input`}>

                <label className='f_input-label'>
                    {label}
                    {
                        required && <span className="f_input-required">*</span>
                    }
                </label>

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

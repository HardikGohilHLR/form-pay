/**
* Login 
*/

import React from 'react';
import FInput from '../../components/input/FInput';

const index = () => {

    const login = () => {

    }

    const inputChange = () => {

    }
    
    return (
        <React.Fragment>
            <div className="f_login-wpr f_form-wpr">

                <div className="u_content-header">
                    <h1>Login to your Account</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>


                <form>
                    <FInput label="user name" required isError={true}>
                        <input type="text" name="username" value={''} onChange={inputChange} />
                    </FInput>

                    <FInput label="password" required>
                        <input type="password" name="password" value={''} onChange={inputChange} />
                    </FInput>

                    <button className="f_btn" onClick={login}>Login</button>
                </form>



            </div>
        </React.Fragment>
    )
}

export default index;

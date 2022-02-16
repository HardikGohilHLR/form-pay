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

                <div className="u_content-header">
                    <h1>Login to your Account</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>

                <form>
                    <FInput label="username" required isError={true}>
                        <input type="text" name="username" value={fieldValues?.username} onChange={inputChange} />
                    </FInput>

                    <FInput label="password" required>
                        <input type="password" name="password" value={fieldValues?.password} onChange={inputChange} />
                    </FInput>

                    <button className="f_btn" onClick={login}>Login</button>
                </form>

            </div>
        </React.Fragment>
    )
}

export default Login;

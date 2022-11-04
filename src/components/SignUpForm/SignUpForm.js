import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

import { WEBAPP } from '../../constants/routes';
import "./SignUpForm.css"


const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const auth = useAuth();

    return (
        <div className='container'>

            <form onSubmit={(event) => {
                event.preventDefault();
                auth.signup({ email, password, callback: () => {
                    navigate(WEBAPP);
                } });
                setEmail("");
                setPassword("");
            }}>
                <label>Email</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
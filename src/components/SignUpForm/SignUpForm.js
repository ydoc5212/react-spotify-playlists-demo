import React, {useState, useContext} from 'react';
import { FirebaseContext } from '../../context/FirebaseContext';
import "firebase/compat/auth";
import "./SignUpForm.css"


const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {firebase} = useContext(FirebaseContext);

    return (
        <div className='container'>
            
            <form onSubmit={(event) => {
                event.preventDefault();
                firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => alert('signed up!'))
                .catch((error) => alert(error.message));

                // placeholder response
                alert(email + " " + password);
                setEmail("");
                setPassword("");
            }}>
                <label>Email</label>
                <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
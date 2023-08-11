import { Link, Navigate } from 'react-router-dom'
import './index.css'
import axios from 'axios';
import { auth } from '../../firebase-config';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = () => {
    const [eid, seteid] = useState("");
    const [pass, setpass] = useState("");

    const handleChangeEmail = (event) => {
        seteid(event.target.value);
    }

    const handleChangePass = (event) => {
        setpass(event.target.value);
    }
    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, eid,pass);
            console.log("user created successfully");
        }catch(error){
            console.log(error.message);
        }
    }

    // const handleSubmit =(e)=>{
    //     const st = {
    //         username : document.getElementById("username").value,
    //         email : document.getElementById("email").value,
    //         password : document.getElementById("password").value
    //     }
    //     console.log(document.getElementById("username"));
    //     axios.post("http://localhost:5000/users/add",st)
    //     .then(()=>alert("user added successfully"))
    //     .catch(err=>alert("Error"))


    // }
    return (
        <div className='signup-main-container'>
            <form className='form-card' type="submit">
                <div className='login-card-container' >
                    <h1 className='login-heading'>Register with your email</h1>
                    <label htmlFor='username' className='labels-style'>User Name</label>
                    <div className='input-mail-container hover-edit'>
                        <input type="text" id="username" placeholder="Enter user name" name="username" className='input-mail-style' required />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                    <label htmlFor='email' className='labels-style'>Email Address</label>

                    <div className='input-mail-container hover-edit'>
                        <input type="mail" id="email" placeholder="enter your mail" name="email" className='input-mail-style' onChange={handleChangeEmail} required />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                        </svg>
                    </div>
                    <label htmlFor='pass' className='labels-style'>Password</label>
                    <div className='input-mail-container hover-edit'>
                        <input type="password" id="password" placeholder="Password" name="password" onChange={handleChangePass} className='input-mail-style' required />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                        </svg>
                    </div>
                    <div >
                        <Link to="/login" ><button className='login-button-style hover-edit' onClick={signup}>Sign up</button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
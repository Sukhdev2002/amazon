import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from  './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e=> {
        e.preventDefault();
        // some fancy firebase login shittttt...
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error =>alert(error.message))
    }
    const register = e=> {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // it successfully created a new user with email and password 
        console.log(auth);
        if(auth){
            history.push('/')
        }
        })
        .catch(error=> alert(error.message))
        // some fancy firebase register shittttttt...
    }
    return (
        <div className='login'>
            <Link to ='/'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREVyQ-pQ4CB6MrZIiFz8_Fx5poZVjr32LHRA&usqp=CAU"  alt="no logo" className="login_logo" />      
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input  type ='text' value ={email} onChange= {e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input  type ='password' value= {password} onChange = {e=>setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>

                </form>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button onClick = {register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import supabase from './Supabase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn({ setToken }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    function handleEmailLogin(event){
        setEmail(event.target.value)
    }

    function handlePasswordLogin(event){
        setPassword(event.target.value)
    }

    async function handleLogin(e){
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {
                throw error;
            }
            setToken(data)
            navigate('/');
            console.log(data)
        } catch (error) {
            console.error('Login error:', error.message);
            
        }
    
    }
  return (
    <div className='form-div' >
        <h1>LOGIN</h1>
 <form onSubmit={handleLogin} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={handleEmailLogin} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" class="form-control"  onChange={handlePasswordLogin} id="exampleInputPassword1" />
  </div>
  <button type="submit" class="btn btn-primary btn2">Submit</button>
</form>
        

        <p>Don't have an account? <Link to = '/sign-up' style={{ color: 'white'}}>SIGN UP</Link></p>

    </div>
  )
}

export default SignIn
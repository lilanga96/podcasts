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
    <div>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleLogin}>
            <input type='email' value={email} onChange={handleEmailLogin} />
            <input type='password' placeholder='Password' onChange={handlePasswordLogin} />
            <button type='submit'>Submit</button>
        </form>

        <p>Don't have an account? <Link to = '/sign-up'>SIGN UP</Link></p>

    </div>
  )
}

export default SignIn
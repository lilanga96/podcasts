import React, { useState } from 'react'
import supabase from './Supabase'
import { Link } from 'react-router-dom'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleFullName(event){
        setFullName(event.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const { error, data } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            })
            if(error){
                throw error
            }

            alert('check emails to confirm email address')
            
        } catch (error) {
            alert('error')
        }
    }
  return (
    <div>
       <h1>SignUp</h1>
       <form onSubmit={handleSubmit}>
        <input type='text' value={email} placeholder='Email' onChange={handleEmail} />
        <input type='password' placeholder='Password' onChange={handlePassword} />
        <input type='text' value={fullName} placeholder='Full name' onChange={handleFullName} />
        <button type='submit'>Submit</button>
        
       </form>

       <p>Already have an account? <Link to ='/sign-in'>SIGN IN</Link></p>
    </div>
  )
}

export default SignUp
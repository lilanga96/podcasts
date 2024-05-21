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
    <div className='form-div'>
       <h1>Sign up</h1>
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={handleEmail} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" class="form-control"  onChange={handlePassword} id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputFullName" class="form-label">Full name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={fullName} onChange={handleFullName} aria-describedby="emailHelp"/>

  </div>
  <button type="submit" class="btn btn-primary btn2">Submit</button>
</form>

       <p className='signUp-paragraph'>Already have an account? <Link to ='/sign-in' style={{ color: 'white'}}>SIGN IN</Link></p>
    </div>
  )
}

export default SignUp
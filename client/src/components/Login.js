import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login() {

   const history=useNavigate()

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

   const loginuser= async (e)=>{
     e.preventDefault()

    const res= await fetch('/signin',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })

     const data = res.json()

     if(res.status===400||!data){
       window.alert("Invalid Credentials")
      
     }else{
       window.alert("Login Successful")
       history.push("/")
     }

   }





  return <>
       <section className='login'>
      <div className="container mt-5">
        <div className="login-content">
          <div className="loginform">
            <h2 className='form-title'>Sign up</h2>
            <form method='POST' className='register-form' id='register-form'>
               

               <div className="form-group">
                 <label htmlFor="email"></label>
                 <input type="email" name='name' id='email' autoComplete='off' value={email} placeholder='Your email' onChange={(e)=> setemail(e.target.value) } />
               </div>

               

               <div className="form-group">
                 <label htmlFor="password"></label>
                 <input type="password" name='password' id='password' autoComplete='off' value={password} placeholder=' password' onChange={(e)=> setpassword(e.target.value) } />
               </div>


               <div className="form-group form-button">
               <input type='submit' name='login' id='login' className='form-sublit' value='Login'/>
               </div>

            </form>
          </div>
        </div>
      </div>
    </section>

  </>;
}

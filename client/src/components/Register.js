import React, { useState } from 'react';
import History from 'react-router-dom'



export default function Register() {

 

  const [user, setuser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })

  /* here name refers to the name key in line 29 35 .... */
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setuser({ ...user, [name]: value })

  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword
      })
    })

    const data = await res.json()
    if (res.status === 422 || !data) {
      window.alert("Invalid")
      console.log('invalid register');
    } else {
      window.alert("Register Success")
      console.log("Success");

      
    }
  }

  return <>   
    <section className='signup'>
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signupform">
            <h2 className='form-title'>Sign up</h2>
            <form className='register-form' id='register-form' method='POST'>
              <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text" name='name' id='name' autoComplete='off'
                  value={user.name} onChange={handleInputs} placeholder='Your Name' />
              </div>

              <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" name='email' id='email' autoComplete='off'
                  value={user.email} onChange={handleInputs} placeholder='Your email' />
              </div>

              <div className="form-group">
                <label htmlFor="number"></label>
                <input type="number" name='phone' id='number' autoComplete='off'
                  value={user.phone} onChange={handleInputs} placeholder='Your number' />
              </div>

              <div className="form-group">
                <label htmlFor="work"></label>
                <input type="text" name='work' id='work' autoComplete='off'
                  value={user.work} onChange={handleInputs} placeholder='Your work' />
              </div>

              <div className="form-group">
                <label htmlFor="password"></label>
                <input type="password" name='password' id='password' autoComplete='off'
                  value={user.password} onChange={handleInputs} placeholder=' password' />
              </div>

              <div className="form-group">
                <label htmlFor="cpassword"></label>
                <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                  value={user.cpassword} onChange={handleInputs} placeholder='Confirm Pass' />
              </div>

              <div className="form-group form-button">
                <input type='submit' name='Signup' id='signup' className='form-sublit' value='Register' onClick={PostData} />
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>


  </>;
}

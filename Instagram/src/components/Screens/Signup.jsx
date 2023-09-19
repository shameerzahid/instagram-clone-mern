import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import M from 'materialize-css'
import axios from 'axios'
const Signup = () => {
  const navigate = useNavigate()
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const PostData = async () => {
await axios.post("http://localhost:5000/signup",{
  name,
  email,
  password
}, {
  headers: {
    "Content-Type" : "application/json"
  }
}
).then(res => {
  const data = res.data
  console.log(data)
   if (data.error) {
      M.toast({ html: data.error, classes: "#e53935 red darken-1" });
    } else {
      M.toast({ html: data.message, classes: "#43a047 green darken-1" });
      navigate('/signin');
    }
})
.catch(error => {
    // Handle any errors that occur during the request
     M.toast({ html: "Fill Correctly", classes: "#43a047 red darken-1" });
  });
  // fetch("http://localhost:5000/signup",{
  //    method: "post",
  //    headers:{
  //     "Content-Type": "application/json"
  //    },
  //    body: JSON.stringify({
  //     name,
  //     email,
  //     password
  //    })
  // }).then(res => res.json())
  // .then(data => {
  //   if(data.error)
  //   {
  //     M.toast({html: data.error, classes: "#e53935 red darken-1"})

      
  //   }
  //   else{
  //   M.toast({html: data.message, classes: "#43a047 green darken-1"})
  //   navigate('/signin')
  //  }
  // })
}
  return (
     <div className='mycard'>
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value) }  />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}  />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <a className="waves-effect waves-light btn #64b5f6 blue darken-1" onClick={() => PostData()}>Sign up</a>
        <h5>
      <Link to='/Signup'>Already have an account?</Link>

        </h5>

      </div>
    </div>
  )
}

export default Signup

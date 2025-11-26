// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({logData}) {
//   const[email,setEmail]=useState("");
//   const[password,setPassword]=useState("");

//   function verification(e){
//     e.preventDefault();
//     // console.log(logData.email);

//     // alert(email+ password);
    
//     if(logData.email == email){
//       if(logData.password == password){
//         alert("Successfully Logged In and navigate to Dashboard");
//         naviagate('/dashboard');
//       }else{
//         alert("Incorrect Password");
//       }
//     }else{
//       alert("Email is not registered");
//     }
//   }
//   return (
//     <div>
//         <h2>Login Form</h2>
//         <form>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="form-group form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button onClick={verification} type="submit" className="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

// export default Login


// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ logData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function verification(e) {
    e.preventDefault();

    if (!logData) {
      alert("No user registered yet, please register first");
      return;
    }

    if (logData.email === email) {
      if (logData.password === password) {
        alert("Successfully Logged In and navigating to Dashboard");
        navigate("/dashboard");
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("Email is not registered");
    }
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button onClick={verification} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

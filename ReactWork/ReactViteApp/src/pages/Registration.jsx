// import React from 'react'
// import { useState } from 'react';


// function Registration(regData) {
//   const[name,setName]=useState();
//   const[email,setEmail]=useState();
//   const[password,setPassword]=useState();

//   function getData(e){
//     e.preventDefault();
//     // alert("Hello"+ name+ email+ password);

//   }
//   return (
//     <div><h2>Registration</h2>
//     <form>
//       <div class="form-group">
//     <label for="exampleInputEmail1">Name:</label>
//     <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>

//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button onClick={getData} type="submit" class="btn btn-primary">Submit</button>
// </form>
// </div>
//   )
// }

// export default Registration

// Registration.jsx
import React, { useState } from "react";

function Registration({ setRegData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getData(e) {
    e.preventDefault();
    setRegData({ name, email, password });
    alert("Registered successfully");
  }
function Registration({ regData }) {
  async function getData(e) {
    const server=await fetch("http://localhost:7878/register", {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    const jsonresponse=await server.json();
  }
}
  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="nameInput"
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="emailInput"
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="passwordInput"
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button onClick={getData} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;

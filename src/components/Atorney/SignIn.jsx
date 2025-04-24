import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
        const response = await fetch("http://localhost:5288/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          console.log("successful", data);
          // You might want to do something like redirect or save token here
        } else {
          setError(data.message || "Login failed.");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong ya 7elw!");
      }
    };

    function login(){
      console.warn(email, password);
      
    }
  return (
    <div>
      <div className="signIn">
        <div className="signCard">
            <div className="text-center">
            <img className="img-fluid py-3" src="/public/Frame.svg" alt="" />
            </div>
          <h2 className="text-center py-2">Welcome back!</h2>
          <p className="text-center black-op">Deliver personalized training powered by AI.</p>

          <form onSubmit={handleSubmit}>
          <label className="d-block" htmlFor="">
            Email
          </label>
          <input 
          type="text" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="e.g. barlex@gmail.com" />

          <label className="d-block" htmlFor="">
            Password
          </label>
          <input 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="********"/>
          <button className="d-block m-auto my-4" onClick={login} >Sign In</button>
          </form>
          {error && <p style={{ color: "green", textAlign: "center" }}>{error}</p>}
        </div>
      </div>
    
    </div>
  );
};

export default SignIn;

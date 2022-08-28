import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./Home"
import "./styles.css";

function SignIn() {
  // React States
  const navigate=useNavigate()
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "pallavi jagtap",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
 navigate("/")
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    // <div><Navbar/></div>
    <div className="app" style={{backgroundImage:'url("https://in.sugarcosmetics.com/Login_bg.svg")',width:"47%",marginLeft:"350px",height:"700px"}}>
      <div className="login-form" >
        <div className="title">Log In</div>
        {isSubmitted ?<div> <Link to="/" style={{color:"black",textDecoration:"none",fontSize:"25px"}}> user logged in successfully!</Link></div> : renderForm}
      </div>
      <h4 style={{fontFamily:"sans-serif",fontWeight:"lighter",fontSize:"18px"}}>Registering for this site allows you to access your order status and history. Just fill in the </h4>
      <h4 style={{marginTop:"-20px",fontFamily:"sans-serif",fontWeight:"lighter",fontSize:"18px"}}>fields below. and we'll get a new account set up for you in no time. We will only ask you</h4>
      <h4 style={{marginTop:"-20px",fontFamily:"sans-serif",fontWeight:"lighter",fontSize:"18px"}}>for information necessary to make the purchase process faster and easier.</h4>
    </div>
  );
}

export default SignIn;

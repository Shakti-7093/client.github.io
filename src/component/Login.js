import React, { useContext, useState }  from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = ()=>{
  // useContext

  const {state, dispatch} = useContext(UserContext);

  let history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch("/router/auth.js", {
      method: "POST",
      headers: {
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email,
          password
      })
    });
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Cradentials");
    }
    else{
      dispatch({type:"USER", payload:true});
      window.alert("LogIn Successfull");
      history('/');
    }
  }

  return (
    <>
      <div id="a">
        <div className="box">
          <form method='POST'>
            <h2>LogIn</h2>
            <div className="input-in-Box">
                <input type="email" name="email" id='email' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <span>Enter Your Email</span>
                <i></i>
            </div>
            <div className="input-in-Box">
              <input type="password" name="password" id='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <span>Enter Your Password</span>
              <i></i>
            </div>
            <input type="submit" name='signin' value="Log In" id='signin' onClick={loginUser}/>
            <div className="links">
              <h4>Not Registered Yet?</h4>
              <NavLink to="/signup">SignUp</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

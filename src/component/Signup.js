import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = ()=>{

    const history = useNavigate();

    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", confpassword:""
    });

    let names, value;
    const handleInputs = (e) => {
        console.log(e);
        names = e.target.name;
        value = e.target.value;
        setUser({...user, [names]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, confpassword } = user;
        const res = await fetch("https://eager-pig-peplum.cyclic.app/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, confpassword
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successfull");
            console.log("Successfull Registration");
            history("/login")
        }
    }

    return (
        <>
            <div id="a">
                <div className="box2">
                    <form method='POST'>
                        <h2>Sign Up</h2>
                        <div className="input-in-Box2">
                            <input type="text" name="name" id='name' autoComplete='off' value={user.name} onChange={handleInputs}/>
                            <span>Enter Your Full Name</span>
                            <i></i>
                        </div>
                        <div className="input-in-Box2">
                            <input type="email" name="email" id='email' autoComplete='off' value={user.email} onChange={handleInputs}/>
                            <span>Enter Your Email</span>
                            <i></i>
                        </div>
                        <div className="input-in-Box2">
                            <input type="tel" name="phone" id='phone' autoComplete='off' value={user.phone} onChange={handleInputs}/>
                            <span>Enter Your Phone Number</span>
                            <i></i>
                        </div>
                        <div className="input-in-Box2">
                            <input type="text" name="work" id='work' autoComplete='off' value={user.work} onChange={handleInputs}/>
                            <span>Enter Your Work</span>
                            <i></i>
                        </div>
                        <div className="input-in-Box2">
                            <input type="password" name="password" id='password' autoComplete='off' value={user.password} onChange={handleInputs}/>
                            <span>Enter Your Password</span>
                            <i></i>
                        </div>
                        <div className="input-in-Box2">
                            <input type="password" name="confpassword" id='confpassword' autoComplete='off' value={user.confpassword} onChange={handleInputs}/>
                            <span>Confirm Your Password</span>
                            <i></i>
                        </div>
                        <input type="submit" value="Register" name='signup' id='signup' onClick={PostData}/>
                        <div className="links">
                            <h4>Having An Account?</h4>
                            <NavLink to="/login">LogIn</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup

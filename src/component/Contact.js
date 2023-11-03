import React, { useEffect, useState } from 'react';

const Contact = ()=>{
    
    const [userData, setUserData] = useState({name: "", phone: "", email: "", message:"" });

    const userContect = async () => {
        try {
          const res = await fetch('/getdata', {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
          });
          const data = await res.json();
          setUserData({...userData, name:data.name, phone:data.phone, email:data.email, message:data.message});
          if(!res.status === 200){
            window.alert("Please Enter Vaild Details");
            const error = new Error(res.error);
            throw error;
          }
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
    userContect();
    }, []);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]:value})
    }

    const contactForm = async (e) => {
        e.preventDefault();
        const {name, phone, email, message} = userData;
        const res = await fetch('/getdata', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, phone, email, message
            })
        });
        const data = await res.json();
        if(!data){
            console.log("Message Not Send");
            alert("Message Not Send");
        }else{
            console.log("Message Send");
            alert("Message Send");
            setUserData({...userData, message: ""})
        }
    }

  return (
    <>
        <div id="c">
            <div className="container">
                <h1>Connect With Us</h1>
                <p>We would love to respond to your queries and help you succeed. <br/> Fell free to get in touch with us</p>
                <div className="container-box">
                    <div className="container-left">
                        <h3>Sent your request</h3>
                        <form method="POST">
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Name</label>
                                    <input type="text" name='name' value={userData.name} onChange={handleInputs} placeholder='User Name'/>
                                </div>
                                <div className="input-group">
                                    <label>Phone</label>
                                    <input type="tel" name='phone' value={userData.phone} onChange={handleInputs} placeholder="+91 412 520 3231"/>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="email" name='email' value={userData.email} onChange={handleInputs} placeholder="example@gmail.com"/>
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea rows="10" cols="30" placeholder=" Message" name='message' value={userData.message} onChange={handleInputs}></textarea>

                            <input type="submit" value="SEND" onClick={contactForm}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;

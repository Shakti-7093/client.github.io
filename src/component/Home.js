import React, { useEffect, useState } from 'react'

const Home = () => {
  const [userData, setUserData] = useState('');
  const [show, setShow] = useState(false);

  const userContect = async () => {
      try {
        const res = await fetch('https://mern-gold.vercel.app/router/auth.js', {
          method: "GET",
          headers: {
              "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        setUserData(data.name);
        setShow(true);
      } catch (error) {
        console.log(error);
      }
  }
  
  useEffect(() => {
  userContect();
  }, []);
  return (
    <>
      <div id="b">
        <div className="contaner">
          <h2 style={{color: 'blueviolet'}}>Welcome</h2>
          <h1 style={{WebkitBorderBefore: 4 + 'px solid black', borderRadius: "-"+2+'%' , background:'none' }}>{userData}</h1><br />
          <h4>{ show ? 'Happy, to see you back':'We Are The MERN Developers'}</h4>
        </div>
      </div>
    </>
  )
}

export default Home;

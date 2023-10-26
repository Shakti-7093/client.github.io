import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Shakti from '../Images/YTLogo.png';
import { useNavigate } from 'react-router-dom';

const About = ()=>{

  const navigation = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data = await res.json();
      setUserData(data);
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigation('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);
  
  return (
    <>
      <div>
        <div className="container emp-profile" style={{backgroundColor: 'lightgray'}}>
          <form method='GET'>
            <div className="row mt-3">
              <div className="col-md-4 mt-2">
                <div className="profile-img">
                  <img src={Shakti} alt="Shakti" style={{width: 230 + 'px'}}/>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="profile-head">
                  <h5>{userData.name}</h5>
                  <h6 style={{color: 'blue'}}>{userData.work}</h6>
                  <p className='profile-rating mt-3 mb-5'>RANKING <span>1/10</span></p>
                  <ul className="nav nav-underline" role='tablist'>
                    <li className="nav-item">
                      <a className="nav-link active" id='home-tab' data-toggle='tab' href="#home" role='tab'>About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id='profile-tab' data-toggle='tab' href="#profile" role='tab'>Timeline</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 mt-5">
                <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <div className="profile-work">
                  <p className='mb-4'>Work Links</p>
                  <a href="https://www.instagram.com/shakti_7755/" target='_shaktiInstagram' style={{textDecoration:'none'}}>Instagram</a><br />
                  <a href="https://www.youtube.com/c/dad@developer" target='_shaktiYouTube' style={{textDecoration:'none'}}>YouTube</a><br />
                  <a href="https://www.linkedin.com/in/shakti7093" target='_shaktiLinkedIn' style={{textDecoration:'none'}}>LinkedIn</a><br />
                  <a href="https://github.com/Shakti-7093" target='_shaktiGitHub' style={{textDecoration:'none'}}>GitHub</a>
                </div>
              </div>
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id='myTabContent'>
                <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>{userData._id}</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>{userData.name}</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>{userData.email}</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>{userData.phone}</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>{userData.work}</p>
                      </div>
                    </div>
                  </div>
                <div className="tab-pane fade" id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>Intermidiate</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>10$/hr</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>5</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>Expert</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p style={{color: 'blue'}}>6 Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default About
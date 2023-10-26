import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

const Logout = () => {

    // promises
    const {state, dispatch} = useContext(UserContext);

    const history = useNavigate();

    useEffect(() => {
        fetch('/logout',{
            method: "GET",
            headers: {
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials: "include"
        }).then((responce)=>{
            dispatch({type:"USER", payload:false})
            history('/login');
            if(responce.status !== 200){
                const err = new Error(responce.err);
                throw err;
            }
        }).catch((error)=>{
            console.log(error);
        });
    })

  return (
    <>
        <h1>LogOut ka page</h1>
    </>
  )
}

export default Logout
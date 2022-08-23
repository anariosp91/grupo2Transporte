import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";
import '../assets/css/profile.css'

export default function LastUser(){
    const {data, isLoading, errorMessage} = useApplyFetch('/api/users');
    let user = null
    
    if(data){
        
        user = data.data.users[data.data.users.length - 1]
    }
    // console.log('user:',user)

    return(
       
        <main className="main-profile">
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {
                user != null ? 
                <div className="container-profile">
                <div className="img-profile-div">
                    <img src={`/img/users/${user.image}`} className="img-profile"/>
                </div>
                <div  className="detail-profile-div"> 
                    <h1>ULTIMO USUARIO REGISTRADO</h1> 
                    <h2> {user.name}  {user.lastName} </h2>
                    <p> {user.email} </p>
                    <p> {user.phone} <i className="fa-solid fa-phone"></i></p>
                </div>
            </div>
                : <div className="alert alert-warning text-center">{errorMessage}</div>}
            
           
        </main>
    )
}






    
	
    
import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";
import '../assets/css/card.css'

export default function LastUser(){
    const {data, isLoading, errorMessage} = useApplyFetch('/api/users');
    let user = null
    
    if(data){
        
        user = data.data.users[data.data.users.length - 1]
    }
    

    return(
       
        <main className="main-card">
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {
                user != null ? 
                <div className="container-card">
                <div className="img-card-div">
                    <img src={`/img/users/${user.image}`} className="img-card"/>
                </div>
                <div  className="detail-card-div"> 
                    <h2>ULTIMO USUARIO REGISTRADO</h2> 
                    <h4> {user.name}  {user.lastName} </h4>
                    <p> {user.email} </p>
                    <p> {user.phone} <i className="fa-solid fa-phone"></i></p>
                </div>
            </div>
                : <div className="alert alert-warning text-center">{errorMessage}</div>}
            
           
        </main>
    )
}






    
	
    
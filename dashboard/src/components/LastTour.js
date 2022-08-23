import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";
import '../assets/css/profile.css'

export default function LastTour(){
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/tours');
    let tour = null
    
    if(data){
        
        tour = data.data.tours[data.data.tours.length - 1]
    }
    // console.log('user:',user)

    return(
       
        <main className="main-profile">
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {
                tour != null ? 
                <div className="container-profile">
                <div className="img-profile-div">
                    <img src={`/img/products/${tour.image}`} className="img-profile"/>
                </div>
                <div  className="detail-profile-div">  
                    <h2> {tour.title} </h2>
                    <p> {tour.description} </p>
                </div>
            </div>
                : <div className="alert alert-warning text-center">{errorMessage}</div>}
            
           
        </main>
    )
}
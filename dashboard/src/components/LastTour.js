import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";
import '../assets/css/card.css'

export default function LastTour(){
    const {data, isLoading, errorMessage} = useApplyFetch('/api/tours');
    let tour = null
    
    if(data){
        
        tour = data.data.tours[data.data.tours.length - 1]
    }
   

    return(
       
        <main className="main-card">
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {
                tour != null ? 
                <div className="container-card">
                <div className="img-card-div">
                    <img src={`/img/products/${tour.image}`} className="img-card"/>
                </div>
                <div  className="detail-card-div"> 
                    <h2>ULTIMO TOUR CREADO</h2> 
                    <h4> {tour.title} </h4>
                    <p> {tour.description} </p>
                </div>
            </div>
                : <div className="alert alert-warning text-center">{errorMessage}</div>}
            
           
        </main>
    )
}
import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";
import '../assets/css/card.css'

export default function BestSellingTour(){
    const {data, isLoading, errorMessage} = useApplyFetch('/api/tours/sale');
    let tour = null
    
    if(data){
        tour = data.data
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
                    <h2>TOUR MAS VENDIDO</h2>
                    <h4> {tour.title} </h4>
                    <p> {tour.description} </p>
                </div>
            </div>
                : <div className="alert alert-warning text-center">{errorMessage}</div>
            }
            
           
        </main>
    )
}
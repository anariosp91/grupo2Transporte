import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";

export default function TotalTours() {
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/tours');
    let total = null
    
    if(data){
        
        total = data.meta.pagination.totalRegister ;
    }

    return(
        <div className="col-md-4 mb-4 container-total">
            {total != null ?
            <div className="card-body">
                <div className="total-detail">
                    <h2>Total Tours: {total}</h2>
                </div>
                <div className="container-icon">
                    <i className="fa-solid fa-truck"></i>
                </div>
            </div>
          :  <div className="alert alert-warning text-center">{errorMessage}</div> }
        </div>
    )
}
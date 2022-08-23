import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";

export default function TotalUsers() {
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/users');
    let total = null
    
    if(data){
        
        total = data.meta.pagination.totalRegister ;
    }

    return(
        <div className="col-md-4 mb-4 container-total">
            {total != null ? 
                <div className="card-body">
                <div className="total-detail">
                    <h2>Total Users: {total}</h2>
                </div>
                <div className="container-icon">
                    <i className="fa-solid fa-user"></i>
                </div>
            </div>
           : <div className="alert alert-warning text-center">{errorMessage}</div> }
        </div>
    )
}
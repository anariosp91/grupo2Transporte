import React from "react"
import useApplyFetch from "../hooks/useApplyFetch";

export default function TotalUsers() {
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/users');
    let total = null
    
    if(data){
        
        total = data.meta.pagination.totalRegister ;
    }

    return(
        <div className="col-md-4 mb-4">
            {total != null ? 
            <div className={`card border-left-blue shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-gray text-uppercase mb-1`}>Total Users</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{total}</div>
                        </div>
                        <div className="col-auto">
                        <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
           : <div className="alert alert-warning text-center">{errorMessage}</div> }
        </div>
    )
}
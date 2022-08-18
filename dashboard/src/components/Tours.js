import React, { useEffect } from "react"
import '../assets/css/list.css'
import useApplyFetch from "../hooks/useApplyFetch";


export default function Tours ({columns}){
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/tours', 'tours');
           
    
    return(
        <div>
            <table className="table">
            
                <tr >
                    {columns.map((column, i) => 
                        <th key={i + column}>
                            {column}
                        </th>
                    )}
                </tr>
                
                    {data && data.map((tour, i) => 
                        <tr key={i + tour.title}>
                            <td>
                                {tour.title}
                            </td>
                    
                            <td>
                                {tour.description}
                            </td>
                    
                            <td>
                                {tour.detail}
                            </td>
                    
                            <td>
                                {tour.image}
                            </td>
                        </tr>
                )}
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {error && <div className="alert alert-warning text-center">{errorMessage}</div>}
            </table>
        </div>
    )   
}



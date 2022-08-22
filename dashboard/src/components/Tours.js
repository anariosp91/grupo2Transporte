import React from "react"
import '../assets/css/list.css'
import useApplyFetch from "../hooks/useApplyFetch";


export default function Tours ({columns}){
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/tours');
          
    
    return(
        <div className="container-table">
            <h2>Listado de Tours</h2>
            <table className="table">
                <thead>
                <tr >
                    {columns.map((column, i) => 
                        <th key={i + column}>
                            {column}
                        </th>
                    )}
                </tr>
                </thead>
                
                <tbody>
                {data && data.data.tours.map((tour, i) => 
                        <tr key={i + tour.title}>
                            <td  className="table-td">
                                {tour.title}
                            </td>
                    
                            <td className="table-td">
                                {tour.description}
                            </td>
                    
                            <td className="table-td">
                                {tour.detail}
                            </td>
                    
                            <td className="table-td">
                                {tour.image}
                            </td>
                        </tr>
                )}
                </tbody>
            </table>
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {error && <div className="alert alert-warning text-center">{errorMessage}</div>}
        </div>
    )   
}



import React from "react"
import '../assets/css/list.css'
import useApplyFetch from "../hooks/useApplyFetch";


export default function Users ({columns}){
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/users');
        
    
    return(
        <div className="container-table">
            <h2> Listado de Usuarios </h2>
            <table className="table">
            
                <tr >
                    {columns.map((column, i) => 
                        <th key={i + column}>
                            {column}
                        </th>
                    )}
                </tr>
                
                    {data && data.data.users.map((user, i) => 
                        <tr key={i + user.id}>
                            <td className="table-td">
                                {user.name}
                            </td>
                    
                            <td className="table-td">
                                {user.lastName}
                            </td>
                    
                            <td className="table-td"> 
                                {user.email}
                            </td>
                    
                            <td className="table-td">
                                <a href={user.detail}>{user.detail}</a>
                                
                            </td>
                            <td className="table-td">
                                {user.image}
                            </td>
                        </tr>
                )}
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {error && <div className="alert alert-warning text-center">{errorMessage}</div>}
            </table>
        </div>
    )   
}
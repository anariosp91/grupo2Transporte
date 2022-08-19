import React from "react"
import '../assets/css/list.css'
import useApplyFetch from "../hooks/useApplyFetch";


export default function Users ({columns}){
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/users');
        
    
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
                
                    {data && data.data.users.map((user, i) => 
                        <tr key={i + user.title}>
                            <td>
                                {user.name}
                            </td>
                    
                            <td>
                                {user.lastName}
                            </td>
                    
                            <td>
                                {user.email}
                            </td>
                    
                            <td>
                                <a href={user.detail}>{user.detail}</a>
                                
                            </td>
                            <td>
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
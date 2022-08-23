import React from "react"
import '../assets/css/list.css'
import useApplyFetch from "../hooks/useApplyFetch";

let columns = ['Nombre', 'Apellido', 'Email', 'Detalle', 'Imagen']


export default function Users (){
    const {data, isLoading, error, errorMessage} = useApplyFetch('/api/users');
        
    
    return(
        <div className="container-table">
            <h2> Listado de Usuarios </h2>
            <table className="table">
                <thead>
                    <tr>
                        <h2>Listado de Usuarios</h2>
                    </tr>
                    <tr >
                        {columns.map((column, i) => 
                            <th key={i + column}>
                                {column}
                            </th>
                        )}
                    </tr>
                </thead>
                
                <tbody>
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
                </tbody>    
            </table>
            {isLoading && <div className="alert alert-info text-center">Cargando...</div>}
            {error && <div className="alert alert-warning text-center">{errorMessage}</div>}
        </div>
    )   
}
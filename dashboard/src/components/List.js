import React, { useEffect, useState } from "react"
import Field from './Field'
import '../assets/css/list.css'
import useApplyFetch from "../hooks/useApplyFetch";


function List({urlApi, objectApi, columns, children}) {

    
    

    const {data, fetchData, isLoading, error, errorMessage} = useApplyFetch(urlApi, objectApi);

    useEffect(() => {
		fetchData()
	} , [])
        
        return(
            <div>
                <table className="table"><thead>
                <tr>{
                       columns.map((column) => 
                       <th>
                        {column}
                       </th>
                       ) 
                    }
                </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>

        )
}



export default List
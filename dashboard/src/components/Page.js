import List from "./List";


export default function Page (){
    return(
        <List 
        // urlApi='http://localhost:8000/api/tours' 
        // objectApi='tours' 
        columns={['Titulo', 'Descripcion']}
        >
            <Tours />
        </List> 
            
        
    )
    
}
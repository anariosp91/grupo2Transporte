import Users from "../components/Users";

export default function UsersList() {
    return( 
            <Users columns={['Nombre', 'Apellido', 'Email', 'Detalle', 'Imagen']}/>
    )
}
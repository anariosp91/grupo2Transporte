import Tours from "../components/Tours";

export default function ToursList() {
    return( 
            <Tours columns={['Titulo', 'Descripcion', 'Detalle', 'Imagen']} />
    )
}
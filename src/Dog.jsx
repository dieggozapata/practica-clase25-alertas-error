/* Se importa el custom hook y los status */
import { statusList, useFetch } from "./UseFetch"
import { toast } from 'react-toastify'
function Dog({ breed }) {
    /* Utilizamos el custom Hook para acceder a la API con la siguiente URL(endpoint) */
    const { data, status } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`
    );

    /* Según el status de conexión con la API, se muestra la información al usuario */
    if (status === statusList.LOADING) {
        return <p>Cargando...</p>;
    }
    if (status === statusList.SUCCESS) {
        //SUGERENCIA: se debería ejecutar algo aquí...
        toast('⭐ Se ha cargado la Información desde el Api!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
    }
    if (status === statusList.ERROR) {        
        return <p>Error al buscar una imagen para la raza: {breed}</p>;
    }
    
    return (
        <div>
            <h2>Has buscado por raza: {breed}</h2>
            <img src={data.message} />
        </div>
    );
}

export default Dog;
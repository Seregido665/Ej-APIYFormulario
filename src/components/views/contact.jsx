import { useEffect, useState } from "react";
import Usuario from '../cardProfile/cardProfile'
import Navbar from '../navbar/navbar'
import "../../styles/contact.css"

const Contact = () => {
    const [usuarios, setUsuarios] = useState([]);

    // --- CARGAR USUARIOS GUARDADOS ---
    useEffect(() => {
        const cargarUsuarios = () => {      // DECLARAR FUNCION
            const datos = localStorage.getItem("usuarios"); 
                    // CONSULTA EN localStorage SI ESTA LISTA DE DATOS ESTA.
            if (!datos) {
                setUsuarios([]);
                return;
            }
            setUsuarios(JSON.parse(datos));     
                    // Y LOS AÑADE AL ARRAY setUsuarios
                    // Como DATOS es un ARRAY, con esta linea seria suficiente.
                    // Si fuese un OBJETO: ---> Buscar como se hace  <---
        };
        cargarUsuarios();     
    }, []);
    
    // --- PARA ELIMINAR UN USUARIO ---
    const eliminarUsuario = (correo) => {
        const usuariosActualizados = usuarios.filter(user => user.correo !== correo);
                                                                // Porque correo?????????????
        setUsuarios(usuariosActualizados);

        localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    };

    return (
        <div className="contact-page">
            <div className="botones">
                <h2 className="titulo pb-2">Contactos.</h2>
            </div>

            <Navbar type="navbar botones" />

            <div className="users-grid">
                {usuarios.length === 0 ? (
                    <p className="no-users-message">
                        No hay usuarios registrados.
                    </p>
                ) : (
                    usuarios.map((user, i) => (
                        <Usuario
                            key={i}
                            img={user.imagen}
                            name={user.nombre}
                            mail={user.correo}
                            number={user.telefono}
                            action={() => eliminarUsuario(user.correo)}  // Pasamos la
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Contact;
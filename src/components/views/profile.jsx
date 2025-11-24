import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from '../navbar/navbar'
import Input from "../input/input"
import BotonSubmenu from "../buttons/butsSubMenu"
import "../../styles/profile.css"

const Profile = () => {
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirPassword, setConfPassword] = useState("");
    const [number, setNumber] = useState("");
    
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];  // Porque [0] ?????????????????
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result); // Guarda la imagen como base64 para mostrarla.
            };
            reader.readAsDataURL(file); // Esto asegura que la imagen se lea correctamente.
        } 
    };

    const handleForm = () => {
        if (!name || !number || !email || !password || password !== confirPassword) {
            alert("Completa los campos correctamente, ¡por favor!");
            return;
        }
        const nuevoUsuario = {
            imagen: photo || "",  // Porque || "" ??????????????
            nombre: name,
            correo: email,
            telefono: number
        };
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios") || "[]");
                // BUSCA SI EN localStorage HAY ELEMENTOS LLAMADOS ASI. 
                // CADA VEZ QUE CAMBIE ESE NOMBRE A "usuarios" o "nuevosUsuarios" SE VERÁN LOS QUE HICE DE PRUEBA.
        
        usuariosGuardados.push(nuevoUsuario);  // AÑADE UN NUEVO USUSARIO A LA LISTA. 
        localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));  // ACTUALIZA LA LISTA.

        navigate("/contact");
    };

    return (
        <div>
            <div className="botones">
                <h2 className="titulo pb-2">Nuevo usuario.</h2>
            </div>
            <Navbar type="navbar botones"/>

            <div className="profile-container">
                <h4 className="profile-title">Rellena el siguiente formulario.</h4>
                <form 
                    className="profile-form"
                    onSubmit={(e) => {
                        e.preventDefault();  // SOLO EN FORMULARIOS   
                        handleForm();               
                    }}
                >
                <div>
                    <div className="profile-preview">
                        {photo ? (
                            <img src={photo} alt="Foto de perfil" className="profile-photo"/>
                        ) : (
                            <div>Sin foto</div>
                        )}
                        </div>

                        <label className="upload-button">
                            Elegir foto de perfil
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                id="photo-input"
                                className="hidden-file-input"
                            />
                        </label>
                    </div>

                   <Input
                        type="profile-input"
                        value={name}
                        text="Nombre"
                        action={(e) => setName(e.target.value)} />
                    <Input
                        type="profile-input"
                        value={email}
                        text="Correo"
                        action={(e) => setEmail(e.target.value)} />
                    <Input
                        type="profile-input"
                        value={number}
                        text="Teléfono"
                        action={(e) => setNumber(e.target.value)} />
                    <Input
                        type="profile-input"
                        value={password}
                        text="Contraseña"
                        action={(e) => setPassword(e.target.value)} />
                    <Input
                        type="profile-input"
                        value={confirPassword}
                        text="Confirmar Contraseña"
                        action={(e) => setConfPassword(e.target.value)} />
                    
                    
                    <BotonSubmenu 
                        type="submit btn-primary"// ← AÑADE ESTO
                    >
                        Subir Datos.
                    </BotonSubmenu>
                </form>
            </div>
        </div>
    )
}

export default Profile;
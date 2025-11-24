import "../../styles/contact.css"

const Usuario = ({ mail, name, number, img, action }) => {
    return (
        <div className="user-card">
            <div>
                {img ? (
                    <img // --> FOTO SELECCIONADA.
                        src={img} 
                        className="user-card-img"
                    />
                ) : (
                    <img // --> FOTO POR DEFECTO.
                        src={img ? img : "../../public/defaultPhoto.png"} 
                        className="user-card-img"
                    />
                )}
                <h3> {name}</h3>
                <p><strong>Email:</strong> {mail}</p>
                <p><strong>Teléfono:</strong> {number}</p>
            </div>
            <div>
            <button 
                    className="buttonDel"
                    onClick={action}  // Para la función de eliminar
                    title="Eliminar usuario"
                >
                    X
            </button>
            </div>
        </div>
    )
}
export default Usuario;
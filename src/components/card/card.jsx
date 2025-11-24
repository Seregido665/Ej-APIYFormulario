const Carta = ({ type, text, action, img }) => {
    return (
        <div 
            className={type} 
            onClick={action}>
                <img src={img} alt={text}/>
                <p className="nombre">{text}</p>
        </div>
    )
}
export default Carta;
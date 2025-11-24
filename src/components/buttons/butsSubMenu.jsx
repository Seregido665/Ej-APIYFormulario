const BotonSubmenu = ({ type, children, action }) => {
    return (
        <button className={type} onClick={() => action()}>
            {children}
        </button>
    )
}
export default BotonSubmenu;
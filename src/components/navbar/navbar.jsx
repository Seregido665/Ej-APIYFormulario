import { useNavigate } from "react-router-dom"
import BotonSubmenu from '../buttons/butsSubMenu'
import "./navbar.css"

const Navbar = ({ type, botones }) => {
    const navigate = useNavigate();
    return (
        <div  className={type}>
            <nav className={botones}>
                <BotonSubmenu
                    type="subMenu"
                    action={() => navigate("/main")}
                >
                    Pokemons.
                </BotonSubmenu>
                <BotonSubmenu
                    type="subMenu"
                    action={() => navigate("/profile")}
                >
                    Crear Perfil
                </BotonSubmenu>
                <BotonSubmenu
                    type="subMenu"
                    action={() => navigate("/contact")}
                >
                    Contacto.
                </BotonSubmenu>
                <BotonSubmenu
                    type="subMenu"
                    action={() => navigate("/aboutMe")}
                >
                    About Me.
                </BotonSubmenu>
            </nav>
        </div>
    )
}

export default Navbar;
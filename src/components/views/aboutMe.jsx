//import { useNavigate } from "react-router-dom"
import BotonSubmenu from '../buttons/butsSubMenu'
import Navbar from '../navbar/navbar'

const About = () => {
    //const navigate = useNavigate();
    return (
        <div>
            <div className="botones">
                <h2 className="titulo pb-2">Sobre mi.</h2>
            </div>
            <Navbar type="navbar botones" />
        </div>
    )
}

export default About;
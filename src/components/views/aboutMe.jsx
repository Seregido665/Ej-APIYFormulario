//import { useNavigate } from "react-router-dom"
import BotonSubmenu from '../buttons/butsSubMenu'
import Navbar from '../navbar/navbar'
import '../../styles/aboutMe.css'

const About = () => {
    //const navigate = useNavigate();
    return (
        <div className="about-container">
            <div className="menu">
                <Navbar 
                    type="navbar botones"
                    text="Sobre mi"
                 />
            
            
            <div className="about-content">
                <div className="about-text">
                    <h3>No se como pasé de hacer esto:</h3>
                </div>
                <div className="images-container">
                    <div className="image-wrapper">
                        <img src="/imgPort/port1.jpg" alt="Proyecto 1" className="about-image" />
                    </div>
                    <div className="image-wrapper">
                        <img src="/imgPort/port2.jpg" alt="Proyecto 2" className="about-image" />
                    </div>
                    <div className="image-wrapper">
                        <img src="/imgPort/port3.jpg" alt="Proyecto 3" className="about-image" />
                    </div>
                    <div className="image-wrapper">
                        <img src="/imgPort/port4.jpg" alt="Proyecto 3" className="about-image" />
                    </div>
                </div>
                <div className="link-container">
                    <a href="https://www.artstation.com/sergioluque" target="_blank" className="link">
                        Portfolio de ARTE
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;
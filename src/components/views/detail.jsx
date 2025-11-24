import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../navbar/navbar'
import Carta from '../card/card';
import "../../styles/detail.css"

const Details = () => {
    const { id } = useParams(); // Captura el id desde la URL
    const [pokemon, setPokemon] = useState(null);

     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err));
    }, [id]);

    if (!pokemon) return <p>Cargando...</p>;    // PARA HACERLO MAS VISUAL

    return (
        <div>
            <div className="botones">
                <h2 className="titulo pb-2">Detalles</h2>
            </div>
            <Navbar type="navbar botones"/>
            <div className="card">
                <Carta 
                    type="detail" //CSS
                    text={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    img={pokemon.sprites.front_default}
                />
            </div>
            <div className="pokemon-info">
                <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
                <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
                <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
                <p><strong>HP:</strong> {pokemon.stats[0].base_stat}</p>
                <p><strong>Ataque:</strong> {pokemon.stats[1].base_stat}</p>
                <p><strong>Defensa:</strong> {pokemon.stats[2].base_stat}</p>
            </div>
        </div>
    )
}

export default Details;
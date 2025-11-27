import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPokemonById } from '../../pokeApi/pokeAxios.js';
import Navbar from '../navbar/navbar'
import Carta from '../card/card';
import "../../styles/detail.css"

const Details = () => {
    const { id } = useParams(); // COGE EL "parametro dinamico" :id DESDE --> App.jsx
    const [pokemon, setPokemon] = useState(null);

    // --- CONSULTA A LA API EN pokeAxios.js ---
     useEffect(() => {
        getPokemonById(id)  
            .then(response => setPokemon(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!pokemon) return <p>Cargando...</p>;  


    return (
        <div className="details-container">
            <div className="menuTop">
                <Navbar 
                    type="navbar botones"
                    text="Detalles"
                />
                
                <div className="pokemon-detail-card mt-5">
                    <div>
                        <div>
                            <h4>#{pokemon.id.toString().padStart(3, '0')}</h4>
                            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                        </div>
                        <div className="pokemon-image-container">
                            <div className="pokemon-image-wrapper">
                                <img 
                                    src={pokemon.sprites.front_default} 
                                    className="pokemon-image"
                                />
                            </div>
                        </div>
                        <div className="pokemon-types">
                            {pokemon.types.map((type) => (
                                <h1 className={`type-badge type-${type.type.name}`}>
                                    {type.type.name.toUpperCase()}
                                </h1>
                            ))}
                        </div>
                    </div>

                    <div className="stats-column">
                        <div className="stat-item">
                            <div className="stat-label">
                                HP
                            </div>
                            <div>
                                <span className="stat-value">{pokemon.stats[0].base_stat}</span>
                                <div style={{ width: `${(pokemon.stats[0].base_stat / 255) * 100}%` }}></div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">
                                ATK
                            </div>
                            <div>
                                <span className="stat-value">{pokemon.stats[1].base_stat}</span>
                                <div style={{ width: `${(pokemon.stats[1].base_stat / 255) * 100}%` }}></div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">
                                DEF
                            </div>
                            <div>
                                <span className="stat-value">{pokemon.stats[2].base_stat}</span>
                                <div style={{ width: `${(pokemon.stats[2].base_stat / 255) * 100}%` }}></div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">
                                Altura
                            </div>
                            <div>
                                <span className="stat-value">{pokemon.height / 10} m</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label">
                                Peso
                            </div>
                            <div>
                                <span className="stat-value">{pokemon.weight / 10} kg</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
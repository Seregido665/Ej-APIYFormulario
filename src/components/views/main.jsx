import { useNavigate } from "react-router-dom"
import { useEffect, useState, useMemo } from "react";
//import axios from "axios";
import Navbar from '../navbar/navbar'
import Carta from '../card/card'
import AllDropdowns from '../buttons/allFilters'
import { getPokemons } from '../../pokeApi/pokeAxios.js';
import "../../styles/main.css"
import '../../styles/filters.css'

const MainMenu = () => {
    const navigate = useNavigate();
    const [allPokemons, setAllPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        generation: "all",
        type: "all",
        species: "all",
        weight: "all",
        height: "all",
    });

    // Cargar todos los Pokémon con sus datos completos (una sola vez)
    useEffect(() => {
        const fetchAllDetails = async () => {
            try {
                const response = await getPokemons(); // Devuelve los 493 Pokémon (nombre + url)
                const promises = response.map(pokemon => 
                    fetch(pokemon.url).then(res => res.json())
                );
                const details = await Promise.all(promises);
                setAllPokemons(details);
                setLoading(false);
            } catch (err) {
                console.error("Error cargando Pokémon:", err);
                setLoading(false);
            }
        };

        fetchAllDetails();
    }, []);
    

   // Actualizar filtros
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Lógica de filtrado con useMemo para que sea rápido
  const filteredPokemons = useMemo(() => {
    return allPokemons.filter(pokemon => {

    // ---GENERACION ---
    if (filters.generation !== "all") {
    const genRanges = {
        "gen1": [1, 151],
        "gen2": [152, 251],
        "gen3": [252, 386],
        "gen4": [387, 493],
        };
        const range = genRanges[filters.generation];
        if (range) {
            const [min, max] = range;
            if (pokemon.id < min || pokemon.id > max) return false;
        }
    }

    // --- TIPO ---
    if (filters.type !== "all") {
      const selectedType = filters.type;
      const pokemonTypes = pokemon.types.map(pokemon => pokemon.type.name);
      if (!pokemonTypes.includes(selectedType)) return false;
    }

    // --- PESO ---
    if (filters.weight !== "all") {
      const weightKg = pokemon.weight / 10; // PokeAPI DA PESO EN hectogramos, /10 LO PASAMOS A kilogramos
      const weightRanges = {
        "weight1": [0, 5],
        "weight2": [5, 20],
        "weight3": [20, 50],
        "weight4": [50, 100],
        "weight5": [100, 200],
        "weight6": [200, 400],
        "weight7": [400, 600],
        "weight8": [600, Infinity]
      };
      const [min, max] = weightRanges[filters.weight];
      if (weightKg < min || weightKg >= max) return false;
    }

    // --- ALTURA ---
    if (filters.height !== "all") {
      const heightM = pokemon.height / 10; // PokeAPI DA LA ALTURA EN decimetros. /10 LO PASAMOS A metros.
      const heightRanges = {
        "height1": [0, 0.5],
        "height2": [0.5, 1],
        "height3": [1, 2],
        "height4": [2, 5],
        "height5": [5, 8],
        "height6": [8, 12],
        "height7": [12, Infinity]
      };
      const [min, max] = heightRanges[filters.height];
      if (heightM < min || heightM >= max) return false;
    }

    // Si pasa todos los filtros → se muestra
    return true;
  });
}, [allPokemons, filters]);

  if (loading) return <div>Cargando Pokémon...</div>;
    return (
        <div>
            <div className="titulo">
                <h2>Uso de API y Formulario.</h2>
            </div>

            <Navbar type="navbar botones"/>
            <AllDropdowns onFilterChange={handleFilterChange}/>

            <div className="grid">
                {filteredPokemons.map((pokemon) => (
                    <div className="cards" key={pokemon.id}>
                        <Carta 
                            type="main"
                            action={() => navigate(`/detail/${pokemon.id}`)}
                            text={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        />
                    </div>
                ))}
            </div>
            {filteredPokemons.length === 0 && <p>No se encontraron Pokémon con esos filtros.</p>}
        </div>
    )
}

export default MainMenu;
import '../Header/Header.css';
import shuffle from '../../assets/shuffle.svg';

import { useState} from 'react';

function Header(){

    const [movie,setMovie] = useState({name: '', overview: '', poster: ''})
    
    function handleClick(){        
        fetch(`https://api.themoviedb.org/3/movie/${getRandom()}?api_key=bafd31f5246bf6e1eb6bc88aa18a6f46`)
        .then(response => response.json())
        .then(data => {
            setMovie({
                name: data.title,
                overview: data.overview,
                poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`
            })
        })
        console.log(movie)
        
    }
    
    let random;
    function getRandom(){
        random = Math.floor(Math.random() * (900 - 1) + 1);
        return random;
    }
    
    return(
        <>
            <div className="shuffle">
                <img src={shuffle} alt="shuffle-icon" />
                <h1>Não sabe o que assistir?</h1>
            </div>
            
            <div className="div-button">
                <button className="encontrar-filme" 
                onClick={() => handleClick()}
                >
                    <img src={shuffle} />Encontrar filme
                </button>
                <div className="movie-container">
                    <img src={movie.poster} alt="movie poster" />
                    <div className='movie'>
                        <h1>{movie.name}</h1>
                        <p>{movie.overview}</p>
                    </div>
                </div>
                <div className='descricao'>
                    <h3>Clique em "Encontrar filme" que traremos informações de algum 
                        filme para você assistir hoje.
                    </h3>
                </div>    
            </div>
        </>
    )
}
export default Header;
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import Carte from './Carte';

const MovieCard = ( {film} ) => {
    { /*const [show, setShow] = useState(false);*/}
    return (
        <Link to={'/movie/details'}  state={film}>
        <div className='card'>
            <h1>{film.name}</h1>
            <img src={film.posterurl}/>
           <h3> {film.description} </h3>
           <ReactStars
    value={film.rating}
    size={24}
    activeColor="#ffd700"
  />
               
              { /*{show ? <Carte film ={film}/> : null}*/}

             </div>
             </Link>



        )}



        
    


export default MovieCard;

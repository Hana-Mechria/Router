import React from 'react';
import { useLocation } from 'react-router-dom';
const Carte = () => {
    const film=useLocation(). state
    return (
        <div className='carte'>
          
           <iframe src={film.trailer}></iframe>
        </div>
    );
}

export default Carte;

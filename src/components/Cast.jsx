import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastApi } from 'Api/CastApi';

const Cast = () => {
    const { id } = useParams();
    const [movieCast, setMovieCast] = useState(null);

    return (
        <main>
            {movieCast && movieCast.cast ? (
            <ul>
            {movieCast.cast.map(({name, character, id, profile_path}) => (
                <li key={id}>
                    <h3>{name}</h3>
                    <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt={name} />
                    <p>character: {character}</p>
                </li>
            ))}
            </ul>
            ) : (
            <p>Loading...</p>
            )}
            <CastApi movieID={id} setMovieCast={setMovieCast} />
        </main>
    )
}

export default Cast

            
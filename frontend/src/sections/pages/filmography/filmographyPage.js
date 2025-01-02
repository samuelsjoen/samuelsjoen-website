import React, { useEffect, useState } from 'react';

function FilmographyPage() {
    const [films, setFilms] = useState([]);

    // Fetch films from the backend API
    useEffect(() => {
        fetch('/api/films')
            .then(response => response.json())
            .then(data => setFilms(data))
            .catch(error => console.error('Error fetching films:', error));
    }, []);

    return (
        <div className="filmographyPage">
            {films.map((film) => (
                <Film
                    key={film.id}  // Ensure each film has a unique key
                    title={film.title}
                    description={film.description}
                    youtube={film.youtube}
                    letterboxd={film.letterboxd}
                    poster={film.poster}
                />
            ))}
        </div>
    );
}

function Film({ title, description, youtube, letterboxd, poster }) {
    return (
        <div className="film">
            <img src={`/images/films/${poster}`} alt={title} />
            <div className="filmText">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <div className="filmNavButtons">
                    <a href={youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href={letterboxd} target="_blank" rel="noopener noreferrer">Letterboxd</a>
                </div>
            </div>
        </div>
    );
}

export default FilmographyPage;

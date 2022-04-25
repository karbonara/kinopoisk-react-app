import axios from 'axios';
import { API_KEY } from '../../../utils/utils';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FilmPage() {
    const { id } = useParams();
    const [film, setFilm] = useState([]);
    const API_FILM = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`;
    useEffect(() => {
        axios.get(API_FILM, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(({ data }) => setFilm(data))
    }, [])

    return (
        <h1>{film.nameRu}</h1>
    );
}

export default FilmPage;
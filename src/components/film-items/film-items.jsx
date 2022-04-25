import axios from 'axios';
import { API_KEY, API_URL_POPULAR } from '../../utils/utils';
import { useState, useEffect } from 'react';
import { Title, FilmsWrapper, FilmImg, FilmItem } from './film-items-styled';
import FilmRating from '../film-rating/film-rating';
import { Link } from 'react-router-dom';


function FilmItems() {
    const [dataFilm, setDataFilm] = useState([]);

    useEffect(() => {
        axios.get(API_URL_POPULAR, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(({ data }) => setDataFilm(data.films))
    }, [])


    return (
        <FilmsWrapper>
            {dataFilm.map((item) => (
                <FilmItem key={item.filmId}>
                    <FilmImg src={item.posterUrl} alt={item.nameRu}></FilmImg>
                    <Link style={{ textDecoration: 'none' }} to={`/film/${item.filmId}`}><Title>{item.nameRu}</Title></Link>
                    <FilmRating rating={item.rating} />
                </FilmItem>
            ))}
        </FilmsWrapper>
    );
}

export default FilmItems;

'use client';
import { movieDetails } from '@/interfaces/details_movie';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import style from '../style/components/slideMovie.module.css';
interface propsMovieDetails{
    movieId: number
}

export function MovieDetails({movieId}: propsMovieDetails){
    const [movie, setMovie] = useState<movieDetails>();
    const handleGetMovieDetails = useCallback(async () =>{
        const response = await fetch(`${process.env.API_URL}/${movieId}?api_key=${process.env.TOKEN}`);
        const movieDetails = await response.json() as movieDetails;

        setMovie(movieDetails);
    }, [movieId]);

    useEffect(()=>{handleGetMovieDetails()}, [handleGetMovieDetails]);
    return(
            <>
                <div className={style.movieConteinerDetails}>
                    <button className={style.btnClose}></button>
                    {movie && <>
                        <div className={style.movieDetails}>
                            <h2>{movie.title}</h2>
                            <span className={style.matchDetails}>{Math.ceil(movie.vote_average * 10)}% Match</span>
                            <span> {movie.release_date}</span>
                            <span> {movie.popularity}</span>
                            <ul className={style.generos}>
                                {movie.genres.map(genere => <li>{genere.name}</li>)}
                            </ul>
                            <p>{movie.overview}</p>
                            <div className="actions">
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                        <Image className={style.imgDatails} alt={`Thumbnail do filme ${movie.title}`} src={process.env.IMG_URL + movie.backdrop_path} fill sizes="100%"/>
                    </>
                    }
                </div>
            </>
    );
}
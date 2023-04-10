'use client'

import { responseTopRated } from "@/interfaces/top_rated_interface";
import { useRef, useState } from "react";
import style from '../style/components/slideMovie.module.css';
import { MovieCard } from "./movieCard";
import Loading from "../app/loading";
import { movie } from "@/interfaces/movie_interface";
import { MovieDetails } from "./movieDetails";

enum Direction {
    right = 1,
    left = -1
};

const handleMoveSlide = (slides: HTMLDivElement, direction: Direction = Direction.right)=>{
    const slide = slides.firstChild as HTMLDivElement;
    const slideWidth = slide.getBoundingClientRect().width;
    const slideByConteiner = parseInt(getComputedStyle(slides).getPropertyValue('--p'));
    
    slides.scrollBy(direction * slideWidth * slideByConteiner, 0)
}

export function SlideMovie({data}: {data: responseTopRated | null}){
    const [movieFocus, setMovieFocus] = useState<movie>();
    const slides = useRef<HTMLDivElement>(null);
    
    return (
        <>
        { data?.results ? 
            <>
                <div className={style.conteinerSlide}>
                    <button 
                        className={style.btn_prev} 
                        onClick={()=>handleMoveSlide(slides.current!, Direction.left)}>
                    </button>
                    
                    <button 
                        className={style.btn_next} 
                        onClick={()=>handleMoveSlide(slides.current! , Direction.right)}>
                    </button>

                    <div className={style.slide} ref={slides}>
                        {data?.results.map( movie =>{
                            return ( 
                                <MovieCard 
                                    movie={movie} 
                                    key={movie.id} 
                                    setMovieFocus={setMovieFocus!} 
                                    isFocus={movieFocus?.id == movie.id} /> 
                            )
                        })}
                    </div>
                </div>
                { movieFocus && 
                    <MovieDetails setMovieFocus={setMovieFocus} movieId={movieFocus.id}/>
                }
            </>: <Loading/>}
        </>
    )
}
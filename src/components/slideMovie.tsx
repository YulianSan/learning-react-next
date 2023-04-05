'use client'
import { responseTopRated } from "@/interfaces/top_rated_interface";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import style from '../style/components/slideMovie.module.css';
import { MovieCard } from "./movieCard";
import Loading from "../app/loading";
import { movie } from "@/interfaces/movie_interface";
import Image from "next/image";
import { MovieDetails } from "./movieDetails";


export function SlideMovie({data}: {data: responseTopRated | null}){
    const [movieFocus, setMovieFocus] = useState<movie | null>();
    const slides = useRef<HTMLDivElement>(null);
    
    const handleMoveSlide = (d = 1)=>{

        const child = slides.current?.firstChild as HTMLDivElement;
        const widthSlide = child.getBoundingClientRect().width;
        const slideByConteiner = parseInt(getComputedStyle(slides.current as Element).getPropertyValue('--p'));
        
        slides.current?.scrollBy(d * widthSlide * slideByConteiner, 0)
    }

    const handleMovieFocus = (value: movie)=> {
        setMovieFocus(value);
    }
    return (
        <>
        { data?.results ? <>
                <div className={style.conteinerSlide}>
                    <button className={style.btn_prev} onClick={()=>handleMoveSlide(-1)}></button>
                    <button className={style.btn_next} onClick={()=>handleMoveSlide(1)}></button>
                    <div className={style.slide} ref={slides}>
                        {data?.results.map( movie =>{
                            return ( <MovieCard movie={movie} key={movie.id} setMovieFocus={handleMovieFocus} isFocus={movieFocus?.id == movie.id}/> )
                        })}
                    </div>
                </div>
                {movieFocus && <MovieDetails setMovieFocus={setMovieFocus} movieId={movieFocus.id}/>}
            </>: <Loading/>}
        </>
    )
}
'use client'
import { responseTopRated } from "@/interfaces/top_rated_interface";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import style from '../style/components/slideMovie.module.css';
import { MovieCard } from "./movieCard";
import Loading from "../app/loading";
import { movie } from "@/interfaces/movie_interface";


export function ConteinerSlide(){
    const [data, setData] = useState<responseTopRated | undefined>();
    const [movieFocus, setMovieFocus] = useState<movie | null>();
    const slides = useRef<HTMLDivElement>(null);

    const getData = useCallback(async ()=>{
        const response = await fetch(`${process.env.API_URL}top_rated?api_key=${process.env.TOKEN}`);
        const data = await response.json() as responseTopRated;

        setData(data);
    }, []);

    useEffect(()=>{
        getData();
    }, [getData]);
    
    // d representa a direção, d = 1 é para direita e -1 para esquerda
    const handleMoveSlide = (d = 1)=>{

        const child = slides.current?.firstChild as HTMLDivElement;

        // pegando o width para poder mover o slide
        const widthSlide = child.getBoundingClientRect().width;

        // slidebyConteiner é usado para ver quantos slides estão sendo exibidos
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
                            return ( <MovieCard movie={movie} key={movie.id} setMovieFocus={handleMovieFocus}/> )
                        })}
                    </div>
                </div>
                {movieFocus ? <div>{JSON.stringify(movieFocus)}</div> : 'nd'}
            </>: <Loading/>}
        </>
    )
}
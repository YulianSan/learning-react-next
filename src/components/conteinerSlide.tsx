'use client'
import { responseTopRated } from "@/interfaces/top_rated_interface";
import { useCallback, useEffect, useRef, useState } from "react";
import style from '../style/components/slideMovie.module.css';
import { MovieCard } from "./movieCard";


export function ConteinerSlide(){
    const [data, setData] = useState<responseTopRated | undefined>();
    const slides = useRef<HTMLDivElement>(null);

    const getData = useCallback(async ()=>{
        console.log(process.env)
        const response = await fetch(`${process.env.API_URL}top_rated?api_key=${process.env.TOKEN}`);
        const data = await response.json() as responseTopRated;

        setData(data);
    }, []);

    useEffect(()=>{
        getData();
    }, [getData]);
    
    const handleMoveSlide = (d = 1)=>{
        // d representa a direção, d = 1 é para direita e -1 para esquerda
        const child = slides.current?.firstChild as HTMLDivElement;
        // pegando o width para poder mover o slide
        const widthSlide = child.getBoundingClientRect().width;

        slides.current?.scrollBy(d * widthSlide, 0)
    }
    return (
        <div className={style.conteinerSlide}>
            <button className={style.btn_prev} onClick={()=>handleMoveSlide(-1)}></button>
            <button className={style.btn_next} onClick={()=>handleMoveSlide(1)}></button>
            <div className={style.slide} ref={slides}>
                {data?.results.map( movie =>{
                    return ( <MovieCard {...movie} key={movie.id}/> )
                })}
            </div>
        </div>
    )
}
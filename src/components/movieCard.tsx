import Image from "next/image";
import { movie } from "../interfaces/movie_interface";
import style from "../style/components/cardSlide.module.css";
import { Dispatch, SetStateAction } from "react";

export function MovieCard({movie, setMovieFocus}: {movie: movie} & {setMovieFocus: (value: movie)=> void }){
    
    return(
        <div 
            className={style.card} 
            tabIndex={0} 
            onFocus={()=>{setMovieFocus(movie)}}
            >
            <Image src={process.env.IMG_URL + movie.backdrop_path} alt={movie.title} fill sizes="100%" priority={true}/>
        </div>
    )
}
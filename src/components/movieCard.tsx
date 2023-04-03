import Image from "next/image";
import { movie } from "../interfaces/movie_interface";
import style from "../style/components/cardSlide.module.css";
import { Dispatch, KeyboardEvent, SetStateAction } from "react";


export function MovieCard(
    {
        movie, setMovieFocus, 
        isFocus
    }: {movie: movie, isFocus: boolean} & {setMovieFocus: (value: movie)=> void }){

    const handleFocusClick = (e: KeyboardEvent<HTMLDivElement>)=>{
        if(e.key == 'Enter' || e.key == ' '){
            setMovieFocus(movie)
        }
    }

    return(
        <div 
            role="button"
            className={`${style.card} ${isFocus && style.cardFocus}`} 
            tabIndex={0} 
            onClick={()=>{setMovieFocus(movie)}}
            onKeyDown={handleFocusClick}
        >
            <Image src={process.env.IMG_URL + movie.backdrop_path} alt={movie.title} fill sizes="100%" priority={true}/>
        </div>
    )
}
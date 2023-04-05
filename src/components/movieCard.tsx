import Image from "next/image";
import { movie } from "../interfaces/movie_interface";
import style from "../style/components/cardSlide.module.css";
import { Dispatch, KeyboardEvent, SetStateAction } from "react";

type PropsMovieCard = {
    movie: movie,
    isFocus: boolean,
    setMovieFocus: Dispatch<SetStateAction<movie | undefined>>
}

const handleFocusClick = (
    e: KeyboardEvent<HTMLDivElement>,
    setMovieFocus: PropsMovieCard['setMovieFocus'],
    movie: PropsMovieCard['movie']
) => {
    if (e.key == 'Enter' || e.key == ' ') {
        setMovieFocus(movie)
    }
}

export function MovieCard({ movie, setMovieFocus, isFocus }: PropsMovieCard) {

    return (
        <div
            role="button"
            className={`${style.card} ${isFocus && style.cardFocus}`}
            tabIndex={0}
            onClick={() => { setMovieFocus(movie) }}
            onKeyDown={(e) => handleFocusClick(e, setMovieFocus, movie)}
        >
            <Image
                src={process.env.IMG_URL + movie.poster_path}
                alt={movie.title} fill sizes="100%" 
                priority={true} />
        </div>
    )
}
import { responseTopRated } from "@/interfaces/top_rated_interface";
import { MovieCard } from "./movieCard";
import style from '../style/components/slideMovie.module.css';


export async function SlideMovie(){
    const response = await fetch(`${process.env.API_URL}top_rated?api_key=${process.env.TOKEN}`);
    const data = await response.json() as responseTopRated;
    const { results: movies } = data;
    
    return (
        <div className={style.conteinerSlide}>
            <button className={style.btn_prev}></button>
            <button className={style.btn_next}></button>
            <div className={style.slide}>
                {movies.map( movie =>{
                    return (
                        <MovieCard {...movie}></MovieCard>
                        )
                    })}
            </div>
        </div>
    )
}
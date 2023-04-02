import Image from "next/image";
import { movie } from "../interfaces/movie_interface";
import style from "../style/components/cardSlide.module.css";

export function MovieCard({backdrop_path, title}: movie){
    
    return(
        <div className={style.card}>
            <Image src={process.env.IMG_URL + backdrop_path} alt={title} fill sizes="100%" priority={true}/>
        </div>
    )
}
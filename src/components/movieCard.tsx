import Image from "next/image";
import { movie } from "../interfaces/movie_interface";
import '../style/components/slideMovie.css';
export function MovieCard({backdrop_path, title}: movie){
    return(
        <div className="card">
            <img src={process.env.IMG_URL + backdrop_path} alt={title}/>
        </div>
    )
}
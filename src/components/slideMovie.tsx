import { responseTopRated } from "@/interfaces/top_rated_interface";
import { MovieCard } from "./movieCard";


export async function SlideMovie(){
    const response = await fetch(`${process.env.API_URL}top_rated?api_key=${process.env.TOKEN}`,{
        next: {revalidate: 30}
      });
    const data = await response.json() as responseTopRated;
    const { results: movies } = data;
    
    
    return (
        <div>
            {movies.map( movie =>{
                return (
                <MovieCard {...movie}></MovieCard>
                )
            })}
        </div>
    )
}
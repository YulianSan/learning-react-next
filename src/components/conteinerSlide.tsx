import { responseTopRated } from "@/interfaces/top_rated_interface";
import { SlideMovie } from "./slideMovie";


export async function ConteinerSlide() {
    const response = await fetch(`${process.env.API_URL}top_rated?api_key=${process.env.TOKEN}`);
    const data = await response.json() as responseTopRated;

    return (
        <>
            <SlideMovie data={data} />
        </>
    )
}
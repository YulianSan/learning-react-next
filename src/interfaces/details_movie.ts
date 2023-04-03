import { movie } from "./movie_interface"
export interface movieDetails extends movie{
    belongs_to_collection: null | string,
    budget: number,
    genres: generos[],
    homepage: string,
    imdb_id: string,
    production_companies: compania_pais,
    revenue: number,
    runtime: number,
    spoke_language: languages,
    status: string,
    tagline: string
};

interface generos{
    id: number,
    name: string
}

interface compania{
    id: number,
    logo_path: null| string,
    name: string,
    origin_country: string
}

interface compania_pais{
    iso_3166_1: string,
    name: string
}

interface languages{
    iso_639_1: string,
    english_name: string,
    name: string
}

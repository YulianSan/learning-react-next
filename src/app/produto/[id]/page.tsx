import { SearchParamsComponent } from "@/components/searchParams";
import { Metadata } from "next";

interface ProdutoParams{
    params: {
        id: number
    }
}

export async function generateMetadata({ params }: ProdutoParams): Promise<Metadata> {
    return {
      title: `Titulo produto ${params.id}`
    };
}

export default function Product({ params }: ProdutoParams){
    return (
        <>
            {params.id}
            <SearchParamsComponent/>
        </>
    );
}

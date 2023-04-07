interface ProdutoParams{
    params: {
        id: number
    }
}

export async function generateMetadata({ params }: ProdutoParams) {
    return {
      title: `Titulo produto ${params.id}`,
    };
}

export default function Product({ params }: ProdutoParams){
    return (
        <>
            {params.id}
        </>
    );
}
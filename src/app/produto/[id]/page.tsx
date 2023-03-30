interface ProdutoParams{
    params: {
        id: number
    }
}
export default function Product({ params }: ProdutoParams){
    return (
        <>
            {params.id}
        </>
    );
}
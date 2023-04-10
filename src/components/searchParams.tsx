"use client"
import { useSearchParams } from "next/navigation";

export function SearchParamsComponent(){
    const searchParams = useSearchParams();
    console.log(searchParams)
    return (
        <>
            {searchParams.has('teste') && searchParams.get('teste')}
        </>
    );
}
import { useCallback, useEffect, useState } from "react";

export function useFetchInClientSize<T>(url: string){
    const [data, setData] = useState<T>();
    const handleGetData = useCallback(async () =>{
        const response = await fetch(url);
        const dataResponse = await response.json() as T;

        setData(dataResponse);
    }, [url]);

    useEffect(()=>{handleGetData()}, [handleGetData]);

    return {
        data,
        setData,
    }
}
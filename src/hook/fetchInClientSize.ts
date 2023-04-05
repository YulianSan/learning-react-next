import { useCallback, useEffect, useReducer, useState } from "react";

type reducerDate<T> = {
    data: T | null,
    isLoading: boolean,
    error: string | null
}

type reducerAction = {
    type: 'success' | 'newRequest' | 'error',
    payload?: any
}

function reducer<Data>(state: reducerDate<Data>, action: reducerAction){
    
    switch (action.type) {
        case 'success':
            return {
                ...state,
                data: action.payload as Data,
                isLoading: false
            };
        break;

        case 'error':
            return {
                ...state,
                error: action.payload
            };
        break;

        case 'newRequest':
            return {
                error: null,
                data: null,
                isLoading: true
            };
        break;
    }
}
export function useFetchInClientSize<T>(url: string): reducerDate<T>{
    const INITIAL_STATE: reducerDate<T> = {
        data: null,
        isLoading: false,
        error: null
    }

    const [data, dispatch] = useReducer(reducer<T>, INITIAL_STATE);

    const handleGetData = useCallback(async () =>{
        dispatch({type: 'newRequest'});
        try{
            const response = await fetch(url);
            const dataResponse = await response.json();
            if(!response.ok){
                if(dataResponse.status_message){
                    throw new Error(dataResponse.status_message);
                }else{
                    throw new Error('Houve um erro no servidor');
                }
            }

            dispatch({type: 'success', payload: dataResponse});

        }catch(err){
            dispatch({type: 'error', payload: err})
        }
    }, [url]);

    useEffect(()=>{
        handleGetData()
    }, [handleGetData]);

    return data;
    
}
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'Home Title',
    // openGraph: {
    //     images: [],
    //     type: 'website',
    //     description: 'uma description',
    //     title: 'Um title'
    // }
}

  
export default async function Home(){
    
    const data = await getMe();
    return (
        <Suspense fallback={<LoadingBasic/>}>
            <h1>Home</h1>
            <Link href={'/'}>Inicio</Link><br />
            { data && JSON.stringify(data, null, 2) }
        </Suspense>
    );
}

function LoadingBasic(){
    return (
        <>Loading</>
    );
}
async function getMe() {
    // Fetch data from external API
    const response = await fetch('https://api.github.com/users/YulianSan');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data
}
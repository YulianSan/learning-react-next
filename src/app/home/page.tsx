import Link from "next/link";

export const metadata = {
    title: 'Home Title',
}

  
export default async function Home(){
    const data = await getMe();
    return (
        <>
            <h1>Home</h1>
            <Link href={'/'}>Inicio</Link><br />
            { data.login }
        </>
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
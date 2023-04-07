'use client'
import Image from 'next/image';
import style from '../style/components/navBar.module.css';
import { NavItem } from './navItem';
import { Dispatch, SetStateAction, useState } from 'react';

const handleExpandMenu = (setExpand: Dispatch<SetStateAction<boolean>>)=>{
    setExpand(prev => !prev);
}

export function NavBar(){
    const [expand, setExpand] = useState(true);

    return(
        <nav className={`${style.navbar} ${expand && style.expand}`}>
            <Image 
                alt="Icon Netflix" 
                src={'/icon-netflix.png'} 
                width={50} 
                height={50} 
                className={style.iconNavBar}/>

            <ul>
                <NavItem 
                    href='/' 
                    src='/icon-home.png' 
                    alt='Icon Home' 
                    label='Home'
                    styleImg={{filter: 'invert(100%)'}}/>
                
                <NavItem 
                    href='/home' 
                    src='/icon-ver-depois.png' 
                    alt='Ver depois' 
                    label='Assitir mais tarde'
                    styleImg={{filter: 'invert(100%)'}}/>

                <NavItem 
                    href='/produto/1' 
                    src='/icon-favorite.png' 
                    alt='favorite' 
                    label='Favoritos'
                    styleImg={{filter: 'invert(100%)'}}/>

            </ul>

            <Image 
                alt="Expand menu" 
                src={'/arrow-right.png'} 
                width={50} 
                height={50}
                className={style.expandNavBar}
                onClick={()=>
                    handleExpandMenu(setExpand)
                }/>
        </nav>
    )
}
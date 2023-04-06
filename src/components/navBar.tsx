import Image from 'next/image';
import style from '../style/components/navBar.module.css';
import { NavItem } from './navItem';

export function NavBar(){
    return(
        <nav className={style.navbar}>
            <Image alt="Icon Netflix" src={'/icon-netflix.png'} width={50} height={50} className={style.iconNavBar}/>
            <ul>
                <NavItem 
                    href='/home' 
                    src='/icon-favorite.png' 
                    alt='favorite' 
                    label='Favoritos'
                    styleImg={{filter: 'invert(100%)'}}/>
                <NavItem 
                    href='/home' 
                    src='/icon-favorite.png' 
                    alt='favorite' 
                    label='Favoritos'
                    styleImg={{filter: 'invert(100%)'}}/>
                <NavItem 
                    href='/home' 
                    src='/icon-favorite.png' 
                    alt='favorite' 
                    label='Favoritos'
                    styleImg={{filter: 'invert(100%)'}}/>

            </ul>
        </nav>
    )
}
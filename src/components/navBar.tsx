import style from '../style/components/navBar.module.css';

export default function NavBar(){
    return(
        <nav className={style.navbar}>
            <ul>
                <li>nav 1</li>
                <li>nav 2</li>
                <li>nav 3</li>
                <li>nav 4</li>
            </ul>
        </nav>
    )
}
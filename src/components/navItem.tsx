import Image from "next/image"
import Link from "next/link"
import style from "../style/components/navItem.module.css"

type propsNavItem = {
    src: string,
    alt: string,
    href: string,
    label: string,
    styleImg?: React.CSSProperties
}

export function NavItem({ src, alt, href, label, styleImg }: propsNavItem){
    return (
        <li className={style.navItem}>
            <Link href={href}>
                <Image src={src} width={30} height={30} alt={alt} style={styleImg}/>
                <span>{label}</span>
            </Link>
        </li>
    )
}
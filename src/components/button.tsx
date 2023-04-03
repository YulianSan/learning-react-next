import Image from "next/image"
import { ButtonHTMLAttributes } from "react"
import style from '../style/components/button.module.css';

type propsButton = {
    label?: string,
    imgLeft?: string,
    imgRight?: string,
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({label, imgLeft, imgRight, className, ...rest}: propsButton){
    return(
        
        <button className={`${className} ${style.btnDefault}`} style={{...rest.style}} {...rest}>
            {imgLeft && <Image alt="Image button" src={imgLeft} fill sizes="100%" className={style.imgLeft}/>}
            {label}
            {imgRight && <Image alt="Image button" src={imgRight} fill sizes="100%" className={style.imgRight}/>}
        </button>
    
    )
}
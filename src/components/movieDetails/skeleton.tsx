import style from '../../style/components/skeloton.module.css';

export function SkeletonMovieCard(){
    return(
        <div style={{position: 'relative'}} className={style.widthMedium}>
            <div className={`${style.line} ${style.tall}`}></div>
            <div className={`${style.line} ${style.medium} ${style.marginTop}`}></div>
            <div className={`${style.line} ${style.medium}`}></div>
            <div className={`${style.line} ${style.low}`}></div>
            <div className={`${style.line} ${style.low}`}></div>
            <div className={`${style.line} ${style.low} ${style.widthMedium}`}></div>
        </div>
    );
}
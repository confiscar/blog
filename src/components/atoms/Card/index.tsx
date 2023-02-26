import style from './Card.module.css';

// width and height in px
declare type CardProps = {
    children: JSX.Element | JSX.Element[],
    w?:number,
    h?:number
}

const Card = ({children, w=0, h=0}: CardProps) => {
    return (
        <div 
            className={style.cardContainer}
            style={{
                ...(Boolean(w) && {width: w}),
                ...(Boolean(h) && {minHeight: h})
            }}
        >
            <div className={style.cardContent}>
                {children}
            </div>
        </div>
    );
};

export default Card;

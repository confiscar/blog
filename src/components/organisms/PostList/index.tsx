import copy from '../../../copy/copy.json';
import style from './PostList.module.css';

declare type CardListProps = {
    title?: string,
    CardComponent: React.FunctionComponent<any>,
    itemList: Object[]
}

const CardList = ({ title, CardComponent, itemList }: CardListProps) => (
    <div className={style.CardListContainer}>
        { typeof(title) !== 'undefined' && <p className={style.CardListHeader}>{title}</p>}
        <div className={style.CardsContainer}>
            { itemList.length === 0 
                ? <p>{copy.home.emptyPostList}</p> 
                : itemList.map((item, index) => (
                    <CardComponent key={index} item={item}/>
            ))}
        </div>
    </div>
);

export default CardList;
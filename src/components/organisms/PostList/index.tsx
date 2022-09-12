import copy from '../../../copy/copy.json';
import style from './PostList.module.css';
import cx from '../../../lib/classNames';
import Header from '../../atoms/Header';

declare type CardListProps = {
    title?: string,
    CardComponent: React.FunctionComponent<any>,
    itemList: Object[],
    nCol?: number
}

const EmptyList = () => (<p>{copy.home.emptyPostList}</p>);

const CardList = ({ title, CardComponent, itemList, nCol = 2 }: CardListProps) => {
    const splitInColumns = (list: Object[]) => {
        let groups = [];
        for(let i = 0; i < list.length; i += nCol) {
            groups.push(list.slice(i, i + nCol));
        }
        return groups;
    };

    return (
        <div className={style.CardListContainer}>
            { typeof(title) !== 'undefined' ? <Header>{title}</Header> : <div className={style.ComponentSeperation}></div>}
            <div className={style.CardsContainer}>
                { itemList.length === 0 
                    ? <EmptyList />
                    : splitInColumns(itemList).map((items, index) => (
                        <div className={cx(style.CardsRow, index !== 0 ? style.CardsRowSeperation : '')} key={index}>
                            { items.map((item, index) => (
                                <CardComponent key={index} item={item}/>
                            ))}
                        </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;
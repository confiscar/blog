import Image from 'next/image';
import Card from '../../atoms/Card';
import style from './ImageCard.module.css';
import defaultPlaceholder from './defaultPlaceholder';

declare type ImageCardProps = {
    item: { title: string, link: string, cardImage?: string, base64CardImage?: string}
}

const cardHeight = 180;
const cardWidth = 438;
const imageHeight = cardHeight / 1.6;

const NoImageHeader = () => (
    <div style={{width: cardWidth, height: imageHeight}} className={style.cardHeaderNoImage} />
);
const generateDataUrl = (data: string) => `data:image/jpeg;base64,${data}`;

const ImageCard = ({ item }: ImageCardProps) => {
    return (
        <a className="clearLinkDecoration" href={item.link}>
            <Card w={cardWidth} h={cardHeight}>
                {item.cardImage ? 
                    <Image className={style.cardHeaderImage}
                        width={cardWidth}
                        height={imageHeight}
                        src={item.cardImage}
                        alt=""
                        placeholder="blur"
                        blurDataURL={generateDataUrl(defaultPlaceholder)}
                    />
                    : <NoImageHeader/>
                }
                <div className={style.cardContent}>
                    <p className={style.titleText}>{item.title}</p>
                </div>
            </Card>
        </a>
    );
};

export default ImageCard;
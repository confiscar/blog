import Image from 'next/image';
import styles from './BackgroundBubble.module.css';
import bubble from '../../../../public/quarterFranLogo.svg';

const BackgroundBubble = () => {
    return (
        <div className={styles.backgroundBubble}>
            <Image width="470" height="470" src={bubble} alt="bubble-fran-logo" /> 
        </div> 
    );
};

export default BackgroundBubble;
import cx from '../../../lib/classNames';
import styles from './SplashText.module.css';

declare type SplashTextProps = {
    children: string;
    padding?: boolean;
}

const SplashText = ({ children, padding=false }: SplashTextProps) => {
    const texts = children.split(/\n/);
    return (
        <div className={styles.splashTextContainer}>
            {texts.map((text, index) => (
                <p 
                    key={index}
                    suppressHydrationWarning
                    className={cx(
                        styles.splashText,
                        padding ? styles.topPadding: '')
                    }>
                    {text} 
                </p>
            ))}
        </div>
    );
};

export default SplashText;
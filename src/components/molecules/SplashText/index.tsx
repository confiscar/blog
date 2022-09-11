import cx from '../../../lib/classNames';
import styles from './SplashText.module.css';

declare type SplashTextProps = {
    children: string;
    padding?: boolean;
}

const SplashText = ({ children, padding=true }: SplashTextProps) => {
    const isFirstText = (index: number) => (index === 0);
    const texts = children.split(/\n/);
    return (
        <div className={styles.splashTextContainer}>
            {texts.map((text, index) => (
                <p 
                    key={index}
                    suppressHydrationWarning
                    className={cx(
                        styles.splashText,
                        padding && isFirstText(index) ? styles.topPadding: '',
                        !isFirstText(index) ? styles.seperationPadding: '')
                    }>
                    {text} 
                </p>
            ))}
        </div>
    );
};

export default SplashText;
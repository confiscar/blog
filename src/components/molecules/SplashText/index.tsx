import cx from '../../../lib/classNames';
import styles from './SplashText.module.css';

declare type SplashTextProps = {
    children: string;
    padding?: boolean;
}

const SplashText = ({ children, padding=false }: SplashTextProps) => {
    return (
        <div className={styles.splashTextContainer}>
            <p 
                suppressHydrationWarning
                className={cx(
                    styles.splashText,
                    padding ? styles.topPadding: '')
                }>
                {children} 
            </p>
        </div>
    );
};

export default SplashText;
import cx from '../../../lib/classNames';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => (
    <div className={styles.footerLinkContainer}>
        <Link href={process.env.github || ''}>
            <a className={
                cx('clearLinkDecoration', styles.footerItem)}>
                    Github
            </a> 
        </Link>
        <Link href={process.env.linkedin || ''}>
            <a className={
                cx('clearLinkDecoration', styles.footerItem)}>
                    LinkedIn
            </a>
        </Link>
    </div>
);

export default Footer;
import cx from '../../../lib/classNames';
import styles from './Footer.module.css';
import Link from 'next/link';
import ExternalLinkIcon from '../../../lib/icons/ExternalLinkIcon';
import ExternalLink from '../../atoms/ExternalLink';

const Footer = () => (
    <div className={styles.footerLinkContainer}>
        <ExternalLink
            href={process.env.github || ''}
            className={styles.footerItem}
        >
           Github 
        </ExternalLink>
        <ExternalLink
            href={process.env.linkedin || ''}
            className={styles.footerItem}
        >
            LinkedIn
        </ExternalLink>
    </div>
);

export default Footer;
import styles from './Footer.module.css';
import ExternalLink from '../../atoms/ExternalLink';
import copy from '../../../copy/copy.json';

const Footer = () => (
    <div className={styles.footerLinkContainer}>
        <ExternalLink
            href={copy.links.github}
            className={styles.footerItem}
        >
            {copy.footer.github} 
        </ExternalLink>
        <ExternalLink
            href={copy.links.linkedin}
            className={styles.footerItem}
        >
            {copy.footer.linkedin}
        </ExternalLink>
        <ExternalLink
            href={copy.links.nextjs}
            className={styles.footerItem}
        >
           {copy.footer.nextjs}
        </ExternalLink>
    </div>
);

export default Footer;
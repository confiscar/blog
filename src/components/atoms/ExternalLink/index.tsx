import Link from 'next/link';
import ExternalLinkIcon from '../../../lib/icons/ExternalLinkIcon';
import styles from './ExternalLink.module.css';
import cx from '../../../lib/classNames';

declare type ExternalLinkProps = {
    href: string,
    className?: string,
    children: string,
};

const ExternalLink = ({ href, className='', children }: ExternalLinkProps) => (
    <Link href={href}>
        <a className={
            cx('clearLinkDecoration', className)}>
            <p className={styles.externalLink}>{children}</p>
            <ExternalLinkIcon className={styles.externalLinkIcon}/>
        </a>        
    </Link>
);

export default ExternalLink;
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
    <Link
        href={href}
        className={cx('clearLinkDecoration', className)}
    >
        <p className={styles.externalLink}>
            {children}  <ExternalLinkIcon className={styles.externalLinkIcon}/>
        </p>
    </Link>
);

export default ExternalLink;
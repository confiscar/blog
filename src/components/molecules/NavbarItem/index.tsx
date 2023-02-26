import Link from 'next/link';
import cx from '../../../lib/classNames';
import styles from './NavbarItem.module.css';

declare type NavbarItemProps = {
    item: string, 
    link: string
    active: boolean
};

const NavbarItem = ({item, link, active=false}: NavbarItemProps) => (
    <Link
        href={link}
        className={cx('clearLinkDecoration', styles.navbarItem, active ? styles.navbarItemActive: '')}
    >
        {item}
    </Link>
);

export default NavbarItem;
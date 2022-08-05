import Link from 'next/link';
import styles from './NavbarItem.module.css';

declare type NavbarItemProps = {
    item: string, 
    link: string
};

const NavbarItem = ({item, link}: NavbarItemProps) => (
    <Link href={link}>
        <a className={styles.navbarItem}>{item}</a>
    </Link>
);

export default NavbarItem;
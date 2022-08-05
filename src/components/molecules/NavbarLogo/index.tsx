import styles from './NavbarLogo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/logo.png';

const NavbarLogo = () => (
    <Link href="/">
        <a className={styles.navBarLogo}>
            <Image width="35" height="35" alt="Site logo" src={logo} />
        </a>
    </Link>
);

export default NavbarLogo;
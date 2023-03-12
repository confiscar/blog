import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import NavbarItem from '../../molecules/NavbarItem';
import NavbarLogo from '../../molecules/NavbarLogo';
import copy from '../../../copy/copy.json';

const Navbar = () => {
    const navMap: { [key: string]: string} = {
        'blog': '/blog',
        'recipes': '/recipes',
        'about': '/about'
    };

    const router = useRouter();

    const isActiveLink = (path: string) => (
        router.pathname === path
    );

    return (
        <div>
            <NavbarLogo title={copy.pageTitle} />
            <div className={styles.navBarLinkContainer}>
                {Object.keys(navMap).map((item) => (
                    <NavbarItem 
                        key={item}
                        item={item}
                        link={navMap[item]}
                        active={isActiveLink(navMap[item])}
                    />
                ))}
            </div>
        </div>
    );
};

export default Navbar;
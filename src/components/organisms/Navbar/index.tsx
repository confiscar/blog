import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import NavbarItem from '../../molecules/NavbarItem';
import NavbarLogo from '../../molecules/NavbarLogo';

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
            <NavbarLogo />
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
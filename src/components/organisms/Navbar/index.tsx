import NavbarItem from '../../molecules/NavbarItem';
import NavbarLogo from '../../molecules/NavbarLogo';

const Navbar = () => {
    const navMap: { [key: string]: string} = {
        'Home': '/',
        'Blog': '/blog',
        'Recipes': '/recipes',
        'About': '/about'
    };

    return (
        <div>
            <NavbarLogo />
            {Object.keys(navMap).map((item) => (
                <NavbarItem key={item} item={item} link={navMap[item]} />
            ))}
        </div>
    );
};

export default Navbar;
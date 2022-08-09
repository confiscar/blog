import styles from './NavbarLogo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import circle from '../../../../public/franLogoCircle.svg';
import activeLine from '../../../../public/navbarLogoLineOrange.svg';
import unactiveLine from '../../../../public/navbarLogoLineBlack.svg';


const NavbarLogo = () => {
    const logoText = 'fran\'s blog';
    const router = useRouter();
    const logoLineStyle = router.pathname === '/' ? activeLine : unactiveLine;

    return (
        <div className={styles.navBarLogoContainer}>
            <Link href="/">
                <div className="noPaddingDiv"> 
                    <div className={styles.navBarLogoCircle}>
                        <Image
                            src={circle}
                            width="33"
                            height="33"
                            alt="franLogoCircle"
                        ></Image>
                    </div>
                    <a className={styles.navBarLogoText}>{logoText}</a>
                </div>
            </Link>
            <Image 
                src={logoLineStyle}
                width="0"
                height="2"
                alt="navbarLogoLine" 
            ></Image>
            <br/>
        </div>
    );
};

export default NavbarLogo;
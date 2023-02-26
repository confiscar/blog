import styles from './NavbarLogo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import circle from '../../../../public/franLogoCircle.svg';

const NavbarLogo = () => {
    const logoText = 'fran\'s blog';
    const router = useRouter();
    const lineColor = router.pathname === '/' ? '#FF906C' : '#000000';

    return (
        <div className={styles.navBarLogoContainer}>
            <Link href="/" className="clearLinkDecoration">
                <div className="noPaddingDiv"> 
                    <div className={styles.navBarLogoCircle}>
                        <Image
                            src={circle}
                            width="33"
                            height="33"
                            alt="franLogoCircle"
                        ></Image>
                    </div>
                    <p className={styles.navBarLogoText}>{logoText}</p>
                </div>
            </Link>
            <div className={styles.navBarLogoUnderline} style={{background: lineColor}}></div>
            <br/>
        </div>
    );
};

export default NavbarLogo;
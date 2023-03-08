import styles from './NavbarLogo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import circle from '../../../../public/franLogoCircle.svg';
import cx from '../../../lib/classNames';

const NavbarLogo = () => {
    const logoText = 'fran\'s blog';
    const router = useRouter();
    const lineStyle = router.pathname === '/' ? styles.active : styles.inactive;

    return (
        <div className={styles.navBarLogoContainer}>
            <div className="noPaddingDiv"> 
                <Link href="/" className="clearLinkDecoration">
                    <div className={styles.navBarLogoCircle}>
                        <Image
                            src={circle}
                            width="33"
                            height="33"
                            alt="franLogoCircle"
                        ></Image>
                    </div>
                    <p className={styles.navBarLogoText}>{logoText}</p>
                </Link>
            </div>
            <div className={cx(styles.navBarLogoUnderline, lineStyle)}></div>
            <br/>
        </div>
    );
};

export default NavbarLogo;
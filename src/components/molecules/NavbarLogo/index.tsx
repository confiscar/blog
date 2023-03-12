import styles from './NavbarLogo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import circle from '../../../../public/franLogoCircle.svg';
import cx from '../../../lib/classNames';
import copy from '../../../copy/copy.json';

declare type NavbarLogoProps = {
    title: string
}


const NavbarLogo = ({ title }: NavbarLogoProps) => {
    const logoText = title;
    const router = useRouter();
    const lineStyle = router.pathname === '/' ? styles.active : styles.inactive;
    const circleStyle = title === copy.resume.pageTitle ? styles.navBarLogoCircleResume : styles.navBarLogoCircle;

    return (
        <div className={styles.navBarLogoContainer}>
            <div className="noPaddingDiv"> 
                <Link href="/" className="clearLinkDecoration">
                    <div className={circleStyle}>
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
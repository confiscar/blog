import Image from 'next/image';
import SplashText from '../../molecules/SplashText';
import cx from '../../../lib/classNames';
import copy from '../../../copy/copy.json';
import styles from './Profile.module.css';

const Profile = () => (
    <div className={cx(styles.profileContainer, 'centered')}>
      <SplashText 
        className={styles.splashText}
        padding={false}
        centered={false}
      >
        {copy.resume.splashText}
      </SplashText>
      <Image
        className={styles.profilePicture}
        src="/profile_picture.jpeg"
        alt="profile picture"
        width={150}
        height={150}
      />
    </div>
);

export default Profile;
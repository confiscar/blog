import ExternalLink from '../components/atoms/ExternalLink';
import Header from '../components/atoms/Header';
import NavbarLogo from '../components/molecules/NavbarLogo';
import Profile from '../components/organisms/Profile';
import Experience from '../components/organisms/Experience';
import copy from '../copy/copy.json';
import styles from './styles/Resume.module.css';

const ContactMeBody = () => (
  <div className={styles.contactBody}>
    Through <ExternalLink className={styles.blueLink} href={copy.links.linkedin}>LinkedIn</ExternalLink> or <ExternalLink className={styles.blueLink} href={copy.links.emailLink}>Email</ExternalLink>
  </div>
);

const Resume = () => {
  return (
    <>
      <NavbarLogo title={copy.resume.pageTitle}/>
      <Profile />
      <Header>{copy.resume.contactHeading}</Header>
      <ContactMeBody />
      <Experience />
    </>
  );
};

export default Resume;
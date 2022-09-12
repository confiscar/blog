import style from './Header.module.css';

declare type HeaderProps = {
    children: string
}
const Header = ({ children }: HeaderProps) => (
    <p className={style.header}>{children}</p>
);

export default Header;
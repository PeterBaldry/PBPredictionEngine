import './Header.css';
import logo from '../../assets/logo.png';

type HeaderProps = {
    title: string
}

function Header(props: HeaderProps) {
  return (
    <div className="container">
        <img
          alt=""
          src= {logo}
          width="231"
          height="75"
          className="d-inline-block align-top"
        />{' '}
    </div>
  );
}

export default Header;
import './Header.css';
import logo from '../../assets/logo.png';
import Menu from '../Menu/Menu';

type HeaderProps = {
    title: string
}

function Header(props: HeaderProps) {
  const menuLinks = [
    {
      url: "/sport",
      text: "Sport"
    },
    {
      url: "/weather",
      text: "Weather"
    },
    {
      url: "/stocks",
      text: "Stock Market"
    }
  ]
  return (
    <div className="header">
      <div className="header__top">
        <img
            alt=""
            src= {logo}
            width="231"
            height="75"
            className="header__top__img"
          />{' '}
          <div className="header__right">
            <Menu menuLinks={menuLinks}/>
          </div>
      </div>

    </div>
  );
}

export default Header;
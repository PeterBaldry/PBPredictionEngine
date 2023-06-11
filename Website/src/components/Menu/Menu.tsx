import { JSXElement } from '@babel/types';
import './Menu.css';

type MenuProps = {
    menuLinks: MenuLink[]
}

type MenuLink = {
  url: string,
  text: string
}

function Menu(props: MenuProps) {

  function renderMenuItem(menuLink: MenuLink, index: number) {
      return (
        <li className="menu__navbar__item" key={index} >
          <a className="menu__navbar__item__link" href={menuLink.url}> {menuLink.text} </a>
        </li>
      );
  }

  return (
    <div className="menu">
      <nav>
        <ul className="menu__navbar">
          {
            props.menuLinks.map(function(menuLink, index) {
              return renderMenuItem(menuLink, index);
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
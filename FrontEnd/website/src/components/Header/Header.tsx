import './Header.css';

type HeaderProps = {
    title: string
}

function Header(props: HeaderProps) {
  return (
    <div className="container">
        <h1 className="container__title"> {props.title} </h1>
    </div>
  );
}

export default Header;
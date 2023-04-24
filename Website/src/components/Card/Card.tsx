import './Card.css';

type CardProps = {
  cardTitle: string,
  cardImg: any,
  cardUrl: string
}

function Card(props: CardProps) {

  function onCardClick(): void {
      window.location.href = props.cardUrl;
  }

  return (
    <div className="card" onClick={onCardClick}>
      <h1> {props.cardTitle}</h1>
      <img
            alt=""
            src= {props.cardImg}
            width="90%"
            height="70%"
          />{' '}
    </div>
  );
}

export default Card;
import './Card.css';
import weatherImage from '../../assets/weather.jpg';
import sportImage from '../../assets/sport.jpg';

type CardProps = {
  cardTitle: string,
  config: string
}

function Card(props: CardProps) {
  const img = (props.config === "weather") ? weatherImage : sportImage;

  return (
    <div className="card">
      <h1> {props.cardTitle}</h1>
      <img
            alt=""
            src= {img}
            width="90%"
            height="70%"
          />{' '}
    </div>
  );
}

export default Card;
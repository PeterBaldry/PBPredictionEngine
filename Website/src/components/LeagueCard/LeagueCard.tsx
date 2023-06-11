import './LeagueCard.css';

type CardProps = {
  cardTitle: string,
  cardUrl: string
}

function LeagueCard(props: CardProps) {

  function onCardClick(): void {
      window.location.href = props.cardUrl;
  }

  return (
    <div className="league-card" onClick={onCardClick}>
      <h1> {props.cardTitle}</h1>
    </div>
  );
}

export default LeagueCard;
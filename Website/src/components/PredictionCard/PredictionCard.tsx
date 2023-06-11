import './PredictionCard.css';
import React from 'react';


function PredictionCard(props: any) {

  return (
    <div className="prediction-card">
        <div className="prediction-card__sport">
            NRL
        </div>
        <div className="prediction-card__team-names">
            <p className="prediction-card__team-names__team">
                {props.team1} 
            </p>
            <p className="prediction-card__team-names__team">
                {props.team2} 
            </p>
        </div>
        <div className="prediction-card__team-predictions">
            <div className="team-one">

            </div>
            <div className="team-two">

            </div>
        </div>
    </div>
  );
}

export default PredictionCard;
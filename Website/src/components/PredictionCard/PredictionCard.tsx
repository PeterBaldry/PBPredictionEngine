import './PredictionCard.css';
import React from 'react';


function PredictionCard(props: any) {

  return (
    <div className="prediction-card">
        <div className="prediction-card__sport">
            NRL
        </div>
        <div className="prediction-card__team-names">
            <p className="prediction-card__team-names__team-one">
                {(props.team1WinPercent >= props.team2WinPercent) ? <b>{props.team1}</b> : <>{props.team1}</>}
            </p>
            <p className="prediction-card__team-names__team-two">
                {(props.team1WinPercent <= props.team2WinPercent) ? <b>{props.team2}</b> : <>{props.team2}</>}
            </p>
        </div>
        <div className="prediction-card__team-percents">
            <p className="prediction-card__team-percents__team-one">
                {(props.team1WinPercent >= props.team2WinPercent) ? <b>{props.team1WinPercent}%</b> : <>{props.team1WinPercent}%</>}
            </p>
            <p className="prediction-card__team-percents__team-two">
                {(props.team1WinPercent <= props.team2WinPercent) ? <b>{props.team2WinPercent}%</b> : <>{props.team2WinPercent}%</>}
            </p>
        </div>
        <div className="prediction-card__team-predictions">
            <div className="team-one" style={{ width: props.team1Width + '%', backgroundColor: props.team1Colour }}></div>
            <div className="team-two" style={{ width: props.team2Width + '%', backgroundColor: props.team2Colour }}></div>
        </div>
    </div>
  );
}

export default PredictionCard;
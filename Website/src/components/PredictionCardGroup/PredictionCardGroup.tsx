import './PredictionCardGroup.css';
import React from 'react';
import PredictionCard from '../PredictionCard/PredictionCard';
import { getShortTeamName, getWinPercentFromString } from '../../utils/common';
import { constants } from '../../utils/constants';

type PredictionCardProps = {
    matches?: [];
}

function PredictionCardGroup(props: PredictionCardProps) {

    return (
        <div className="prediction-card-group">
            {props.matches && props.matches.map(function (match, index) {
                const teamOneShort = getShortTeamName(match[0]);
                const teamTwoShort = getShortTeamName(match[1]);
                const team1Colour = constants.teamColours[match[0]];
                const team2Colour = constants.teamColours[match[1]];
                const fullTeamWinPercent = match[5] as string;
                let team1WinPercent: number;
                let team2WinPercent: number;

                if (fullTeamWinPercent.includes(match[0])) {
                    team1WinPercent = getWinPercentFromString(match[5]);
                    team2WinPercent = 100-team1WinPercent;
                } else {
                    team2WinPercent = getWinPercentFromString(match[5]);
                    team1WinPercent = 100-team2WinPercent;
                }

                if (teamOneShort && teamTwoShort) {
                    return <PredictionCard 
                            key={index} 
                            team1={teamOneShort}
                            team2={teamTwoShort}
                            team1Width={team1WinPercent} 
                            team2Width={team2WinPercent}
                            team1Colour={team1Colour}
                            team2Colour={team2Colour}
                            team1WinPercent={team1WinPercent}
                            team2WinPercent={team2WinPercent}/>
                }
            })}
        </div>
    );
}

export default PredictionCardGroup;
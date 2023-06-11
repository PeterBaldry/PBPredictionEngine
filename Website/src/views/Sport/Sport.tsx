import { useEffect, useState } from 'react';
import LeagueCard from '../../components/LeagueCard/LeagueCard';
import PageHeading from '../../components/PageHeading/PageHeading';
import PredictionCard from '../../components/PredictionCard/PredictionCard';
import getNRLFixtures from '../../services/Sport/NRLFixtures';
import { getShortTeamName, getWinPercentFromString } from '../../utils/common';
import { constants } from '../../utils/constants';
import './Sport.css';

function Sport() {
    const [matches, setMatches] = useState(null);

    useEffect(function() {
        getNRLFixtures().then(function(data) {
            setMatches(data);
        });
    }, []);

    function getUpcomingRound(): []  {
        const currentYear = new Date().getFullYear();
        const roundNum = 15;
        if (matches) {
            const season = matches[currentYear];
            const round = season[roundNum];
            return round;
        } else {
            return [];
        }
    } 

    function renderUpcomingRounds() {
        const upcomingMatches = getUpcomingRound();
        return (
            <>
                {upcomingMatches.map(function (match, index) {
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
            </>
        );

    }

    return (
        <div className="sport">
            <PageHeading pageTitle="Sport predictions" />
            <h2 className="sport__header">Upcoming matches</h2>
            { matches ? 
                (<div className="sport__upcoming">
                    {renderUpcomingRounds()}
                </div>)
                : ""

            }
            <h2 className="sport__header">Leagues</h2>
            <div className="sport__leagues">
                <LeagueCard cardTitle="NRL" cardUrl="/nrl"/>
            </div>
        </div>
    )
}

export default Sport;
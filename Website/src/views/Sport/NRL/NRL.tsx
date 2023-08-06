import { useEffect, useState } from "react";
import PageHeading from "../../../components/PageHeading/PageHeading";
import getNRLFixtures from "../../../services/Sport/NRLFixtures";
import PredictionCardGroup from "../../../components/PredictionCardGroup/PredictionCardGroup";
import RoundSelector from "../../../components/RoundSelector/RoundSelector";

function NRL() {

    const [displayRound, setDisplayRound] = useState('23');
    const [matches, setMatches] = useState(null);

    useEffect(function() {
        getNRLFixtures().then(function(data) {
            setMatches(data);
        });
    }, []);

    function getUpcomingRound(roundNum: string): []  {
        const currentYear = new Date().getFullYear();
        if (matches) {
            const season = matches[currentYear];
            const round = season[roundNum];
            return round;
        } else {
            return [];
        }
    } 

    return (
        <div className="nrl">
            <PageHeading pageTitle="NRL predictions" />
            <RoundSelector displayRound={displayRound} setDisplayRound={setDisplayRound}/>
            <PredictionCardGroup matches={getUpcomingRound(displayRound) ? getUpcomingRound(displayRound) : undefined} />
        </div>
    )
}

export default NRL;
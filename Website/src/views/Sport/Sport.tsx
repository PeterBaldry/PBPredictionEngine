import { useEffect, useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import PredictionCard from '../../components/PredictionCard/PredictionCard';
import getNRLFixtures from '../../services/Sport/NRLFixtures';
import './Sport.css';

function Sport() {
    const [matches, setMatches] = useState(null);

    useEffect(function() {
        getNRLFixtures().then(function(data) {
            setMatches(data);
        });
    }, []);

    return (
        <div className="sport">
            <PageHeading pageTitle="Sport predictions" />
            <h2 className="sport__header">Upcoming matches</h2>
            {matches && 
                <div className="sport__upcoming">
                    <PredictionCard key={1} team1={matches["2019"]["1"][0][0]} team2="Dolphins"/>
                    <PredictionCard key={2} team1="Storm" team2="Broncos"/>
                </div>
            }
        </div>
    )
}

export default Sport;
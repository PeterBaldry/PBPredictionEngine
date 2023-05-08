import PageHeading from '../../components/PageHeading/PageHeading';
import PredictionCard from '../../components/PredictionCard/PredictionCard';
import './Sport.css';

function Sport() {

    return (
        <div className="sport">
            <PageHeading pageTitle="Sport predictions" />
            <h2 className="sport__header">Upcoming matches</h2>
            <div className="sport__upcoming">
                <PredictionCard team1="Titans" team2="Dolphins"/>
                <PredictionCard team1="Storm" team2="Broncos"/>
                <PredictionCard team1="Panthers" team2="Eels"/>
                <PredictionCard team1="Rabbitohs" team2="Warriors"/>
                <PredictionCard team1="Knights" team2="Tigers"/>
            </div>
        </div>
    )
}

export default Sport;
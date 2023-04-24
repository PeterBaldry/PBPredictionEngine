import Card from '../../components/Card/Card';
import weatherImage from '../../assets/weather.jpg';
import sportImage from '../../assets/sport.jpg';
import PageHeading from '../../components/PageHeading/PageHeading';


function Home() {

    return (
        <div>
            <PageHeading pageTitle="Predictions powered by artificial intelligence" />
            <div className="card-container">
                <Card cardTitle="Sport" cardImg={sportImage} cardUrl="\sport"/>
                <Card cardTitle="Weather" cardImg={weatherImage} cardUrl="\weather"/>
            </div>
        </div>
    )
}

export default Home;
import ImageCard from '../../components/ImageCard/ImageCard';
import weatherImage from '../../assets/weather.jpg';
import sportImage from '../../assets/sport.jpg';
import PageHeading from '../../components/PageHeading/PageHeading';
import './Home.css';

function Home() {

    return (
        <div className="home">
            <PageHeading pageTitle="Predictions powered by artificial intelligence" />
            <div className="home__card-container">
                <ImageCard cardTitle="Sport" cardImg={sportImage} cardUrl="\sport"/>
                <ImageCard cardTitle="Weather" cardImg={weatherImage} cardUrl="\weather"/>
            </div>
        </div>
    )
}

export default Home;
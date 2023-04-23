import './App.css';
import Header from './components/Header/Header';
import PageHeading from './components/PageHeading/PageHeading';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
        <Header title="PB Prediction Engine" />
        <PageHeading pageTitle="Predictions powered by artificial intelligence" />
        <div className="card-container">
            <Card cardTitle="Sport" config="sport"/>
            <Card cardTitle="Weather" config="weather"/>
            <Card cardTitle="Stock Market" config="stocks"/>
        </div>
        
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <Header title="PB Prediction Engine" />
      <Router />  
    </div>
  );
}

export default App;

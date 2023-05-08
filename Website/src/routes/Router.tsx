import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Sport from '../views/Sport/Sport';
import Weather from '../views/Weather/Weather';

function Router() {
    return (         
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sport' element={<Sport/>} />
            <Route path='/sport/:sportname/:matchid' element={<Weather/>} />
            <Route path='/weather' element={<Weather/>} />
        </Routes>
    );
}

export default Router;
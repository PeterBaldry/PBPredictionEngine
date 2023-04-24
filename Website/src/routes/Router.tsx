import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Sport from '../pages/Sport/Sport';

function Router() {
    return (         
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sport' element={<Sport/>} />
        </Routes>
    );
}

export default Router;
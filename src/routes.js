import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import CorPrimaria from './pages/corPrimaria'
import Dobro from './pages/Dobro'
import Febre from './pages/Febre'
import Media from './pages/Media'


export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/' element= {<Home />} />
                <Route path= '/corPrimaria' element= {<CorPrimaria />} />
                <Route path= '/Dobro' element= {<Dobro />} />
                <Route path= '/Febre' element= {<Febre />} />
                <Route path= '/Media' element= {<Media />} />



                
            </Routes>
        </BrowserRouter>
    )
}
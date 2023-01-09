import './App.css';
import Home from './components/pages/Home';
import Works from "./components/pages/works/Works";
import AboutMe from './components/pages/AboutMe';
import Contacts from './components/pages/Contacts';
import PaintingInfo from './components/common/PaintingInfo';
import AcrylicPaintings from './components/pages/works/AcrylicPaintings';
import {HashRouter,BrowserRouter, Routes,Route} from "react-router-dom";
import NewWorks from './components/pages/works/NewWorks';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/works"} element={<NewWorks/>} />
        <Route path={"/about-me"} element={<AboutMe/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={"/test"} element={<PaintingInfo/>}/>
        <Route path={"/works/acrylic-paintings"} element={<AcrylicPaintings/>}/>
        <Route path={"/works/water-color-paintings"} element={<AcrylicPaintings/>}/>
      </Routes>
    </HashRouter>
  );
  //
}

export default App;

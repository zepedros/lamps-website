import './App.css';
import Home from './components/pages/Home';
import Works from "./components/pages/works/Works";
import AboutMe from './components/pages/AboutMe';
import Contacts from './components/pages/Contacts';
import WorkInfo from './components/pages/works/WorkInfo';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/lamps-website"} element={<Home/>} />
        <Route path={"/lamps-website/works"} element={<Works/>} />
        <Route path={"/lamps-website/about-me"} element={<AboutMe/>}/>
        <Route path={"/lamps-website/contacts"} element={<Contacts/>}/>
        <Route path={"/lamps-website/test"} element={<WorkInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

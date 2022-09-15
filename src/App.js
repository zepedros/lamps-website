import './App.css';
import Home from './components/pages/Home';
import Works from "./components/pages/works/Works";
import AboutMe from './components/pages/AboutMe';
import Contacts from './components/pages/Contacts';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/works"} element={<Works/>} />
        <Route path={"/about-me"} element={<AboutMe/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

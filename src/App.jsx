import { Route,HashRouter,Routes } from "react-router-dom"
import './index.css'; 
import Landing from "./components/Landing"
import TournamentRegistration from "./components/TournamentRegistration";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Navbar from "./components/Navbar"; // Navbar component
import Services from "./components/Services";
import Footer from "./components/Footer";
import PlayerRegistration from "./components/PlayerRegistration";
import TournamentForm from "./components/TournamentForm";
import PlayerForm from "./components/PlayerForm";
import Leaderboard from "./components/Leaderboard";
function App() {

  return (
  
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/tournamentregistration" element={<TournamentRegistration/>}></Route>
        <Route path="/TournamentForm" element={<TournamentForm/>}></Route>
        <Route path="/PlayerForm" element={<PlayerForm/>}></Route>
        <Route path="/PlayerRegistration" element={<PlayerRegistration/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/Leaderboard" element={<Leaderboard/>}></Route>
      </Routes>
      <Footer/>
    </HashRouter>


  )
}


export default App


import Footer from './Views/Footer/FooterMain';
import Mainframe from './Views/Frame2/MainConatiner';
import HeroConatiner from './Views/Header/HeroContainer/herocontainer';
import Navbar from './Views/HeaderNav/NavBar/navbar';
import BecomeMentor from './Views/Mentor/BecomeMenter';
import TeamSection from './Views/OurTeamSection/OurTeamFrame';


function App() {
  return (
  <div>
<Navbar/>
<HeroConatiner/>
<Mainframe/>
<TeamSection/>
<BecomeMentor/>
<Footer/>
  </div>
  );
}

export default App;

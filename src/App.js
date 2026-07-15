import Button from './Components/Button';
import Mainframe from './Views/Frame2/MainConatiner';
import Header from './Views/Header/Header';
import NavBar from './Views/Header/navbar';
import TeamSection from './Views/OurTeamSection/OurTeamFrame';

function App() {
  return (
  <div>
    {/* <h1 className='bg-amber-600 font-bold px-6'>Hello</h1> */}
   {/* <Button
  name="Register Now"
  bgColor="bg-[#5D38DE]"
  textColor="text-white"
  className="w-[173px] h-[56px] rounded-[80px] px-8 py-4"
/> */}
<Header/>
{/* <NavBar/> */}
<Mainframe/>
<TeamSection/>
  </div>
  );
}

export default App;

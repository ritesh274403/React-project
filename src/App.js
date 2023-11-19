import './App.css';
import CardContainer from './components/CardContainer';
import Deal from './components/Deal';
import Imagecarousel from './components/Imagecarousel';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Offertag from './components/Offertag';
// import Offertag from './components/Offertag';


function App() {
  return (
    <div className='container'>
      <TopBar />
      <Navbar />
      <Imagecarousel />
      <Offertag />
      <CardContainer />
      <Deal />
    </div>
  );
}

export default App;

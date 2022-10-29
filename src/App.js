import './App.css';
import Footer from './Components/Footer';
import Info from './Components/Info';
import About from './Components/About';
import Interests from './Components/Interests';


function App() {
  return (
    <div className="appSection">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );   
    
}

export default App;

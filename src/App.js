// importing dependancies
import { useEffect } from 'react';


// importing sytlesheets and components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  
  useEffect(() => {
      // udpating the title of the webpage
      document.title = "High Peaks Supply | Home"
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="home-main">
        <h1>Insert Featured products here!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;

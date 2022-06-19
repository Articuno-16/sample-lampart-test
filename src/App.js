// import logo from './logo.svg';
import './App.css';
import {Header, Intro, Services, Footer, Slide} from './Components'
function App() {
  return (
    <div className="App">
      <Header/>
      <Slide />
      <Intro />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

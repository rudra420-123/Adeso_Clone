import "./App.css";
import Reference from "./components/Reference";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Cardpack from "./components/Cardpack";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Reference/>
      <Navbar/>
      <Poster/>
      <Cardpack/>
      <Footer/>
    </div>
  );
}

export default App;

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopAlbums from "./components/TopAlbums";
function App() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <TopAlbums />
    </div>
  );
}

export default App;

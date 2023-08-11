import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
function App() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <Card />
    </div>
  );
}

export default App;

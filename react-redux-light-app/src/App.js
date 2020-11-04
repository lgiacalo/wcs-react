import LightComponentStore from "./components/LightComponent";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const store = useSelector((state) => state);
  return (
    <div className="App">
      <Navbar light={store} />
      <LightComponentStore />
    </div>
  );
}

export default App;

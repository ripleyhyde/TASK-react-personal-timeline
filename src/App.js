import "./App.css";
import DataBlock from "./Components/DataBlock";

function App() {
  return (
    <div className="App">
      <h1>My Personal Timeline</h1>
      <img
        src="https://i.pinimg.com/originals/d2/fe/de/d2fedec6aee233df79a5b975b1ff41ad.jpg"
        alt="map"
      />
      <DataBlock className="DataBlock"></DataBlock>
    </div>
  );
}

export default App;

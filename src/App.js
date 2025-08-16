import './App.css';
import WebController from './controller/WebController';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <WebController />
      </Router>
    </div>
  );
}

export default App;

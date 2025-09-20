import './App.css';
import WebController from './controller/WebController';
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
<div className="w-full min-h-screen">
      <Router>
        <CartProvider>
          <WebController />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
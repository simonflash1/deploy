import './App.css';
import { Route } from 'react-router-dom';
import { Landing, Home, Details, Create, About } from "./pages-view"
import axios from "axios"

axios.defaults.baseURL = 'https://deploy-production-1c1e.up.railway.app//'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/dogs/:id" component={Details} />
      <Route path="/create" component={Create} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="Home">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>

          <Navbar />
        </Router>
     </div>
    </>
  );
}

export default App;

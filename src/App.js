import './App.css';
import Header from './Header';
import QpidCards from './QpidCards';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
      <Switch>
        <Route path="/chat">
          <h1>Chat Page</h1>
        </Route>
        <Route path="/">
          <QpidCards />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/homePage';
import Header from './components/headerElement';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

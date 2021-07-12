import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllReviews from './components/AllReviews/AllReviews';
import SingleReview from './components/SingleReview/SingleReview';

function App() {
  return (
    <Router>
      <div className='App'></div>
      <Navbar />
      <Switch>
        <Route exact path='/reviews'>
          <AllReviews />
        </Route>
        <Route exact path='/reviews/:review_id'>
          <SingleReview />
        </Route>
        <Route>
          <p>404 - not found</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

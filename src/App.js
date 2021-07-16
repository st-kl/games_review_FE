import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllReviews from './components/AllReviews/AllReviews';
import SingleReview from './components/SingleReview/SingleReview';
import { useState } from 'react';
import { UserContext } from './context/User';
import styled from 'styled-components';
import Home from './components/Home';

const AppWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
`;

function App() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({
    username: 'tickle122',
    avatar_url:
      'https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg"',
    name: 'Tom Tickle',
  });

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <AppWrapper>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path={['/reviews', '/reviews/:category']}>
              <AllReviews comments={comments} setComments={setComments} />
            </Route>
            <Route exact path='/review/:review_id'>
              <SingleReview comments={comments} setComments={setComments} />
            </Route>
            <Route>
              <p>404 - not found</p>
            </Route>
          </Switch>
        </AppWrapper>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

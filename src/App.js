import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './containers/MainNavigation';
import Home from './containers/Home'
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#cbcbcb6e',
    marginTop:'64px',
    height:'800px'
}

  let routes = (
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
        </Route>
        <Route path='/work' exact>
        </Route>
        <Route path='/projects'>
        </Route>
        <Route path='/website-info'>
        </Route>
        <Redirect to='/' />
      </Switch>
    );

  return (
      <Router>
        <MainNavigation />
        <div style={divStyle}>
          <Suspense
            fallback={
              <div className='center'>
                <LoadingSpinner />
              </div>
            }>
            {routes}
          </Suspense>
          </div>
      </Router>
  );
};

export default App;

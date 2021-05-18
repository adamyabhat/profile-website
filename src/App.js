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

// const Users = React.lazy(() => import('./user/pages/Users'));
// const NewPlace = React.lazy(() => import('./places/pages/UserPlaces'));
// const UserPlaces = React.lazy(() => import('./places/pages/UserPlaces'));
// const UpdatePlace = React.lazy(() => import('./places/pages/UpdatePlace'));
// const Auth = React.lazy(() => import('./user/pages/Auth'));

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
          {/* <UserPlaces /> */}
        </Route>
        <Route path='/work' exact>
          {/* <NewPlace /> */}
        </Route>
        <Route path='/projects'>
          {/* <UpdatePlace /> */}
        </Route>
        <Route path='/website-info'>
          {/* <UpdatePlace /> */}
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

import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import MAIN_ROUTES from './Routes';

import NavBar from './nav-bar/nav-bar';
import AuthDataProvider from '../providers/auth-data-provider';

const App: React.FC = () => {

  const Loader = () => (
    <h1>Loading</h1>
  );

  const Routes = () => (
    <Switch>
      {MAIN_ROUTES.map((route, i) =>
        ( i === 0 ?
        <Route
          exact
          key={i}
          path={route.path}
          component={route.component}>
        </Route>
          :
        <Route
          key={i}
          path={route.path}
          component={route.component}>
        </Route>
        )
      )}
    </Switch>
  );

  return (
    <section>
      <Suspense fallback={<Loader></Loader>}>
          <Router>
            <AuthDataProvider>
              <NavBar></NavBar>
              <section className="main-content">
                <Routes></Routes>
              </section>
            </AuthDataProvider>
          </Router>
      </Suspense>
    </section>
  );
}

export default App;

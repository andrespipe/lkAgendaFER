import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import MAIN_ROUTES from './Routes';

import NavBar from './nav-bar/NavBar';

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
          <NavBar></NavBar>
          <section className="main-content">
            <Routes></Routes>
          </section>
        </Router>
      </Suspense>
    </section>
  );
}

export default App;

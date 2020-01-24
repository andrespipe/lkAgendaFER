import React, { Suspense } from 'react';
import './App.css';

import NavBar from './nav-bar/NavBar';

const App: React.FC = () => {
  return (
    <section>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar></NavBar>
      </Suspense>
    </section>
  );
}

export default App;

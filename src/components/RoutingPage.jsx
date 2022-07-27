import React from 'react';
import {Routes , Route, Link } from 'react-router-dom';

import Results  from './Results';



export default function RoutingPage() {
  return (
    <div className="p-4">
    <Routes>
      <Route exact path="/">
        <Link to="/search" />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

    </Routes>
  </div>
  )
}

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UIPages } from '../pages';

function AppRouter() {
  let router = (
    <Router>
      <Routes>
        <Route path="/" element={<UIPages />} />
      </Routes>
    </Router>
  );
  return router;
}

export default AppRouter;

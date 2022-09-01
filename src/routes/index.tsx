import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UIComponent } from '../components';

function AppRouter() {
  let router = (
    <Router>
      <Routes>
        <Route path="/" element={<UIComponent />} />
      </Routes>
    </Router>
  );
  return router;
}

export default AppRouter;

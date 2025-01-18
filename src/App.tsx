import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RedTeaming from './pages/RedTeaming';
import BugBounty from './pages/BugBounty';
import WebAppSecurity from './pages/WebAppSecurity';
import ActiveDirectory from './pages/ActiveDirectory';
import Layout from './components/Layout';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="red-teaming" element={<RedTeaming />} />
          <Route path="bug-bounty" element={<BugBounty />} />
          <Route path="web-security" element={<WebAppSecurity />} />
          <Route path="active-directory" element={<ActiveDirectory />} />
        </Route>
      </Routes>
    </Router>
  );
}
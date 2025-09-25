import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import KnowMorePage from './pages/KnowMorePage';
import CollaborationPage from './pages/CollaborationPage';
import WorkPage from './pages/WorkPage';
import ClientPage from './pages/ClientPage';
import FuturePage from './pages/FuturePage';
import PageWrapper from './layouts/PageWrapper';

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/know-more" element={<KnowMorePage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/future" element={<FuturePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/client" element={<ClientPage />} />
          {/* <Route path="/careers" element={<CareersPageContainer />} /> */}
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;

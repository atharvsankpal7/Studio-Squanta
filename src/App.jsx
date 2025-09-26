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
import CareersPageContainer from './pages/CareersPageContainer';
import Firefit from './pages/casestudy/Firefit';
import OFFTHRD from './pages/casestudy/OFF-THRD';
import Trenddy from './pages/casestudy/TheTrenddyTable';
import AUTOMATE from './pages/casestudy/TheTrenddyTable copy';

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
          <Route path="/careers" element={<CareersPageContainer />} />
          <Route path="/casestudy/firefit" element={<Firefit />} />
          <Route path="/casestudy/off-thrd" element={<OFFTHRD />} />
          <Route path="/casestudy/trenddy" element={<Trenddy />} />
          <Route path="/casestudy/automate" element={<AUTOMATE />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;

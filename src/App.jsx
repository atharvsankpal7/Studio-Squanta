import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import KnowMorePage from './pages/KnowMorePage';
import CollaborationPage from './pages/CollaborationPage';
import WorkPage from './pages/WorkPage';
import ClientPage from './pages/ClientPage';
import FuturePage from './pages/FuturePage';
import PageWrapper from './layouts/PageWrapper';
import CareersPageContainer from './pages/CareersPageContainer';
import CaseStudyLayout from './pages/casestudy/CaseStudyLayout';
import ScrollToTop from './components/ScrollToTop';

const CaseStudyRoute = () => {
  const { slug } = useParams();
  return <CaseStudyLayout contentId={slug} />;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<KnowMorePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/know-more" element={<KnowMorePage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
          <Route path="/future" element={<FuturePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/careers" element={<CareersPageContainer />} />

          {/* dynamic case study route */}
          <Route path="/casestudy/:slug" element={<CaseStudyRoute />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;

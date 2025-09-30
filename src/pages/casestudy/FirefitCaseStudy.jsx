import React from 'react';
import CaseStudyLayout from './CaseStudyLayout';
import { caseStudies } from '../../data/caseStudies';

const FirefitCaseStudy = () => {
  return <CaseStudyLayout content={caseStudies.firefit} />;
};

export default FirefitCaseStudy;
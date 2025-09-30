import React from 'react';
import CaseStudyLayout from './CaseStudyLayout';
import { caseStudies } from '../../data/caseStudies';

const OffthrdCaseStudy = () => {
  return <CaseStudyLayout content={caseStudies.offthrd} />;
};

export default OffthrdCaseStudy;
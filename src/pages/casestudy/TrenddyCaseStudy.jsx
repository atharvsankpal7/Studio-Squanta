import React from 'react';
import CaseStudyLayout from './CaseStudyLayout';
import { caseStudies } from '../../data/caseStudies';

const TrenddyCaseStudy = () => {
  return <CaseStudyLayout content={caseStudies.trenddy} />;
};

export default TrenddyCaseStudy;
import React from 'react';
import Container from './ui/Container';
import ServiceSection from './ServiceSection';

/**
 * Responsive Services Section component containing all service categories
 * Includes Branding, UX/UI Design, Content & Creative, and Marketing sections
 * Features responsive layout: stacked on mobile/tablet, 2-column grid on desktop
 */
const MobileServicesSection = ({ className = '' }) => {
  const servicesData = [
    {
      id: 'branding',
      title: 'BRANDING',
      description: 'We develop strategic brand foundations that foster recognition and recall- seamlessly integrating strategy, design, and messaging into cohesive identities that resonate with customers and leave a lasting impression.',
      services: [
        'Strategy & Positioning',
        'Visual Identity',
        'Packaging Design',
        'Customer Experience',
        'Brand Guidelines',
        'Technical Strategy',
        'Brand Messaging',
        'Voice & Tone'
      ]
    },
    {
      id: 'uxui',
      title: 'UX UI DESIGN',
      description: 'Our UI/UX approach blends research, strategy, and design to create experiences that feel effortless- maximizing engagement, retention, and customer satisfaction.',
      services: [
        'UX RESEARCH',
        'DESIGN AUDIT',
        'STRATEGY & IDEATION',
        'EXPERIENCE DESIGN',
        'INFORMATION MAPPING',
        'LOW-FI',
        'INTERACTION DESIGN',
        'USER INTERFACE',
        'WIREFRAMING',
        'HI-FI'
      ]
    },
    {
      id: 'content-creative',
      title: 'Content & Creative',
      description: 'We develop brand-aligned content that not only grabs attention but inspires action- engineered for impact across fast-evolving digital channels.',
      services: [
        'Ad Design',
        'Landing Pages',
        'Graphic Design',
        'Copywriting',
        'Video Production',
        'Motion & Animation',
        'Organic Content',
        'Art Direction'
      ]
    },
    {
      id: 'marketing',
      title: 'Content & Creative',
      description: 'We help brands accelerate growth through full-funnel marketing, data-led creative, and performance strategies that turn attention into action and keep customers engaged.',
      services: [
        'Digital Marketing',
        'Influencer & UGC',
        'Digital Campaigns',
        'SEO',
        'Roadmaps & Consulting',
        'Analytics and Reporting',
        'Market Research',
        'Consumer Insights',
        'Paid Advertising'
      ]
    }
  ];

  return (
    <section className={`bg-squanta-dark py-16 md:py-20 lg:py-24 ${className}`}>
      <Container>
        {/* Mobile and Tablet Layout */}
        <div className="xl:hidden space-y-16 md:space-y-20">
          {servicesData.map((serviceCategory, index) => (
            <ServiceSection
              key={serviceCategory.id}
              title={serviceCategory.title}
              description={serviceCategory.description}
              services={serviceCategory.services}
              className="max-w-2xl mx-auto"
            />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-2 gap-16 xl:gap-20">
            {servicesData.map((serviceCategory, index) => (
              <ServiceSection
                key={serviceCategory.id}
                title={serviceCategory.title}
                description={serviceCategory.description}
                services={serviceCategory.services}
                className={index % 2 === 0 ? 'xl:pr-8' : 'xl:pl-8'}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileServicesSection;

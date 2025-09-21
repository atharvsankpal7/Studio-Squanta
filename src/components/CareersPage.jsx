import React from 'react';

// Data for the job postings
const jobs = [
    {
        title: 'UX UI DESIGNER',
        id: 'SS987690',
        details: {
            jobTitle: 'UI/UX Designer',
            experience: '1-2 Years',
            location: 'Pune',
            type: 'Full-Time',
        },
        responsibilities: [
            'Design intuitive and modern user interfaces',
            'Create wireframes, prototypes, and user flows',
            'Collaborate with developers and product teams',
            'Apply UX research to design decisions',
        ],
        requirements: [
            '1-2 years of experience in UI/UX design',
            'Proficiency in Figma/Adobe XD',
            'Strong visual and interaction design skills',
            'Portfolio showcasing design projects',
        ],
    },
    {
        title: 'BRANDING ASSOCIATE',
        id: 'SS987690',
        details: {
            jobTitle: 'UI/UX Designer',
            experience: '1-2 Years',
            location: 'Pune',
            type: 'Full-Time',
        },
        responsibilities: [
            'Design intuitive and modern user interfaces',
            'Create wireframes, prototypes, and user flows',
            'Collaborate with developers and product teams',
            'Apply UX research to design decisions',
        ],
        requirements: [
            '1-2 years of experience in UI/UX design',
            'Proficiency in Figma/Adobe XD',
            'Strong visual and interaction design skills',
            'Portfolio showcasing design projects',
        ],
    },
];

// A reusable component to render the details list in the job description
const DetailSection = ({ title, items }) => (
    <div className="mt-4">
        <h4 className="font-semibold text-gray-800"><strong>{title}:</strong></h4>
        <ul className="list-none text-gray-600">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

// Component for a single job posting row
const JobPosting = ({ job }) => {
    return (
        <div className="grid grid-cols-12 items-start py-6 border-b border-gray-200 gap-x-6">
            <div className="col-span-12 md:col-span-4">
                <span className="md:hidden text-2xl font-semibold text-gray-800  uppercase mb-5 block"><strong>Open Jobs</strong></span>
                <h3 className="font-semibold text-gray-800">{job.title}</h3>
            </div>  
            <div className="col-span-12 md:col-span-2 mt-2 md:mt-0">
                <span className="md:hidden text-sm font-medium text-gray-800 uppercase mb-1 block"><strong>Job ID</strong></span>
                <p className="text-gray-800">{job.id}</p>
            </div>
            <div className="col-span-12 md:col-span-4 mt-4 md:mt-0 text-sm">
                <span className="md:hidden text-sm font-medium text-gray-800 uppercase mb-2 block"><strong>Job Description</strong></span>
                <p className="text-gray-800">
                    <strong>Job Title:</strong> {job.details.jobTitle}<br />
                    <strong>Experience:</strong> {job.details.experience}<br />
                    <strong>Location:</strong> {job.details.location}<br />
                    <strong>Type:</strong> {job.details.type}
                </p>
                <DetailSection title="Responsibilities" items={job.responsibilities} />
                <DetailSection title="Requirements" items={job.requirements} />
            </div>
            <div className="col-span-12 md:col-span-2 mt-4 md:mt-0 flex md:justify-end items-start">
                <a href="#apply-form" className="bg-[#007AEC] text-white font-semibold rounded-full px-6 py-2 hover:bg-blue-600 transition-colors duration-200">
                    Apply Now
                </a>
            </div>
        </div>
    );
};

const CareersPage = () => {
    return (
        <div className="my-20 lg:my-28 bg-white font-sans antialiased text-black">
            <div className="mt-44">
                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter" style={{ marginBottom: '4.44rem' }}>
                    Be a part of Altecht
                </h1>

                <div className="w-full">
                    {/* Table Header - Hidden on mobile */}
                    <div className="hidden md:grid grid-cols-12 py-4 border-b border-gray-300 text-left text-sm font-medium text-gray-800 uppercase tracking-wider gap-x-6">
                        <div className="col-span-4"><strong>Open Jobs</strong></div>
                        <div className="col-span-2"><strong>Job ID</strong></div>
                        <div className="col-span-3"><strong>Job Description</strong></div>
                    </div>

                    {/* Jobs List */}
                    <div>
                        {jobs.map((job, index) => (
                            <JobPosting key={index} job={job} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;

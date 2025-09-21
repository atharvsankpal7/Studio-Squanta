import React from 'react';

// SVG Components (use public paths)
const QuoteIcon1 = () => (
    <img src="/icons/quote-up_svgrepo.com.png" alt="Quote Icon" className="w-[2.5rem] h-[2.5rem] text-gray-900" />
);
const QuoteIcon2 = () => (
    <img src="/icons/quote-close-editor_svgrepo.com.png" alt="Quote Icon" className="w-[2.5rem] h-[2.5rem] text-gray-900" />
);

// Testimonials data
const testimonials = [
    {
        image: '/All Images Landing page Altecht/c1.png',
        quote: '“With Altecht’s custom solutions, we built a seamless platform that connects people and amplifies our mission.”',
        client: 'Karmic',
        ceoName: 'Manindar K. S.',
        ceoDesignation: 'Director of Engineering, Karmic'
    },
    {
        image: '/All Images Landing page Altecht/c2.png',
        quote: '“Altecht helped us launch a stylish, scalable e-commerce platform that matches our brand’s energy.”',
        client: 'Off-Thrd',
        ceoName: 'M. D. Poleki',
        ceoDesignation: 'Product Lead, Off-Thrd'
    },
    {
        image: '/All Images Landing page Altecht/c4.png',
        quote: '“Their tech made farming smarter—easy access to tools, data, and services for real impact on the ground.”',
        client: 'Smart Kisaan',
        ceoName: 'Maneesh Pahuja',
        ceoDesignation: 'Enterpreneur, Smart Kisaan'
    },
];

const TestimonialCard = ({ image, quote, client, ceoName, ceoDesignation }) => (
    <div className="w md:h-[36.611rem] flex-shrink-0 bg-white rounded-md"
         style={{
             boxShadow: "4.721px 9.441px 18.883px 0 rgba(0, 0, 0, 0.25)"
         }}>
        <div className="flex flex-col items-center">
            <div className=" h-[17.184rem] w-[19.938rem]  mt-[1rem] overflow-hidden flex-shrink-0 bg-gray-100 px-5">
                <img
                    src={encodeURI(image)}
                    alt={client}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <h3 className="w-[17.361rem] mt-[1rem] md:mt-[1.75rem] text-black font-montserrat text-xl md:text-[1.890rem] font-medium text-left md:text-left">
                {client}
            </h3>

            <p className="w-[18.542rem] mt-[1rem] md:mt-[1.25rem] md:h-[5.665rem] text-[#616161] font-montserrat text-sm md:text-[0.945rem] font-normal text-left md:text-left">
                {quote}
            </p>

            <div className="md:max-w-[13.045rem] mt-[1rem] mb-[1.5rem] md:mb-0 md:mt-[1.51rem] self-start ml-[2rem] md:px-0 md:self-end md:mr-[1.438rem] ">
                <p className="text-black font-montserrat text-sm md:text-[0.796rem] font-normal">
                    {ceoName}
                </p>
                <p className="text-[#8A8A8A] font-montserrat text-sm md:text-[0.796rem] font-normal">
                    {ceoDesignation}
                </p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <div className="bg-white ">
            <h2 className="w-full max-w-[42.5rem] mx-auto mt-[3rem] md:mt-[5.56rem] mb-[3rem] md:mb-[6.13rem] text-black font-montserrat text-3xl md:text-[2.5rem] font-semibold text-center">
                What Our Client Say?
            </h2>

            {/* Flex layout: wrap on smaller screens; precise desktop horizontal gap 11.22px */}
            <div className="flex flex-wrap justify-center gap-y-[1.5rem] gap-x-[1rem] md:gap-x-[0.701rem]"
                 style={{
                     marginBottom: "3.32rem"
                 }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex justify-center">
                        <TestimonialCard
                            image={testimonial.image}
                            quote={testimonial.quote}
                            client={testimonial.client}
                            ceoName={testimonial.ceoName}
                            ceoDesignation={testimonial.ceoDesignation}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;

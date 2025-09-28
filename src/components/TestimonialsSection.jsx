import Container from "./ui/Container";

function TestimonialCard({ testimonial }) {
  return (
    <div
      className={"w-[338px] h-[443px] flex flex-col relative"}
      style={{ backgroundColor: testimonial.backgroundColor || "#E6FFEA" }}
    >
      {testimonial.image && (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-[200px] object-cover"
        />
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-black font-montserrat text-base font-medium leading-normal mb-6">
          {testimonial.content}
        </p>

        <div>
          <h3 className="text-black font-alan-sans text-[20px] font-normal leading-normal tracking-[0.79px]">
            {testimonial.name}
          </h3>
          <p className="text-black font-alan-sans text-[20px] font-normal leading-normal tracking-[0.79px]">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-black pb-16 md:py-24 lg:py-32">

      {/* Hero Section with Partner Text */}
      <Container className="bg-black">
        <h1
          className="text-[32px] sm:text-[48px] md:text-[50px] lg:text-[63px] font-alan-sans font-bold leading-tight sm:leading-normal tracking-[1px] sm:tracking-[1.28px] md:tracking-[2px] lg:tracking-[3px] xl:tracking-[3.867px] uppercase text-white  text-left mb-[1.19rem] md:mb-[3.19rem] lg:mb-[5.19rem]"
        >
          We partner with ambitious minds shaping what&apos;s next.
        </h1>
      </Container>

      {/* Testimonials Section */}
      <Container className="bg-black flex items-center justify-center flex-col xl:flex-row gap-3">
        <img
          src="/Squanta Assets/testinomial.png"
          alt="Testimonial 1"
          className="w-full max-w-full flex-1 min-w-0 h-auto sm:h-[18.75rem] md:h-[21.875rem] lg:h-[25rem] xl:h-[27.688rem] object-cover"
        />
        <img
          src="/Squanta Assets/testinomial2.png"
          alt="Testimonial 2"
          className="hidden md:block w-full max-w-full flex-1 min-w-0 h-auto sm:h-[18.75rem] md:h-[21.875rem] lg:h-[25rem] xl:h-[27.688rem] object-cover"
        />
      </Container>
    </section>
  );
}

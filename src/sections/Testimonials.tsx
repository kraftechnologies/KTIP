import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "KTIP was a turning point in my career. The hands-on experience with real projects and guidance from industry experts helped me secure a job at a leading tech company.",
      name: "Priya Sharma",
      position: "Former Intern, AI/ML Division",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      quote:
        "The mentorship I received during KTIP was invaluable. I learned not just technical skills but also how to approach problems and work in a team environment.",
      name: "Rahul Verma",
      position: "Former Intern, Web Development",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      quote:
        "KTIP gave me the confidence to pursue my passion in technology. The supportive environment and challenging projects pushed me to grow both personally and professionally.",
      name: "Ananya Patel",
      position: "Former Intern, Mobile App Development",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 overflow-hidden dark:bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-white">
            What Our Interns Say
          </h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Hear from past participants about their experience with the Kraf
            Technologies Internship Program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div
              ref={slidesRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full px-4"
                  style={{ flexBasis: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-[#121212] border border-neutral-500 rounded-lg shadow-md p-8 md:p-10 flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#18cb96]">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <Quote className="w-10 h-10 text-[#18cb96] opacity-50 mb-4" />
                      <p className="text-white italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-white">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  currentSlide === index ? "bg-[#18cb96] w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

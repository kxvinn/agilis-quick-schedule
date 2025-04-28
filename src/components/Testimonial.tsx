
import React from 'react';

const Testimonial = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-agilis-light p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm animate-fade-in">
          <div className="text-center mb-6">
            <div className="flex justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-agilis-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-6">
            "Agilis transformed how I run my barbershop. My clients love the easy booking process, and I've saved hours each week on scheduling."
          </blockquote>
          
          <div className="text-center">
            <p className="font-semibold text-agilis-dark">Michael Torres</p>
            <p className="text-gray-500">Owner, Elite Cuts Barbershop</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

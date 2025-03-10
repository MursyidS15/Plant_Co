"use client";
import DataTesti from "@/app/datatesti.json";
import { Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";  

const Testimonials = () => {
  const testimonials = DataTesti;

  return (
    <section id="testimonials" className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}  
                  height={80} 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="mt-10">
                <Quote className="mx-auto mb-4 text-green-600 w-8 h-8" />
                <p className="text-lg italic text-gray-700 mb-4">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <p className="text-green-700 font-semibold">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-12">
          <Link
            href="/alltesti"
            className="text-blue-700 font-semibold hover:text-green-900 transition-colors underline"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

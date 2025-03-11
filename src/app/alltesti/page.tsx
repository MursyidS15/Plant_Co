"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Backendless from "backendless";
import { Quote } from "lucide-react";

Backendless.initApp("2167F6E3-C338-42FE-9CFF-0DCB9BD261B6", "A1BDA551-D7BA-431D-AC4A-EAB56ABBE1F6");

interface Testimonial {
  objectId: string;
  image: string;
  name: string;
  feedback: string;
}

const AllTestimonials = React.memo(() => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = useCallback(async () => {
    try {
      const data = (await Backendless.Data.of("Testimonials").find()) as Testimonial[];
      setTestimonials(data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      setError("Gagal mengambil data dari server.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  if (loading) {
    return <p className="text-center text-green-700">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
          All Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.objectId}
              className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonial.image.startsWith("http") ? testimonial.image : "/placeholder.jpg"}
                  alt={`Foto ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                  loading="lazy" 
                  priority={false} 
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
      </div>
    </section>
  );
});

export default AllTestimonials;

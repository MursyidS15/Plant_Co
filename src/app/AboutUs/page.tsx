import React from "react";
import Image from "next/image";  // 🟢 Import Image dari next/image
import team from "@/app/data/page";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-6 md:px-12">
      {/* Company History */}
      <div className="flex flex-col items-center">
        <section id="about-us" className="py-16 bg-white px-4 text-center">
          <div className="container max-w-screen-md mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
              About Us
            </h2>
            <p className="text-base md:text-lg mb-6 text-gray-600 leading-relaxed">
              Founded in 2025, Plant Co. was born out of a passion for nature and a desire to transform everyday spaces into thriving green sanctuaries.
            </p>
            <p className="text-base md:text-lg mb-6 text-gray-600 leading-relaxed">
              Our journey began with a simple goal: to make gardening accessible and enjoyable for everyone. Over the years, we have grown into a trusted name in the gardening community.
            </p>
            <p className="text-base md:text-lg mb-6 text-gray-600 leading-relaxed">
              Our dedicated team of experts is passionate about helping you create beautiful and sustainable green spaces.
            </p>
          </div>
        </section>
      </div>

      {/* Our Team */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-600">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-transparent hover:border-green-500 hover:shadow-2xl transition-all duration-300 p-6 relative group hover:-translate-y-3"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                {/* 🟢 Ganti <img> Jadi <Image /> */}
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  width={96}       // 🟢 Tambah width
                  height={96}      // 🟢 Tambah height
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-black-500 text-sm mb-4">{member.title}</p>
              <p className="text-gray-700 transition-opacity duration-300 group-hover:opacity-80">
                {member.bio}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Culture */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Our Culture
        </h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto px-4 md:px-0">
          We believe that teamwork, innovation, and sustainability are at the heart of our culture. With a strong focus on the environment and employee well-being, we strive to create a positive and productive workplace.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

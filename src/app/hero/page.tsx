const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      

      {/* Overlay Gelap dan Konten Tengah */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/plant.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>
        <div className="text-center text-white px-4 space-y-4 relative z-10">
          <h1 className="text-3xl md:text-5xl mb-4 drop-shadow-lg">
            More Plant More Green Spaces
          </h1>
          <a
            href="https://youtu.be/LZhnCxG5c6s?si=cd4fqHeIUY6ugD-0"
            className="inline-flex items-center bg-white text-black hover:bg-gray-200 transition-colors py-2 px-4 rounded-full text-sm md:text-base shadow-md"
          >
            <span className="mr-2">▶</span> Houseplants Care Tips
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

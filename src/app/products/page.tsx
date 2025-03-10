"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";  // 🟢 Import Image dari next/image

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Indoor Plants",
      description: "Bring nature indoors with our wide range of indoor plants.",
      image:
        "https://cdn.plantssparkjoy.com/wp-content/uploads/2021/07/07114530/best-indoor-tree-plants-spark-joy-featured.jpeg",
    },
    {
      id: 2,
      name: "Gardening Tools",
      description: "High-quality tools to help you maintain your garden effortlessly.",
      image:
        "https://th.bing.com/th/id/OIP.BuJbV1hjcra1p13BB__6DAHaGK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Plant Care Products",
      description: "Organic fertilizers and care products for healthier plants.",
      image:
        "https://pf.nice-cdn.com/upload/image/product/large/default/botanopia-plant-care-set-1679625-en.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
          Our Products & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}  // 🟢 Lebar gambar (ubah sesuai kebutuhan)
                height={300} // 🟢 Tinggi gambar (ubah sesuai kebutuhan)
                className="w-full h-69 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-green-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link href={`/products/${product.id}`}>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  See More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Backendless from "@/backendlessconfig";

interface Product {
  objectId: string;
  name: string;
  price: string;
  image: string;
}

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id;

  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  
  const fetchProducts = useCallback(async () => {
    try {
      let data: Product[] = [];
      if (id === "1") {
        data = await Backendless.Data.of("IndoorPlants").find();
      } else if (id === "2") {
        data = await Backendless.Data.of("GardeningTools").find();
      } else if (id === "3") {
        data = await Backendless.Data.of("PlantCareProducts").find();
      }

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const savedSearch = localStorage.getItem(`searchQuery-${id}`);
    const savedSortOrder = localStorage.getItem(`sortOrder-${id}`);

    if (savedSearch) {
      setSearchTerm(savedSearch);
    }
    if (savedSortOrder) {
      setSortOrder(savedSortOrder as "asc" | "desc");
    }
  }, [id]);

  useEffect(() => {
    if (searchTerm) {
      localStorage.setItem(`searchQuery-${id}`, searchTerm);
    } else {
      localStorage.removeItem(`searchQuery-${id}`);
    }

    localStorage.setItem(`sortOrder-${id}`, sortOrder);

    const filtered = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filtered.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    setFilteredProducts(sortedProducts);
  }, [searchTerm, products, sortOrder, id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        {id === "1"
          ? "Indoor Plants"
          : id === "2"
          ? "Gardening Tools"
          : "Plant Care Products"}
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:border-green-500 transition-colors"
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        className="mb-8 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
      >
        <option value="asc">Price: Lowest to Highest</option>
        <option value="desc">Price: Highest to Lowest</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <div
              key={product.objectId}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow relative group"
            >
              {product.image ? ( 
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
              ) : (
                <Image
                  src="/fallback-image.png"
                  alt="Fallback Image"
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-green-700 text-lg font-bold mb-4">
                ${product.price}
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-4">
            No products found for &quot;{searchTerm}&quot;
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

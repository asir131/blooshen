"use client";
import { BatteryCharging, Car, Flashlight, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const carData = [
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
  // Add other car objects here as needed
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
];

const FeaturedCars = () => {
  const [selectedTab, setSelectedTab] = useState("Used");
  const [likedCars, setLikedCars] = useState<Set<number>>(new Set());

  const toggleLike = (index: number) => {
    setLikedCars((prevLikedCars) => {
      const newLikedCars = new Set(prevLikedCars);
      if (newLikedCars.has(index)) {
        newLikedCars.delete(index);
      } else {
        newLikedCars.add(index);
      }
      return newLikedCars;
    });
  };

  return (
    <main className="xl:container mx-auto px-2 md:px-4 py-10">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl md:text-3xl font-bold mb-6">Featured Cars</h1>
        <div className="flex space-x-2 mb-6">
          <button
            className={`px-3 md:px-4 py-1 md:py-2 rounded-full border ${selectedTab === "New"
                ? "bg-black text-white"
                : "bg-white text-black"
              }`}
            onClick={() => setSelectedTab("New")}
          >
            New
          </button>
          <button
            className={`px-3 md:px-4 py-1 md:py-2  rounded-full ${selectedTab === "Used"
                ? "bg-yellow-400 text-black"
                : "bg-white text-black border"
              }`}
            onClick={() => setSelectedTab("Used")}
          >
            Used
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {carData.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image
                src={car.image}
                alt={car.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{car.name}</h2>
              <Heart
                className={`w-5 h-5 cursor-pointer ${likedCars.has(index) ? "text-[#FFE135] " : "text-gray-400"
                  }`}
                onClick={() => toggleLike(index)}
              />
            </div>
            <p className="text-sm text-gray-500">
              {car.year} • {car.miles} miles
            </p>
            <div className="grid grid-cols-2 text-sm text-gray-600 my-2 gap-2">
              <span className="flex items-center gap-1">
                <Flashlight className="w-4 h-4" /> {car.hp} hp
              </span>
              <span className="flex items-center gap-1">
                <BatteryCharging className="w-4 h-4" /> {car.fuel}
              </span>
              <span className="flex items-center gap-1">
                <Car className="w-4 h-4" /> {car.transmission}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {car.location}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">
                ${car.price.toLocaleString()}
              </span>
              <Link href="/product-review">
                <button className="bg-yellow-200 hover:bg-yellow-300 text-black text-sm px-4 py-2 rounded-xl">
                  Check Availability
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href='/used-cars'>
          <button>
            <span className="text-blue-500 hover:underline mt-4">
              View All Cars
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default FeaturedCars;

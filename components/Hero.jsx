import React from "react";

export default function PetSupplies() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-yellow-50 p-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-amber-600 text-center mb-4">
        Quality Supplies for Your Furry Friends
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mb-6">
        From nutritious food to fun toys, we have everything your pets need to live their happiest, healthiest lives.
      </p>
      <button className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-md shadow-md mb-12">
        Shop Now
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dog Supplies */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
          <img src="/dog-icon.png" alt="Dog Supplies" className="mx-auto mb-4 h-16" />
          <h2 className="font-bold text-lg mb-2">Dog Supplies</h2>
          <p className="text-gray-600 text-sm">
            Premium food, toys, treats, and accessories for your canine companion.
          </p>
        </div>
        {/* Cat Supplies */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
          <img src="/cat-icon.png" alt="Cat Supplies" className="mx-auto mb-4 h-16" />
          <h2 className="font-bold text-lg mb-2">Cat Supplies</h2>
          <p className="text-gray-600 text-sm">
            Everything your feline friend needs, from scratching posts to catnip toys.
          </p>
        </div>
        {/* Bird Supplies */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
          <img src="/bird-icon.png" alt="Bird Supplies" className="mx-auto mb-4 h-16" />
          <h2 className="font-bold text-lg mb-2">Bird Supplies</h2>
          <p className="text-gray-600 text-sm">
            Cages, toys, feed, and perches for your feathered companions.
          </p>
        </div>
      </div>
    </div>
  );
}

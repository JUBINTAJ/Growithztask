
'use client'
import React from "react";
import { motion } from "framer-motion";

export default function PetSupplies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-yellow-50 p-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold text-amber-600 text-center mb-4"
      >
        Quality Supplies for Your Furry Friends
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-700 text-center max-w-2xl mb-6"
      >
        From nutritious food to fun toys, we have everything your pets need to live their happiest, healthiest lives.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-md shadow-md mb-12"
      >
        Shop Now
      </motion.button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
        >
          <img src="/dog-icon.png" alt="Dog Supplies" className="mx-auto mb-4 h-16" />
          <h2 className="font-bold text-lg mb-2">Dog Supplies</h2>
          <p className="text-gray-600 text-sm">
            Premium food, toys, treats, and accessories for your canine companion.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
        >
          <img src="/cat-icon.png" alt="Cat Supplies" className="mx-auto mb-4 h-16" />
          <h2 className="font-bold text-lg mb-2">Cat Supplies</h2>
          <p className="text-gray-600 text-sm">
            Everything your feline friend needs, from scratching posts to catnip toys.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
        >
          <img src="/bird-icon.png" alt="Bird Supplies" className="mx-auto mb-4 h-16" />
          <h2 className="font-bold text-lg mb-2">Bird Supplies</h2>
          <p className="text-gray-600 text-sm">
            Cages, toys, feed, and perches for your feathered companions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

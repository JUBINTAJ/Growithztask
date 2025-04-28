// components/FeaturedProducts.js
export default function FeaturedProducts() {
    const products = [
      {
        title: "Premium Dog Food",
        description: "Grain-free nutrition for all breeds",
        price: "$24.99",
        emoji: "🐾",
      },
      {
        title: "Interactive Cat Toy",
        description: "Keeps your cat engaged for hours",
        price: "$14.99",
        emoji: "🧶",
      },
      {
        title: "Cozy Pet Bed",
        description: "Ultra-soft comfort for restful sleep",
        price: "$39.99",
        emoji: "🐕‍🦺",
      },
      {
        title: "Durable Leash Set",
        description: "Strong and comfortable for daily walks",
        price: "$18.99",
        emoji: "🐕",
      },
    ];
  
    return (
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-8">🔧 Featured Products 🔧</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="border-2 border-teal-300 rounded-lg overflow-hidden">
              <div className="py-10 text-4xl">{product.emoji}</div>
              <div className="bg-yellow-50 py-6">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="text-orange-500 text-xl font-bold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
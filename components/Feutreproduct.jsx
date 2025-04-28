// components/WhyChooseUs.js
export default function WhyChooseUs() {
    const features = [
      {
        title: "Fast Delivery",
        description: "Free delivery on orders over $50, with most deliveries arriving within 1-2 business days.",
        emoji: "🚚",
      },
      {
        title: "Vet-Approved",
        description: "All our products are reviewed and approved by professional veterinarians.",
        emoji: "👩‍⚕️",
      },
      {
        title: "Premium Quality",
        description: "We source only the highest quality, eco-friendly products for your beloved pets.",
        emoji: "🏅",
      },
      {
        title: "Satisfaction Guarantee",
        description: "Not happy? We offer hassle-free returns and a 100% money-back guarantee.",
        emoji: "🔄",
      },
    ];
  
    return (
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
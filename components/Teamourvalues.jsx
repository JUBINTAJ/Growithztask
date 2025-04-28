 import { PawPrint, Hand, Heart, Users, CheckCircle } from "lucide-react";

export default function TeamAndValues() {
  return (
    <section className="bg-yellow-50 py-16 px-6">
       <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Pack</h2>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-orange-400 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24">
        {[
          {
            name: "Sarah Johnson",
            title: "Founder & CEO",
            desc: "Dog mom to three rescues and passionate about creating products that are good for pets and the planet.",
          },
          {
            name: "Mike Chen",
            title: "Product Development",
            desc: "Former veterinary technician with a knack for designing products that pets actually love.",
          },
          {
            name: "Lisa Park",
            title: "Sustainability Director",
            desc: "Environmental scientist ensuring every product meets our strict eco-friendly standards.",
          },
          {
            name: "Buddy",
            title: "Chief Happiness Officer",
            desc: "Our office dog who personally tests all new toys and treats before they hit the shelves.",
          },
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
            <p className="text-orange-500 font-semibold mb-4">{member.title}</p>
            <p className="text-gray-600 text-sm">{member.desc}</p>
          </div>
        ))}
      </div>

       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Pet Values</h2>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-orange-400 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: <PawPrint size={32} />,
            title: "Healthy Pets",
            desc: "We only use ingredients and materials that promote pet wellness and longevity.",
            bg: "bg-teal-300",
          },
          {
            icon: <Hand size={32} />,
            title: "Eco Products",
            desc: "Sustainable materials and packaging that minimize environmental impact.",
            bg: "bg-orange-300",
          },
          {
            icon: <Heart size={32} />,
            title: "Animal Welfare",
            desc: "Supporting rescue organizations and promoting adoption through our business model.",
            bg: "bg-teal-300",
          },
          {
            icon: <Users size={32} />,
            title: "Pet Community",
            desc: "Building connections between pet parents through events and education.",
            bg: "bg-orange-300",
          },
          {
            icon: <CheckCircle size={32} />,
            title: "Quality Guaranteed",
            desc: "Rigorously tested products that meet the highest standards for safety and durability.",
            bg: "bg-teal-300",
          },
        ].map((value, index) => (
          <div
            key={index}
            className={`${value.bg} p-6 rounded-lg shadow-md text-center text-white flex flex-col items-center`}
          >
            {value.icon}
            <h3 className="font-bold text-lg mt-4 mb-2">{value.title}</h3>
            <p className="text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

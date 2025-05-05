export default function JourneyTimeline() {
  const timeline = [
    {
      year: "2018",
      text:
        "Our founder, Sarah, adopted her first rescue dog and noticed the lack of sustainable pet products on the market.",
    },
    {
      year: "2019",
      text:
        "After months of research and planning, Paws & Tails launched with a small collection of eco-friendly toys and treats.",
    },
    {
      year: "2021",
      text:
        "We opened our first physical store in Portland, creating a community hub for pet lovers and their companions.",
    },
    {
      year: "2023",
      text:
        'Our "One for One" program launched, donating one product to animal shelters for every purchase made.',
    },
    {
      year: "Today",
      text:
        "We’re proud to serve pet parents nationwide with five stores and our popular online shop, while staying true to our sustainable mission.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-teal-100 to-white py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-cursive text-gray-800 mb-4">
          Paws & Tails
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Providing sustainable, high-quality pet supplies to help your furry friends live their best lives.
          <br />
          Every purchase supports animal shelters nationwide.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">
        Our Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-orange-300"></div>

        {timeline.map((item, index) => (
          <div key={index} className="mb-12 flex justify-between items-center w-full">
            {index % 2 === 0 ? (
              <>
                <div className="w-5/12 text-right">
                  <div className="bg-yellow-100 p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-orange-500 font-bold mb-2">{item.year}</h3>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                </div>
                <div className="w-1/12 flex justify-center relative">
                  <div className="w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </>
            ) : (
              <>
                <div className="w-5/12"></div>
                <div className="w-1/12 flex justify-center relative">
                  <div className="w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
                <div className="w-5/12 text-left">
                  <div className="bg-yellow-100 p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-orange-500 font-bold mb-2">{item.year}</h3>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

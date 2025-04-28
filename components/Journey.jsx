// components/JourneyTimeline.js
export default function JourneyTimeline() {
    return (
      <section className="bg-gradient-to-b from-teal-100 to-white py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-cursive text-gray-800 mb-4">Paws & Tails</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Providing sustainable, high-quality pet supplies to help your furry friends live their best lives.
            <br />
            Every purchase supports animal shelters nationwide.
          </p>
        </div>
  
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-8">Our Journey</h2>
  
        <div className="relative border-l-2 border-orange-300 ml-6">
          {/* Timeline Items */}
          <div className="mb-10 ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-sm w-full max-w-md">
              <h3 className="text-orange-500 font-bold mb-2">2018</h3>
              <p className="text-gray-700 text-sm">
                Our founder, Sarah, adopted her first rescue dog and noticed the lack of sustainable pet products on the market.
              </p>
            </div>
          </div>
  
          <div className="mb-10 ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-sm w-full max-w-md ml-auto">
              <h3 className="text-orange-500 font-bold mb-2">2019</h3>
              <p className="text-gray-700 text-sm">
                After months of research and planning, Paws & Tails launched with a small collection of eco-friendly toys and treats.
              </p>
            </div>
          </div>
  
          <div className="mb-10 ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-sm w-full max-w-md">
              <h3 className="text-orange-500 font-bold mb-2">2021</h3>
              <p className="text-gray-700 text-sm">
                We opened our first physical store in Portland, creating a community hub for pet lovers and their companions.
              </p>
            </div>
          </div>
  
          <div className="mb-10 ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-sm w-full max-w-md ml-auto">
              <h3 className="text-orange-500 font-bold mb-2">2023</h3>
              <p className="text-gray-700 text-sm">
                Our "One for One" program launched, donating one product to animal shelters for every purchase made.
              </p>
            </div>
          </div>
  
          <div className="ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-orange-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-sm w-full max-w-md">
              <h3 className="text-orange-500 font-bold mb-2">Today</h3>
              <p className="text-gray-700 text-sm">
                We’re proud to serve pet parents nationwide with five stores and our popular online shop, while staying true to our sustainable mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
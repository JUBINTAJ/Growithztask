export default function Customers() {
    return (
      <section className="bg-[#83D0CB] py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          🐾 What Our Customers Say 🐾
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md">
          <p className="italic text-gray-700 mb-6 relative">
            <span className="absolute left-0 top-0 text-orange-500 text-2xl"> \ </span>
            Since switching to Pawsome Supplies' premium dog food, my Labrador's coat is shinier than ever and he has so much more energy on our walks!
            <span className="absolute right-0 bottom-0 text-orange-500 text-2xl"> \ "</span>
          </p>
          <p className="text-teal-500 font-semibold">Sarah Johnson</p>
          <p className="text-gray-500 text-sm">Owner of Max, 5-year-old Labrador</p>
        </div>
  
        <div className="flex justify-center space-x-2 mt-8">
          <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
          <span className="w-3 h-3 bg-teal-400 rounded-full opacity-50"></span>
          <span className="w-3 h-3 bg-teal-400 rounded-full opacity-50"></span>
        </div>
      </section>
    );
  }
  
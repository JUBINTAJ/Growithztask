export default function Newsletter() {
    return (
      <section className="bg-yellow-700 py-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Join Our Pack!</h2>
        <p className="mb-6">Subscribe to our newsletter for pet care tips and exclusive offers</p>
  
        <div className="inline-block bg-yellow-100 text-teal-500 font-semibold py-2 px-6 rounded-full mb-6">
          Get 10% OFF your first order!
        </div>
  
        <div className="flex justify-center mt-4">
          <form className="flex bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 text-gray-700 focus:outline-none w-64"
            />
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-3"
            >
              Subscribe & Save
            </button>
          </form>
        </div>
      </section>
    );
  }
  
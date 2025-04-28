import { CreditCard, Wallet, DollarSign, ShoppingCart } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="bg-yellow-50 min-h-screen py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl text-teal-500 font-bold mb-2">Paws & Tails</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Checkout</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-400 mb-6">
            <ShoppingCart size={20} /> Your Cart
          </h3>

          <div className="space-y-6">
            {[
              { title: "Premium Dog Food - Chicken & Rice", subtitle: "5kg Bag", price: "$34.99", quantity: 1 },
              { title: "Squeaky Bone Toy", subtitle: "Medium, Blue", price: "$12.95", quantity: 2 },
              { title: "Adjustable Cat Collar with Bell", subtitle: "Pink", price: "$8.50", quantity: 1 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-200 w-16 h-16 rounded-lg"></div>
                  <div>
                    <h4 className="font-semibold text-gray-700">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <p className="text-orange-600 font-semibold">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-orange-300 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">-</button>
                  <span className="font-medium">{item.quantity}</span>
                  <button className="bg-orange-300 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-400 mb-4">
              <Wallet size={20} /> Order Summary
            </h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$69.39</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$5.55</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t mt-4">
                <span>Total</span>
                <span>$79.93</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-400 mb-6">
            <CreditCard size={20} /> Payment Method
          </h3>

          <div className="border border-teal-300 p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-700 font-medium">Credit/Debit Card</p>
              <div className="flex gap-2">
                <img src="/visa.png" alt="visa" className="w-8" />
                <img src="/mastercard.png" alt="mastercard" className="w-8" />
              </div>
            </div>
            <form className="space-y-3">
              <input type="text" placeholder="Card Number" className="w-full border rounded-lg p-2 text-sm focus:outline-none" />
              <div className="flex gap-2">
                <input type="text" placeholder="MM/YY" className="w-1/2 border rounded-lg p-2 text-sm focus:outline-none" />
                <input type="text" placeholder="123" className="w-1/2 border rounded-lg p-2 text-sm focus:outline-none" />
              </div>
              <input type="text" placeholder="Cardholder Name" className="w-full border rounded-lg p-2 text-sm focus:outline-none" />
            </form>
          </div>

          <div className="flex items-center p-4 border rounded-lg mb-4">
            <input type="radio" name="payment" className="mr-2" />
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <Wallet size={16} /> UPI
            </p>
          </div>

          <div className="flex items-center p-4 border rounded-lg mb-6">
            <input type="radio" name="payment" className="mr-2" />
            <p className="text-gray-700 font-medium flex items-center gap-2">
              <DollarSign size={16} /> Cash on Delivery
            </p>
          </div>

          <button className="bg-orange-300 hover:bg-orange-400 w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2">
            Place Order →
          </button>
        </div>
      </div>
    </div>
  );
}

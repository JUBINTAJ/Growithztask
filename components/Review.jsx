'use client'
import React from 'react';
import { Star } from 'lucide-react';


const reviews = [
  {
    id: '1',
    author: 'Sarah Johnson',
    avatar: 'S',
    rating: 5,
    product: 'Purchased Premium Dog Food',
    content: '"My picky labrador absolutely loves the premium kibble! The 48-hour delivery time has been a lifesaver. I never run out anymore. Shopping is always fast and well understood. Excellent customer service and commitment to adjust my delivery schedule."'
  },
  {
    id: '2',
    author: 'Michael Torres',
    avatar: 'M',
    rating: 5,
    product: 'Purchased Cat Tower & Toys',
    content: '"The pet tower was easy to assemble and incredibly sturdy. My two cats immediately took to it and now spend hours playing and napping on it. The catnip toy that came with it was a big hit too! Highly recommend this product."'
  },
  {
    id: '3',
    author: 'Jessica Williams',
    avatar: 'J',
    rating: 5,
    product: 'Purchased Dog Anxiety Vest',
    content: '"This anxiety vest has made a world of difference for my rescue pet during thunderstorms. The harshly amazing thing is the size chart was the quality is excellent. Taking off and putting on is easy, and my dog has started to get used to wearing it."'
  },
  {
    id: '4',
    author: 'David Chen',
    avatar: 'D',
    rating: 5,
    product: 'Purchased Aquarium Supplies',
    content: '"The water filter system I ordered works perfectly for my 50-gallon tank. Water clarity improved within days and my fish seem happier. The algae control tablets are effective as promised, and the plants are thriving! Will definitely order again."'
  },
  {
    id: '5',
    author: 'Amanda Patel',
    avatar: 'A',
    rating: 5,
    product: 'Purchased Small Animal Habitat',
    content: '"This guinea pig cage exceeded my expectations! It\'s spacious, easy to clean, and my piggies love the multiple levels. The bedding that came with it is super absorbent and also fantastic - much less odor than what I was using before."'
  },
  {
    id: '6',
    author: 'Robert Garcia',
    avatar: 'R',
    rating: 5,
    product: 'Purchased Dog Training Tools',
    content: '"These training treats have been perfect for our puppy classes. They\'re small enough for frequent rewarding and my German Shepherd absolutely loves them. The resealable bag keeps them fresh. Would like more options though!"'
  }
];

const TestimonialsSection  = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-medium text-gray-800 flex items-center justify-center gap-2">
          <span className="text-amber-400"><img src="/Vector.png" alt="" className='h-7' /></span>
          What Our Pet Parents Say
          <span className="text-teal-400">△</span>
        </h2>
        <p className="text-gray-600 mt-2">Real reviews from real pet lovers like you</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl font-semibold text-gray-800">4.8</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm">
          Based on 127 verified reviews
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-teal-400`}>
                {review.avatar}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{review.author}</h3>
                <p className="text-sm text-gray-500">{review.product}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.content}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="w-8 h-8 rounded-full bg-teal-400 text-white flex items-center justify-center">
          1
        </button>
        <button className="w-8 h-8 rounded-full text-gray-500 flex items-center justify-center hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 rounded-full text-gray-500 flex items-center justify-center hover:bg-gray-100">
          3
        </button>
        <button className="w-8 h-8 rounded-full text-gray-500 flex items-center justify-center hover:bg-gray-100">
          4
        </button>
        <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
          Next →</button>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          Share Your Experience
        </h3>
        <p className="text-gray-600 mb-4">
          Let us know how our products have helped your furry, feathery, or scaly friends!
        </p>
        <button className="bg-amber-400 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors">
          Leave a Review
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;

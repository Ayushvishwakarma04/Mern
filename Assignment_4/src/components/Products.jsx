import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { 
      id: 1, 
      name: 'Classic Watch', 
      price: '$49', 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/y/r/z/-original-imagphkzsajh8rjf.jpeg?q=70&crop=false',
      description: 'A timeless classic watch with leather strap and quartz movement',
      features: ['Water resistant', 'Leather strap', '2-year warranty']
    },
    { 
      id: 2, 
      name: 'Headphones', 
      price: '$29', 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/3/c/w/-original-imagqzfykr25c4yy.jpeg?q=70&crop=false',
      description: 'High-quality wireless headphones with noise cancellation',
      features: ['Bluetooth 5.0', '20-hour battery', 'Noise cancelling']
    },
    { 
      id: 3, 
      name: 'Sunglasses', 
      price: '$19', 
      image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/l/9/o/one-size-fits-all-matte-square-sunglass-irayz-original-imah3gzapuzg9y5x.jpeg?q=70&crop=false',
      description: 'Stylish polarized sunglasses with UV protection',
      features: ['UV400 protection', 'Polarized lenses', 'Lightweight frame']
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm p-4 h-96 flex flex-col transform transition-transform duration-300 hover:scale-105"
          >
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
            <div className="mt-auto">
              <p className="text-indigo-600 font-semibold">{product.price}</p>
            </div>
            <Link 
              to={`/product/${product.id}`}
              className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 text-center mt-10"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

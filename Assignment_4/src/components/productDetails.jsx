import React from 'react'
import { useParams, Link } from 'react-router-dom';

function productDetails() {
  const { id } = useParams();
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
    },{ 
        id: 3, 
        name: 'Sunglasses', 
        price: '$19', 
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/l/9/o/one-size-fits-all-matte-square-sunglass-irayz-original-imah3gzapuzg9y5x.jpeg?q=70&crop=false',
        description: 'Stylish polarized sunglasses with UV protection',
        features: ['UV400 protection', 'Polarized lenses', 'Lightweight frame']
      },
  ];
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="max-w-6xl mx-auto px-4 py-16 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link 
        to="/" 
        className="inline-block mb-6 text-indigo-600 hover:text-indigo-800"
      >
        ← Back to Products
      </Link>
      <div className="bg-white rounded-lg shadow-sm p-6 md:flex gap-8">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full md:w-1/2 h-64 object-cover rounded mb-6 md:mb-0" 
        />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-indigo-600 text-2xl font-semibold mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Features:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default productDetails

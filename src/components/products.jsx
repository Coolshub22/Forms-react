import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([]);

// FETCH DATA FROM ANA EXTERNAL SOURCE
// WE USE useEffect

useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => setProducts(data));
}, [])
  return (
        <div className='min-h-screen container mx-auto'>
        <div className='grid grid-cols-3 gap-5'>
            {products.map((product) => (
                <ProductCard
                 title={''}
                 image={''}
                 description={''}
                 category={''}
                 price={''}
                 rating={''}
                 key={product.id}
                 />
            ))}
            </div>
        </div>
    
  )
}

function ProductCard({title, image, description, category, price, rating}) {
    return (
        <div className='rounded-lg'>
            <img src={image}
             alt={title}
              className='m-full h-[150px] object-cover object-center' />

              <h2 className='text-lg line-clamp-2'>
                {title}
              </h2>
              <p className='font-medium text-gray-500'>{description}

              </p>
        </div>
    )
}

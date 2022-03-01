import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Products.css'



function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/shoes.php');
      const data = await response.json();
      console.log(data);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {
        products.map(product => (
          <div className='product-style' key={product.id}>
            <div className='card'>
            <article>
            <Link to={`/products/${product.id}`}><h1>{product.title}</h1></Link>
              <Link to={`/products/${product.id}`}><img src={product.url} alt='' height='400' width='400' /></Link>

              <p>{product.price} kr</p>

              <button>Lägg i kundvagnen</button>

            </article>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products
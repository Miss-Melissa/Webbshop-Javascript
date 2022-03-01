import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../styles/Product.css'


function Product() {
    const [product, setProduct] = useState({});
    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/shoes.php?id=' + params.id);
            const data = await response.json();
            console.log(data);

            setProduct(data);
        } catch(error) {
            console.log(error);
        }
    }

 useEffect(() => {
      const unsubscribe = fetchData(); //subscribe
      return unsubscribe; //unsubscribe
  });


    return (
      <div className='productpage-container' key={product.id}>
      <div className='productpage'>
      <div className='image-product'>
        <img src={product.url} alt='' height='400' width='400' />
      </div>
      <div className='title-product'>
        <h1>{product.title}</h1>
      </div>
      <div className='price-product'>
        <h3>{product.price} kr</h3>
      </div>

      <div className='info-product'>
        <p>{product.description}</p>
      </div>
      <div className='btn-position'>
        <button className='btn-product'>Lägg i kundvagnen</button>
        </div>
        </div>
        </div>
    )
}

export default Product
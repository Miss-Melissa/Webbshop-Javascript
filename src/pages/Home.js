import React from 'react'
import HomePageShoes from '../images/Shoes-Homepage.jpeg'
import '../styles/Home.css'


function Home() {
  return (
    <>
      <div className='homePage-container'>
        <div className='img-div'>
          <img className='img' src={HomePageShoes} alt='Background' height='550' width='1500px' />
        </div>
      </div>
    </>
  )
}

export default Home
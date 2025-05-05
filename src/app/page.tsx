import React from 'react'
import Hero from '../../components/Hero'
import Feutreproduct from '../../components/Feutreproduct'
import Product from '../../components/product'
import Customer from '../../components/Custumer'
import Joinpack from '../../components/joinourpack'

function page() {
  return (
    <div>

      <Hero/>
      <Product/>
      <Feutreproduct/>
      <Customer/>
      <Joinpack/>
    </div>
  )
}

export default page
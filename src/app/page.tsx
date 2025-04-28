import React from 'react'
import Hero from '../../components/Hero'
import Feutreproduct from '../../components/Feutreproduct'
import Productts from '../../components/Productts'
import Customer from '../../components/Custumer'
import Joinpack from '../../components/joinourpack'

function page() {
  return (
    <div>

      <Hero/>
      <Productts/>
      <Feutreproduct/>
      <Customer/>
      <Joinpack/>
    </div>
  )
}

export default page
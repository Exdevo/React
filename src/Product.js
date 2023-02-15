import React from 'react'
import ItemDescription from './ItemDescription'

function Product({name,description,price}) {
  return (
    <div>
       {/* <p>{name}</p>
       <p>{description}</p> */}
       <ItemDescription name={name} description={description}/>
       <p>${price}</p>
    </div>
    )
}

export default Product
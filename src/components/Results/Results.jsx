import React, { useState, useEffect} from 'react'
// rafce

const Results = ({products, userPreferences}) => {
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{

    })

    return (
        <div>
          {filteredProducts.map((product)=>(
              <div> 
                  <h1>Results</h1>
                  <h1>{product.product_name}</h1>
                  <p>{product.description}</p>
              </div>
          ))}  
        </div>
    )
}

export default Results

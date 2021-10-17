import React, { useState, useEffect} from 'react'
import "./Results.css";

const Results = ({products, userPreferences}) => {
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        skinType();
    },[])

    async function skinType(){
        if(userPreferences.skinType=== "Normal"){
            skinType = products.filter((product)=> product.category==="Moisturizer")
            
        } else if (userPreferences.skinType=== "Combination"){
            skinType = products.filter((product)=> product.category==="Serum")

        } else {
            skinType = products.filter((product)=> product.category==="Exfoliant")

        }
        setFilteredProducts(skinType)
    }
    return (
        <div>
        <h1>Product Recommendations</h1>
        <h1 >🌤 Morning Routine: </h1>
        <div className="d-flex justify-content-center mb-3">
          {filteredProducts.map((product)=>(
              <div> 
                  <h1>{product.product_name}</h1>
                  <p>{product.description}</p>
              </div>
          ))}  
        </div>
        <h1> ★ Night Routine: </h1>
        {filteredProducts.map((product)=>(
            <h1>{product.product_name}</h1>
        ))}
        </div>
    )
}

export default Results

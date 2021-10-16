import React, { useState, useEffect} from 'react'
// rafce

const Results = ({products, userPreferences}) => {
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        // let skinType;
        // if(userPreferences.skinType=== "Normal"){
        //     skinType = products.filter((product)=> product.category==="Moisturizer")
            
        // } else if (userPreferences.skinType=== "Combination"){
        //     skinType = products.filter((product)=> product.category==="Serum")

        // } else {
        //     skinType = products.filter((product)=> product.category==="Exfoliant")

        // }
        // setFilteredProducts(skinType)
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

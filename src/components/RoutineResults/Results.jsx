import React, { useState, useEffect} from 'react'
import "./Results.css";

const Results = ({products, userPreferences}) => {
    const [filterMorningProducts, setfilterMorningProducts] = useState([]);
    const [filterNightProducts, setFilterNightProducts] = useState([])

    useEffect(()=>{
        skinType();
        userGoals()
    },[])

    async function skinType(){
        if(userPreferences.skinType=== "Normal"){
            skinType = products.filter((product)=> product.category==="Normal")
            
        } else if (userPreferences.skinType=== "Combination"){
            skinType = products.filter((product)=> product.category==="Combination")

        } else if (userPreferences.skinType=== "Sensitive"){
        skinType = products.filter((product)=> product.category==="Sensitive")

        } else {
            skinType = products.filter((product)=> product.category==="Oily")

        }
        setfilterMorningProducts(skinType)
    }

    async function userGoals(){
        if(userPreferences.userGoals=== "Calm Redness"){
            userGoals = products.filter((product)=> product.category==="Normal")
            
        } else if (userPreferences.userGoals=== "Lighten Hyperpigmentation"){
            userGoals = products.filter((product)=> product.category==="Combination")

        } else if (userPreferences.userGoals=== "Hydrate and Moisturize"){
        userGoals = products.filter((product)=> product.category==="Sensitive")

        } else {
            userGoals = products.filter((product)=> product.category==="Oily")

        }
        setFilterNightProducts(userGoals)
    }

    return (
        <div>
        <h1>Product Recommendations</h1>
        <div className="card"></div>

        <h1 >🌤 Morning Routine: </h1>
        <div className="">
          {filterMorningProducts.map((product)=>(
              <div> 
                  <h2>{product.product_name}</h2>
              </div>
          ))}  

        </div>
        <div className=""></div>
        <h1> ★ Night Routine: </h1>
        {filterNightProducts.map((product)=>(
            <h2>{product.product_name}</h2>  
        ))}
        </div>
    )
}

export default Results

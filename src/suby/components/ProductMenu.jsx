import React, { useState, useEffect } from 'react'
import { API_URL } from '../Api'
import { useParams } from 'react-router-dom'
import TopBar from './TopBar'

const ProductMenu = () => {
    const [products, setProducts] = useState([])
    const {firmId}=useParams()
    const {firmName}=useParams()
    const productHandler=async()=>{
        try {
            const res=await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductData=await res.json()
            setProducts(newProductData.products)
            console.log("this is product data",newProductData)
        } catch (error) {
            alert("failed to fetch data")
            console.error("failed to fetch data",error)
        }
    }
    useEffect(()=>{
        productHandler()
    },[])
  return (
    <>
    <TopBar />
    <section className='productSection'>
        <h3>{firmName}</h3>
        {products.map((apple) => {
            return(
                <div className='productBox'>
                    <div>
                    <div><strong>{apple.name}</strong></div>
                    <div>{apple.price}</div>
                    <div>{apple.description}</div>
                    </div>
                    <div className='productGroup'>
                        <img src={`${API_URL}/uploads/${apple.image}`} />
                        <div className='addButton'>ADD</div>                    
                    </div>
                </div>
            )
            
        })}
    </section>
    </>
  )
}

export default ProductMenu

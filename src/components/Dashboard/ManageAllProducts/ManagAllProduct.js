import React, { useEffect, useState } from 'react';
import './ManageAllProduct.css'

const ManagAllProduct = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [isDeleted, setDeleted] = useState(null)
    useEffect(() => {
      fetch("http://localhost:5000/allProducts")
        .then((res) => res.json())
        .then((data) => setAllProduct(data));
    }, [[isDeleted]]);

    console.log(allProduct)
    const handleDelete = id => {
        const url = `http://localhost:5000/deleteProduct/${id}`
        console.log(url)
        fetch(url,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        })
        .then(res=>res.json())
        .then(result => {
            if(result.deleteCount){
                alert('deleted')
                setDeleted(true)
            }
            else{
                setDeleted(false)
            }
        })
    }

    return (
        <div>
        <h1>Manage All allProduct</h1>
        <div className="all-products">
           <div className="container">
           <div className="row text-center">
                {
                   allProduct.map(pd=>(
                    <div className="col-md-4">
                        <div className="product border border p-2 m-2">
                            <h5><img className="img" src={pd?.image} alt="" /></h5>
                            <h5>Name : {pd?.name}</h5>
                            <h5>Description :{pd?.description}</h5>
                            <button onClick={()=>handleDelete(pd?._id)} className="btn btn-primary m-2">Delete</button>
                          
                              <button className="btn btn-primary m-2">Update</button>
                        
                            {/* <button className="btn btn-danger m-2">Buy Now</button> */}
                        </div>
                    </div>
                   )) 
                }
            </div>
           </div>
        </div>
    </div>
    );
};

export default ManagAllProduct;
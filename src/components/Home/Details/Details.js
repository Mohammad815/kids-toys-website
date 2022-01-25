import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/useAuth';

const Details = () => {
    const {user} = useAuth();
    console.log(user)
    const { productId } = useParams();
    const [product, setProdcut]=useState({})

    const { register, handleSubmit, watch,
        formState: { errors }, } = useForm();
        const onSubmit = (data) => {
            data.email = user?.email;
            data.status = "pending";
            fetch("https://sheltered-lake-09229.herokuapp.com/addOrders", {
              method: "POST",
              headers: { "content-type": "application/json"},
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) => console.log(result));
            console.log(data);
          };

    useEffect(() => {
        fetch(`https://sheltered-lake-09229.herokuapp.com/singleProduct/${productId}`)
          .then((res) => res.json())
          .then((data) => setProdcut(data));
      }, []);
      console.log(product)
    return (
        <div>
        <div className="details-container">
          <div className="row container">
            <div className="col-md-6 p-3">
              <img className="w-100 h-50 mb-2" src={product.image} alt="" />
              <p> Details: {product?.description}</p>
              <h3>Name: {product?.name}</h3>
              <h3>Price:  {product?.price}</h3>
            </div>
            <div className="col-md-6 p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  placeholder="UserEmail"
                  defaultValue={user?.email}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={product?.name}
                  className="p-2 m-2 w-100 input-field"
                />
  
                <input
                  {...register("description")}
                  defaultValue={product?.description}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />
  
                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  defaultValue={product?.image}
                  className="p-2 m-2 w-100 input-field"
                />
  
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={product?.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />
  
                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />
  
                {errors.exampleRequired && <span>This field is required</span>}
  
                <input
                  type="submit"
                  value="Order now"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;
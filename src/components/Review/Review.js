import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Context/useAuth";

const Review = () => {
    const { register, handleSubmit} = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
    return (

        <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="User Name"
          value={user?.displayName}
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
       className="submit-btn btn btn-primary fs-3 m-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
        
    );
};

export default Review;



    
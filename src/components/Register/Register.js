import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
    const { handleUserRegister } = useFirebase();
    const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password,data.name,history);
    console.log(data);
  };
    return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
      <Link className="navLink" to="/login"> <button>Already Registered please go to Login</button></Link>
    </div>
    );
};

export default Register;
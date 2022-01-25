import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
    const { handleUserRegister } = useFirebase();
    const history = useHistory();
  const { register, handleSubmit  } = useForm();

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password,data.name,history);
    console.log(data);
  };
    return (
        <div className="m-5">
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
          className="submit-btn btn btn-primary w-50 fs-5 m-3"
          type="submit"
          value="Register"
        />
      </form>
      <Link  style={{ textDecoration: 'none' }} className="navLink" to="/login"> <h3>Already Registered? please go to Login</h3></Link>
    </div>
    );
};

export default Register;
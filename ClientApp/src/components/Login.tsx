import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginStart } from "../redux/auth/auth.actions";

interface LoginProps {}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Login: React.FC<LoginProps> = ({}) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target;
    const { value, name } = target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);
    dispatch(loginStart(formData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={values.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='passsword'>Password</label>
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Login</button>
    </Form>
  );
};

export default Login;

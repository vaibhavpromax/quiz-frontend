import React, { useState } from "react";
import styles from "./login.module.css";
import Container from "../../components/Container/Container";
import { Input } from "@mui/material";
import Button from "../../components/Button/Button";
const Login = () => {
  const [loginData, setLoginData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  return (
    <div className={styles.login}>
      <Container className={styles.loginContainer}>
        <label className={styles.user}>Username</label>
        <input
          value={loginData.username}
          className={styles.input}
          onChange={(e) => {
            setLoginData({ ...loginData, username: e.target.value });
          }}
        />
        <label className={styles.pass}>Password</label>
        <input
          className={styles.input}
          value={loginData.password}
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
        />
        <Button>Login</Button>
        <p className={styles.forget}> Forgot password</p>
      </Container>
    </div>
  );
};

export default Login;

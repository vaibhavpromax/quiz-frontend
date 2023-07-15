import React, { useState } from "react";
import styles from "./signup.module.css";
import Container from "../../components/Container/Container";
import { Input } from "@mui/material";
import Button from "../../components/Button/Button";
import { File } from "buffer";
const Login = () => {
  const [loginData, setLoginData] = useState<{
    password: string;
    name: string;
    class: number;
    country: string;
    profile_pic: any;
  }>({
    name: "",
    class: 1,
    country: "",
    profile_pic: null,
    password: "",
  });

  return (
    <div className={styles.signup}>
      <Container className={styles.signcontainer}>
        <label className={styles.user}>Name</label>
        <input
          value={loginData.name}
          className={styles.input}
          onChange={(e) => {
            setLoginData({ ...loginData, name: e.target.value });
          }}
        />
        <label className={styles.pass}>Password</label>
        <input
          className={styles.input}
          value={loginData.password}
          type="password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
        />
        <label className={styles.user}>Class</label>
        <input
          value={loginData.class}
          className={styles.input}
          type="number"
          onChange={(e) => {
            setLoginData({ ...loginData, class: e.target.value });
          }}
        />
        <label className={styles.pass}>Country</label>
        <input
          className={styles.input}
          value={loginData.country}
          onChange={(e) => {
            setLoginData({ ...loginData, country: e.target.value });
          }}
        />
        <label className={styles.user}>Avatar</label>
        <input
          value={loginData.profile_pic}
          type="file"
          className={styles.input}
          onChange={(e) => {
            setLoginData({ ...loginData, profile_pic: e.target.value });
          }}
        />

        <Button>Signup</Button>
      </Container>
    </div>
  );
};

export default Login;

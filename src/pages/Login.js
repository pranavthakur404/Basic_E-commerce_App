import React, { useEffect } from "react";
import Container from "../components/Container";
import styles from "../pages_css/Login.module.css";
import { useAuth } from "../contexts/AuthProvider";
import {
  Navigate,
  redirect,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Login() {
  const { isLogin, setIsLogin } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const prevPath = searchParams.get("returnTo") || "/";

  useEffect(() => {
    navigate(prevPath, { replace: true });
  }, [isLogin]);

  function handleClick() {
    setIsLogin(true);
  }
  return (
    <div className={styles.login}>
      <Container>
        <h2>Click Button to Login</h2>
        <button onClick={handleClick}>Login</button>
      </Container>
    </div>
  );
}

export default Login;

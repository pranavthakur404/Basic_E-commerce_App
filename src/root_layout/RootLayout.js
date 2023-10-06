import React from "react";
import styles from "../pages_css/RootLayout.module.css";
import Container from "../components/Container";
import { GiPositionMarker } from "react-icons/gi";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { useAuth } from "../contexts/AuthProvider";
import logo from "../Iimages/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useNavigation } from "react-router-dom";

function RootLayout() {
  const navigation = useNavigation();

  const { isLogin, setIsLogin } = useAuth();
  function handleLogout() {
    setIsLogin(false);
  }
  function handleLogin() {
    setIsLogin(true);
  }
  return (
    <>
      <div className={styles.header}>
        <Container>
          <div className={styles.topSection}>
            <ul>
              <li>
                <GiPositionMarker />
                ABC Building, 5th Floor, Zyz Street
              </li>
              <li>
                <BsFillTelephoneFill /> (123) 456-7980
              </li>
              <li>
                <BsFillEnvelopeFill /> support@support.com
              </li>
            </ul>

            {isLogin ? (
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className={styles.loginBtn} onClick={handleLogin}>
                Login
              </button>
            )}
          </div>
          <div className={styles.nav}>
            <img src={logo} alt="logo" />
          </div>
        </Container>
        <div className={styles.bottomSection}>
          <ul>
            <li>
              <NavLink to="/">
                <AiFillHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <BsCartCheckFill /> Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <main>
        {navigation.state == "loading" ? <h1>Loading...</h1> : <Outlet />}
      </main>
    </>
  );
}

export default RootLayout;

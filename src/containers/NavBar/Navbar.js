import React from "react";
import { Avatar, Button } from "@chakra-ui/react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  auth,
  logout,
} from "../../../firebase";


import styles from "./Navbar.module.css";
import { useStoreState } from "easy-peasy";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Navbar({ username }) {
  const size = useWindowSize();
  const [user, loading,error] = useAuthState(auth);
  let login_logout_btn = "";
  let dashboard_btn = "";
  const router = useRouter();
  
  if(user) {
    login_logout_btn = (
      <div className="user_part_nav" style={{display: "inline-flex" , alignItems:'center' ,columnGap:'25px'}}>
        {"Hello, " + username}
        <div>
          <Avatar name={username} src="https://bit.ly/dan-abramov" />
        </div>
        <Button onClick={function(e){logout(); router.push("/auth/Login")}}> Logout</Button>
      </div>
    );

    dashboard_btn = (
      <div><Button onClick={function(e){router.push("/Dashboard/Dashboard")}}> Dashboard</Button></div>
    );
    
  }
  else{
    login_logout_btn = (
      <Button
        onClick={function(e){ router.push("/auth/Login")}}
      > Login</Button>
    );
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.inside}>
        <div className={styles.logo}>booktubes.club</div>
        <div className={styles.links}>
          {size === "lg" ? (
            <>
              <div><Button onClick={function(e){router.push("/")}}> Home</Button></div>
              {dashboard_btn}
              <div>About Us</div>
              <div>{login_logout_btn}</div>            
            </>
          ) : null}
          
        </div>
      </div>
    </div>
  );
}

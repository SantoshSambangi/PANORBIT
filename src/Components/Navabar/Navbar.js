import React from "react";
import styles from "./styles.module.css";
import { userProfileData } from "../../CommonData/CommonData";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarMenuItems}>
        {userProfileData &&
          userProfileData.map((item, index) => {
            return (
              <div key={index} className={styles.userProfileOptionsBlock}>
                <p
                  className={styles.userProfileOption}
                  onClick={() => {
                    if (index === 0) {
                      navigate("/");
                    } else if (index === 1) {
                      navigate("/post");
                    } else if (index === 2) {
                      navigate("/gallery");
                    } else if (index === 3) {
                      navigate("/todo");
                    }
                  }}
                >
                  {item.userProfileOption}
                </p>
                <div
                  className={`${styles.userProfileDivider} ${
                    index === 3 ? styles.hideDivider : ""
                  }`}
                >
                  {item.userProfileDivider}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;

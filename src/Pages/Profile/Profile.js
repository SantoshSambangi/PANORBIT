import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../Components/Navabar/Navbar";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileNavbarContainer}>
        <Navbar />
      </div>
      <div className={styles.profileHeaderBlock}>
        <p className={styles.userProfileHeading}>Profile</p>
        <div className={styles.profileImgBlock}>
          <img
            src={
              "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
            }
            alt=""
            className={styles.imageWidth}
          />
        </div>
        <p></p>
      </div>
      <div className={styles.profileDividerBlock}></div>
      <div className={styles.profileDetailsBlock}></div>
    </div>
  );
};

export default Profile;

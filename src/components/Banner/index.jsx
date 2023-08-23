/* eslint-disable react/prop-types */

import styles from "./Banner.module.css";

export default function Banner({ image, title, subtitle, description }) {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)), url(${image})`,
        }}
      >
        <div className={styles.banner_left}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.subtitle}>
            <h2>{subtitle}</h2>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.player}>
          <img src={image} alt="foto video" />
        </div>
      </div>
    </>
  );
}

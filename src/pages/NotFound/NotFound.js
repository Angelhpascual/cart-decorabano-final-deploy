import React from "react";
import Layout from "../../components/Layout";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <Layout>
      <div className={`${styles.center}  mt-5 p-3 `}>
        <h1>404</h1>
        <p>Oage Not Found</p>
      </div>
    </Layout>
  );
};

export default NotFound;

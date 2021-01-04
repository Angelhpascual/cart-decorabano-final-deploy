import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/minty/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title + " - React Cart" : "React"}</title>
        <meta
          name="description"
          content={description || "React Cart for decorabaño"}
        />
      </Helmet>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

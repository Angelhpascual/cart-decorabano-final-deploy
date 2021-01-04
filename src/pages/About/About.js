import React from "react";
import Layout from "../../components/Layout";
import { GitHubIcon } from "../../components/icons";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5 p-3">
        <h1>About</h1>
        <p className="mt-3">
          This project was built for test purposes using{" "}
          <strong>Context API</strong> by angelhpascual for Decorabaño.com.
        </p>

        <a
          className="btn btn-primary mt-4"
          href="https://github.com/Angelhpascual/cart-decorabano-final-deploy"
        >
          <GitHubIcon width={"18px"} />{" "}
          <span className="ml-2 mr-4">Visit Repo</span>
        </a>
      </div>
    </Layout>
  );
};

export default About;

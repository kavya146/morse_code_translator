import React from "react";
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";

function Page() {
  return (
    <div>
      <Header />
      <div style={{ height: "20vh" }}></div>
      <Content />
      <Footer />
    </div>
  );
}

export default Page;

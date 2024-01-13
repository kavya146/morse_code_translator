import React from "react";
import Header from "./header/Header";
import Content from "./content/Content";

function Page() {
  return (
    <div>
      <Header />
      <div style={{ height: "20vh" }}></div>
      <Content />
    </div>
  );
}

export default Page;

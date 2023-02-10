import "./index.css";
import "./fontface.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

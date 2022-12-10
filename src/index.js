import "./index.css";
import "./fontface.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Talent from "./Talent";
import Core from "./Core";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <HashRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/core" element={<Core />} />
                <Route path="/talent" element={<Talent />} />
            </Route>
        </Routes>
    </HashRouter>
);

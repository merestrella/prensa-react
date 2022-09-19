import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/iu/Footer/Footer";
import { Header } from "./components/iu/Header/Header";
import "./index.css";
import { Noticias } from "./components/iu/Noticias/Noticias";
import { Nav } from "./components/iu/Nav/Nav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Noticias />
    <Footer />
  </React.StrictMode>
);

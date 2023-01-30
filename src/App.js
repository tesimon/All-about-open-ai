import React from "react";
import "./App.css";
import { Brand, Cta, Navbar } from "./components";
import {
  Blogs,
  Features,
  Footers,
  Headers,
  Possibilites,
  Whatgpt3,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Headers />
      </div>
      <div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibilites />
        <Cta />
        <Blogs />
        <Footers />
      </div>
    </div>
  );
}

export default App;

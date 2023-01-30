import React from "react";
import "./brand.css";
import { atlasian, dropbox, Google, shopify, slack } from "./imports";
export default function Brand() {
  return (
    <div className="gpt3__brand-section">
      <div>
        <img src={Google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={atlasian} alt="atlasian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

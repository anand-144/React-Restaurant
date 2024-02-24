import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Belive In</h1>

      <div className="app_chef-content">
        <div className="app_chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            molestiae hic impedit. Magni odit adipisci aliquid facilis
            necessitatibus, ab itaque.
          </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corrupti?</p>
      </div>

      <div className="app__chef-sign">
        <p>Roger Ma</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.signature}  alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;

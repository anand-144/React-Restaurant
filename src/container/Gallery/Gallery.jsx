import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300; //
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, modi
          aperiam iure obcaecati veritatis voluptatibus facilis tempore omnis
          magnam odio aliquid! Deleniti aut dolorem inventore excepturi, alias
          modi qui sint.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_conatiner" ref={scrollRef}>
          {galleryImages.map((images, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_images-${index + 1}`}
            >
              <img src={images} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />{" "}
          {/* Change 'left' to 'right' */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

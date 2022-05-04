import React from "react";
import { products, items } from "../../utility/Data";
import "./Homepage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "./sliderImages/image1.jpg";
import image2 from "./sliderImages/image2.jpg";
import image3 from "./sliderImages/image3.jpg";
import image4 from "./sliderImages/image4.jpg";
import image5 from "./sliderImages/image5.jpg";
import image6 from "./sliderImages/image6.jpg";
import Product from "../../Components/Product/Product";
import SimpleImageSlider from "react-simple-image-slider";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CoolPage from "../../Components/Back/ScrolltoTop";
import Footer from "../../Components/Footer/Footer";
export default function Homepage() {
  const images = [
    { url: "https://m.media-amazon.com/images/I/51FKuOMBr3L._SX1500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51hEsstygjL._SX1500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61Qi5GMxgNL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71XH8AdrcOL._SX3000_.jpg" },
    { url: image1 },
    { url: image2 },
    { url: image4 },
    { url: image5 },
    { url: image3 },
    { url: image6 },
  ];
  return (
    <div className="main_homepage_div">
      <div className="homepage_firstdiv_heading">
        &nbsp;
        <DehazeIcon className="DehazeIcon" />
        {items.map((item, index) => (
          <p key={index} className="homepage_items">
            {item}
          </p>
        ))}
      </div>
      <div className="homepage_second_div">
        <div className="homepage_imageSlider_container">
          <div style={{ margintop: "10px" }}>
            <SimpleImageSlider
              width={1350}
              height={504}
              images={images}
              showNavs={true}
            />
          </div>

          <div className="homepage_products_show">
            {products.slice(0, 3).map(item => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                specification={item.specification}
                rating={item.rating}
                price={item.price}
                detail={item.detail}
                image={item.image}
              />
            ))}
          </div>
          <div>
            <h1>&nbsp; &nbsp; &nbsp;Some Products by Categories:-</h1>
            <Carousel>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71s8qpa4F6L._AC_SY200_.jpg"
                  style={{ width: "300px", height: "300px" }}
                />
                <p className="legend">
                  <h1>Books and other Educational Stuff</h1>
                </p>
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/51E7YrPBktL._AC_SY400_.jpg"
                  style={{ width: "300px", height: "300px" }}
                />
                <p className="legend">
                  <h1>Detergents and Soaps</h1>
                </p>
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/61ZlwXsG7nL._AC_SY200_.jpg"
                  style={{ width: "300px", height: "300px" }}
                />
                <p className="legend">
                  <h1>Computer and Peripherals</h1>
                </p>
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/716j4-UMkKL._AC_SY200_.jpg"
                  style={{ width: "300px", height: "300px" }}
                />
                <p className="legend">
                  <h1>Furniture</h1>
                </p>
              </div>
            </Carousel>{" "}
          </div>
          <div className="homepage_products_show">
            {products.slice(3, 6).map(item => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                specification={item.specification}
                rating={item.rating}
                price={item.price}
                detail={item.detail}
                image={item.image}
              />
            ))}
          </div>

          <div className="homepage_back_to_end" style={{ marginTop: "10px" }}>
            <Footer />
            <CoolPage />
          </div>
        </div>
      </div>
    </div>
  );
}

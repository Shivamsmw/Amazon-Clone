import React from "react";
import { useNavigate } from "react-router";
import { products, items } from "../../utility/Data";
import "./Homepage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Search_Box from "../../Components/Search_Box/Search_Box";
import { render } from "react-dom";
import image1 from "./sliderImages/image1.jpg";
import image2 from "./sliderImages/image2.jpg";
import image3 from "./sliderImages/image3.jpg";
import image4 from "./sliderImages/image4.jpg";
import image5 from "./sliderImages/image5.jpg";
import image6 from "./sliderImages/image6.jpg";
import { Button } from "@mui/material";
import Product from "../../Components/Product/Product";
import SimpleImageSlider from "react-simple-image-slider";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CoolPage from "../../Components/Back/ScrolltoTop";
import Footer from "../../Components/Footer/Footer";
import { SearchContext } from "../../Context/Context";
export default function Homepage() {
  const { search, sortArray, handleSort } = React.useContext(SearchContext);
  const navigate = useNavigate();
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
  const sortDessending = () => {
    let varw = sortArray;
    handleSort(varw.sort((a, b) => b.price - a.price));
    navigate("/");
  };
  const sortAssending = () => {
    let abc = sortArray;
    handleSort(abc.sort((a, b) => a.price - b.price));
    navigate("/");
  };

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

          {search.length > 0 ? (
            <div>
              <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Your Search Result:-</h2>
              <Search_Box />
            </div>
          ) : (
            <></>
          )}
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
          <div className="sort_functionality">
            <div>
              <Button variant="outlined" onClick={sortAssending}>
                Sort Products By Increasing Price
              </Button>
              <Button variant="outlined" onClick={sortDessending}>
                Sort Products By Decreasing Price
              </Button>
            </div>
          </div>
          <div className="homepage_products_show">
            {sortArray.slice(0, 3).map(item => (
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

          <div className="homepage_products_show">
            {sortArray.slice(3, 6).map(item => (
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

          <div className="homepage_products_show">
            {sortArray.slice(6, 9).map(item => (
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

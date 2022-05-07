import React from "react";
import "./Product_Details.css";
import { useParams } from "react-router";
import { products } from "../../utility/Data";
import StarRateIcon from "@mui/icons-material/StarRate";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/action";
export default function Product_Details() {
  const { id } = useParams();
  let individualProduct = products.find(item => item.id === id);
  const dispatch = useDispatch();
  const handleCartProducts = () => {
    let items = {
      id: individualProduct.id,
      title: individualProduct.title,
      image: individualProduct.image,
      price: individualProduct.price,
      rating: individualProduct.rating,
      specification: individualProduct.specification,
      detail: individualProduct.detail,
    };
    dispatch(addtoCart(items));
  };
  return (
    <div className="pd_main_div">
      <img
        className="pd_banner_image"
        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        alt=""
      />
      <div>
        <div className="pd_individual_product">
          <img
            src={individualProduct.image}
            className="pd_individual_image"
            alt="image"
          />
          <div className="pd_individual_information">
            <div className="pd_individual_title">{individualProduct.title}</div>
            <div className="pd_individual_rating">
              {Array(individualProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <StarRateIcon sx={{ color: "yellow" }} />
                  </p>
                ))}
            </div>
            <p className="pd_individual_price">
              Price:{" "}
              <strong>
                <CurrencyRupeeIcon />
              </strong>
              <strong>{individualProduct.price}</strong>
            </p>
            <div className="pd_individual_specify">
              <h4>Specification</h4>
              {individualProduct.specification &&
                individualProduct.specification.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
            </div>
            <div className="pd_individual_desc">
              <h4>Product Description</h4>
              <p>{individualProduct.detail}</p>
            </div>
            <button onClick={handleCartProducts}>
              <i>
                <ShoppingCartIcon />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

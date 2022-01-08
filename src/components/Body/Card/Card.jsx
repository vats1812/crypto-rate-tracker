import React from "react";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
import "./Card.css";
export default function Card(props) {
  const {
    id,
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange,
    priceChangeAmt,
  } = props;
  return (
    <div>
      <div
        className="card_cont"
        key={id}
        style={{ background: `url("${image}") no-repeat center center` }}
      >
        <div className="card_cont2">
          <img src={image} alt={`${name}`} className="card_logo" />
          <div className="card_title">
            <h1 className="title_title">{name}</h1>
            <p className="title_symbol">{symbol}</p>
          </div>
          <p className="card_price">₹{price.toLocaleString()}</p>
          <p className="card_market">
            Market Cap: ₹{marketcap.toLocaleString()}
          </p>
          <p className="card_volume">
            Volume (24H): ₹{volume.toLocaleString()}
          </p>
          {priceChange < 0 ? (
            <div className="price_down">
              <HiOutlineArrowNarrowDown />{" "}
              <p className="price_chnge">
                {priceChange.toFixed(2)}% ₹{priceChangeAmt.toFixed(3)}
              </p>
            </div>
          ) : (
            <div className="price_up">
              <HiOutlineArrowNarrowUp />{" "}
              <p className="price_chnge">
                {priceChange.toFixed(2)}% ₹{priceChangeAmt.toFixed(3)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

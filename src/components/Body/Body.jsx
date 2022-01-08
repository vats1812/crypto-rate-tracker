import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import LoadingBar from "react-top-loading-bar";
import "./Body.css";
function Body() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(10);
    async function fetchData() {
      setProgress(50);
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          setProgress(80);
          setCoins(res.data);
          setProgress(100);
        })
        .catch((error) => console.error(error));
    }
    fetchData();
  }, []);
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <LoadingBar
        color="#FFD43B"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="body_cont">
        <div className="search">
          <input
            autoComplete="false"
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            placeholder="Search your Coin"
          />
        </div>
        <div className="card_cont">
          {filteredCoins.map((coin) => {
            return (
              <Card
                key={coin.id}
                id={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
                priceChangeAmt={coin.price_change_24h}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;

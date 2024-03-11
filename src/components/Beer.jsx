"use client";

import { useEffect, useState } from "react";

const Beer = () => {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState("");

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/v2/beers?size=20"
    );
    const data = await response.json();

    setBeers(data);
  };

  const handleSelect = (e) => {
    const selectedBeer = beers.find((beer) => beer.name === e.target.value);
    setSelectedBeer(selectedBeer);
  };

  return (
    <main>
      <h3>Beer</h3>
      <p>
        Here's an API to fetch 20 beers:
        <a
          href="https://random-data-api.com/api/v2/beers?size=20"
          target="_blank"
        >
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>
      <p>Choose your favorite one to see its details.</p>
      <select onChange={handleSelect}>
        {beers.map((beer) => (
          <option key={beer.uid}>{beer.name}</option>
        ))}
      </select>
      <div id="details" style={{ display: selectedBeer ? "flex" : "none" }}>
        <div className="detail">
          <h4 className="heading">id</h4>
          <p className="detail-text">{selectedBeer.id}</p>
        </div>
        <div className="detail">
          <h4 className="heading">uid</h4>
          <p className="detail-text">{selectedBeer.uid}</p>
        </div>
        <div className="detail">
          <h4 className="heading">brand</h4>
          <p className="detail-text">{selectedBeer.brand}</p>
        </div>
        <div className="detail">
          <h4 className="heading">name</h4>
          <p className="detail-text">{selectedBeer.name}</p>
        </div>
        <div className="detail">
          <h4 className="heading">style</h4>
          <p className="detail-text">{selectedBeer.style}</p>
        </div>
        <div className="detail">
          <h4 className="heading">hop</h4>
          <p className="detail-text">{selectedBeer.hop}</p>
        </div>
        <div className="detail">
          <h4 className="heading">yeast</h4>
          <p className="detail-text">{selectedBeer.yeast}</p>
        </div>
        <div className="detail">
          <h4 className="heading">malts</h4>
          <p className="detail-text">{selectedBeer.malts}</p>
        </div>
        <div className="detail">
          <h4 className="heading">ibu</h4>
          <p className="detail-text">{selectedBeer.ibu}</p>
        </div>
        <div className="detail">
          <h4 className="heading">alcohol</h4>
          <p className="detail-text">{selectedBeer.alcohol}</p>
        </div>
        <div className="detail">
          <h4 className="heading">blg</h4>
          <p className="detail-text">{selectedBeer.blg}</p>
        </div>
      </div>
    </main>
  );
};
export default Beer;

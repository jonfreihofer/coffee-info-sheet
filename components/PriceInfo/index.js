import React, { useState, useEffect } from "react";

export default function PriceInfo() {
  const [price, setPrice] = useState(0);
  useEffect(async () => {
    const url =
      "https://www.quandl.com/api/v3/datasets/ODA/PCOFFOTM_USD.json?api_key=o9YePCNh6XUqwF7y5fiZ";
    const res = await fetch(url);
    const data = await res.json();
    setPrice(data.dataset.data[0][1]);
  }, []);

  return (
    <>
      <h3>{`Current C Market Arabica Price:
       ${price} US Cents/lb`}</h3>
    </>
  );
}

import React from "react";

function CryptoCard({ coin }) {
return (
<div className="card">
<img src={coin.image} alt="" />
<h2>{coin.name}</h2>
<p>${coin.current_price}</p>
<p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
</div>
);
}

export default CryptoCard;

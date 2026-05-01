import React, { useEffect, useState } from "react";
import "./App.css";
import CryptoCard from "./components/CryptoCard";

function App() {
const [coins, setCoins] = useState([]);

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const res = await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
);
const data = await res.json();
setCoins(data);
};

return (
<div className="App">
<h1>🚀 CryptoPulse React Dashboard</h1>
<div className="grid">
{coins.map((coin) => (
<CryptoCard key={coin.id} coin={coin} />
))}
</div>
</div>
);
}

export default App;

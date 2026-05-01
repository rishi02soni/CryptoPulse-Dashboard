const container = document.getElementById("cryptoContainer");
const search = document.getElementById("search");

let coins = [];

async function fetchCrypto() {
const res = await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
);

coins = await res.json();
displayCoins(coins);
}

function displayCoins(data) {
container.innerHTML = "";

data.forEach((coin) => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${coin.image}">
<h2>${coin.name}</h2>
<p>💰 $${coin.current_price}</p>
<p class="${coin.price_change_percentage_24h > 0 ? "green" : "red"}">
${coin.price_change_percentage_24h.toFixed(2)}%
</p>
<p>Market Cap: $${coin.market_cap.toLocaleString()}</p>
`;

container.appendChild(card);
});
}

search.addEventListener("input", (e) => {
const filtered = coins.filter((coin) =>
coin.name.toLowerCase().includes(e.target.value.toLowerCase())
);

displayCoins(filtered);
});

fetchCrypto();

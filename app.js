const form = document.getElementById('searchForm');
const result = document.getElementById('tableResult');

form.addEventListener('submit', (e) => {
    e.preventDefault(e.target);

    const form = new FormData(e.target);
    const coinType = form.get('coinType');

    fetchCoin(coinType);
})

const fetchCoin = async (coinType) => {
    const res = (await axios.get(`https://api.coinstats.app/public/v1/coins/${coinType}?currency=INR`)).data.coin;
    const { name, price, volume,  priceChange1d } = res;
    const target = 'INR';

    result.innerHTML = `<tr style="background-color:blue; color: white; font-weight: 700;">
        <td>
            property
        </td>
        <td>Value</td>
        </tr>
        <tr>
            <td>
                ${name}
            </td>
            <td>${price} ${target}</td>
            </tr>
        <tr>
        <td>
                Volume
            </td>
            <td>${volume}</td>
            </tr>
            <tr>
            <td>
                Change
            </td>
            <td>${priceChange1d}</td>
        </tr>`;
}
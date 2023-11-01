const https = require('https');

https.get('https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
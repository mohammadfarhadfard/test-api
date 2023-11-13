const axios = require('axios');


axios.get('https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT')
  .then(response => {
    console.log(response.data.data.price);
  })
  .catch(error => {
    console.log(error);


  });



 
 


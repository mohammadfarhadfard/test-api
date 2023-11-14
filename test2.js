const express = require('express');
const axios = require('axios');

const app =express()

app.get('/api/v1/:coin/price' , (req,res) => {


 // check if the symbol is valid then make the request 
 // else return error



  let kucoinApi="https://api.kucoin.com/api/v1/market/orderbook/level1?symbol="+req.params.coin.toUpperCase()+"-USDT"




  axios.get(kucoinApi)
    .then(response => {
      res.status(200).json({
        price  :  response.data.data.price,
        supports_group_request:false,
        supports_marks:true,
        supports_search:false
      
      })
    })
.catch(error => {
  res.status(404).json({error:"Coin symbol is not valid"})

});
})

app.listen(4040)
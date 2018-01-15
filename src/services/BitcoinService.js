function getRate(amount) {
    return fetch('https://blockchain.info/tobtc?currency=USD&value=1')
      .then((res) => res.json())
      .then(data =>  data)
 
}

export default {
    getRate
}
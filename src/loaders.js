export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "5DE7D058-3A05-466A-B4F3-90241FB174B4"
   
    return (await fetch(`http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
   } 
   
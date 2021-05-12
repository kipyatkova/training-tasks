// Piece of Node.js code that returns the hotel name and star rating of Harcourt Place.

const axios = require("axios");
const cheerio = require("cheerio");

const fetchHotelName = async () => {
 try {
  const response = await        axios.get('https://www.traveloka.com/en-sg/hotel/england/harcourt-place-1000000564804?spec=14-07-2021.15-07-2021.1.1.HOTEL.1000000564804.Harcourt%20Place.2');

        const html = response.data;

  const $ = cheerio.load(html);

  const hotelInfo = [];

  $('div.n8fRf').each((_idx, el) => {
   const hotelName = $(el).text()
   const starRating = $('meta[itemprop="ratingValue"]').attr('content')
   hotelInfo.push(hotelName, starRating)
  });

  return hotelInfo;
 } catch (error) {
  throw error;
 }
};

fetchHotelName().then((hotelInfo) => console.log(hotelInfo));

// node index.js
// [ 'Harcourt Place', '4' ]

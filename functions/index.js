const functions = require("firebase-functions");
const admin = require('firebase-admin')
require('dotenv').config()
const axios = require("axios")
admin.initializeApp()

const db = admin.firestore()

exports.dailyNews = functions.pubsub.schedule('0 0 * * *').onRun(async (context) => {
  console.log("i am running every day at 0:00")
  const {data} = await axios.get(`https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=21`,{
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY
    }
  })
  await db.collection('cryptoNews').doc("news").set({news: data.value})
  return Promise.resolve()
})

const functions = require("firebase-functions");
const admin = require('firebase-admin')
const axios = require("axios")
admin.initializeApp()

const db = admin.firestore()

exports.userDeleted = functions.auth.user().onDelete(async (user) => {
  console.log(`${user.email} is deleted `)
  const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
  
  for(coinsData of data) {
    await db.collection('coinsData').add(coinsData)
  }
  return Promise.resolve()
}) 

exports.userCreated = functions.auth.user().onCreate(async (user) => {
  console.log(`${user.email} is created `)
  await db.collection('users').add({email: user.email})
  return Promise.resolve()
}) 

exports.coinsData = functions.firestore.document('/coinsData/{documentId}').onCreate((snapshot,context) => {

})
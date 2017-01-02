import config from '../config'
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require("firebase/storage")

var firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  storageBucket: config.FIREBASE_STORAGE_BUCKET
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();

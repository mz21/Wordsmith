import {AsyncStorage} from 'react-native'
import {auth, storage} from './firebaseSetup'
const USER_KEY = 'USER'
var uuid = require('uuid')
import RNFetchBlob from 'react-native-fetch-blob'
const Fetch = RNFetchBlob.polyfill.Fetch
// replace built-in fetch
window.fetch = new Fetch({
    // enable this option so that the response data conversion handled automatically
    auto : true,
    // when receiving response data, the module will match its Content-Type header
    // with strings in this array. If it contains any one of string in this array,
    // the response body will be considered as binary data and the data will stored
    // in file system instead of in memory.
    // By default, it only store response data to file system when Content-Type
    // contains string `application/octet`.
    binaryContentTypes : [
        'image/',
        'video/',
        'audio/',
        'foo/',
    ]
}).build()
const Blob = RNFetchBlob.polyfill.Blob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

module.exports = {
  TODO: 'TODO',
  TODOQUIZ: 'TODOQUIZ',
  ADD: 'ADD',
  WORDS: 'WORD',
  CALENDAR: 'CALENDAR',
  PROFILE: 'PROFILE',
  ADD_FORM: 'ADD_FORM',
  ADD_PICKER: 'ADD_PICKER',
  order: {
    ALPHABETICAL: 'ALPHABETICAL',
    CHRONOLOGICAL: 'CHRONOLOGICAL',
    ACCURACY: 'ACCURACY'
  },
  PURPLE: 'rgb(116,47,162)',
  MED_PURPLE: 'rgb(180,137,195)',
  DISABLED_GRAY: 'rgb(205,205,205)',
  RED: 'rgb(243,69,65)',
  ALMOST_WHITE: 'rgb(253,253,253)',
  convertToMidnight: (date) => {
    var savedDate = new Date();
    savedDate.setDate(date.getDate());
    savedDate.setHours(0);
    savedDate.setMinutes(0);
    savedDate.setSeconds(0);
    savedDate.setMilliseconds(0);
    savedDate = Date.parse(savedDate);
    return savedDate;
  },
  daysUntil: (nextReviewTime) => {
    let timeDifference = nextReviewTime - Date.now();
    if(timeDifference <= 0) {
      timeDifference = 0;
    }
    nextReviewTime = Math.ceil(timeDifference / (1000*60*60*24));
    return nextReviewTime;
  },
  setDaysUntilText: (daysUntil) => {
    let daysUntilText = null;
    if(daysUntil === 0) {
      daysUntilText = 'Today'
    }
    else if(daysUntil === 1) {
      daysUntilText = '1 day'
    }
    else {
      daysUntilText = daysUntil + ' days'
    }
    return daysUntilText;
  },
  getReviewsAccuracy: (reviews) => {
    if(!reviews || reviews.length === 0) {
      return 'New Word'
    }
    else {
      let total = reviews.length;
      let correct = reviews.filter(review => {
        return review.success
      }).length;
      return Math.round(100 * correct/total);
    }
  },
  getReviewsAccuracyString: (reviews) => {
    if(!reviews || reviews.length === 0) {
      return '0/0'
    }
    else {
      let total = reviews.length;
      let correct = reviews.filter(review => {
        return review.success
      }).length;
      return correct + '/' + total
    }
  },
  getUser: () => {
    return AsyncStorage.getItem(USER_KEY) // returns a promise
  },
  signInUser: (key) => {
    return auth.signInWithEmailAndPassword(key + '@gmail.com', key)
  },
  createUser: () => {
    var key = uuid.v4()
    AsyncStorage.setItem(USER_KEY, key)
    auth.createUserWithEmailAndPassword(key + '@gmail.com', key)
    .catch(function(error) {
      console.warn(error)
    })
  },
  getReviews: (reviews) => {
    if(reviews) {
      reviews = Object.keys(reviews).map((key) => {
        return reviews[key];
      });
    }
    else {
      reviews = [];
    }
    return reviews
  },
  getAuth: () => {
    if(auth.currentUser && auth.currentUser.uid) {
      return auth.currentUser.uid
    }
    console.warn('somehow wasnt authenticated')
    return null
  },
  storeImageRequest: (data) => { //data requires url, imageType, userId, and imageId fields
    let {url, urlType, imageType, userId, imageId} = data
    var extension = null
    var contentType = null
    switch(imageType) {
      case 'jpg':
        extension = 'jpg'
        contentType = 'image/jpeg'
        break
      case 'png':
        extension = 'png'
        contentType = 'image/png'
        break
      default:
        extension = 'jpg'
        contentType = 'image/jpeg'
        break
    }
    return RNFetchBlob
      .config({ fileCache : true, appendExt : extension })
      .fetch('GET', url)
      .then((resp) => {
        return resp.path()
      })
      .then((file) => {
        return Blob.build(RNFetchBlob.wrap(file), {type: contentType + ';'})
        .then((blob) => {
          return storage.ref()
          .child('/user/' + userId + '/' + imageId + '-' + urlType + '.' + extension)
          .put(blob, {contentType: contentType})
          .then((snapshot) => {
            blob.close()
            return storage.ref()
            .child('/user/' + userId + '/' + imageId + '-' + urlType + '.' + extension)
            .getDownloadURL().then((url) => {
              return url
            })
          })
        })
      })
  },
  getImageRequest: (url) => {
    if(auth.currentUser && auth.currentUser.uid) {
      let uid = auth.currentUser.uid
      return storage.ref().child(uid + '/' + url).getDownloadURL()
    }
  }
}

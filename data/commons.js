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
  }
}

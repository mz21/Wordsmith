module.exports = {
  TODO: 'TODO',
  TODOQUIZ: 'TODOQUIZ',
  ADD: 'ADD',
  WORDS: 'WORD',
  CALENDAR: 'CALENDAR',
  PROFILE: 'PROFILE',
  order: {
    ALPHABETICAL: 'ALPHABETICAL',
    CHRONOLOGICAL: 'CHRONOLOGICAL',
    ACCURACY: 'ACCURACY'
  },
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
  }
}

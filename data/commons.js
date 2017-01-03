module.exports = {
  TODO: 'TODO',
  TODOQUIZ: 'TODOQUIZ',
  ADD: 'ADD',
  WORDS: 'WORD',
  CALENDAR: 'CALENDAR',
  PROFILE: 'PROFILE',
  convertToMidnight: (date) => {
    var savedDate = new Date();
    savedDate.setDate(date.getDate());
    savedDate.setHours(0);
    savedDate.setMinutes(0);
    savedDate.setSeconds(0);
    savedDate.setMilliseconds(0);
    savedDate = Date.parse(savedDate);
    return savedDate;
  }
}

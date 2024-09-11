const myName = 'John';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 42;

console.log('Some random text from CommonJS module')

//module.exports = { myName, myHobbies, myFavoriteNumber }

module.exports.myName  = myName;
exports.myHobbies  = myHobbies;
exports.myFavoriteNumber  = myFavoriteNumber;
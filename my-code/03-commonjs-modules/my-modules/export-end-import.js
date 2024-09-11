const {myName, myHobbies} = require('./multiple-exports');

const myFriend = 'Daniel';

module.exports.myFriend = myFriend;
module.exports.myName = myName;
module.exports.myGreatHobbies = myHobbies;
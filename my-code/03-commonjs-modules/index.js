//multiple exports

// const exportedObject = require('./multiple-exports');
// const {myName, myHobbies, myFavoriteNumber} = exportedObject;
const {myName, myHobbies, myFavoriteNumber} = require('./my-modules/multiple-exports');


//console.log(exportedObject);
// console.log(exportedObject.myName);
// console.log(exportedObject.myHobbies);
// console.log(exportedObject.myFavoriteNumber); 

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// single export

const greeting = require('c:/dev/01-NodeJS/my-code/03-commonjs-modules/my-modules/single-export.js');

greeting(myName);

//export and import

const {myFriend, myName: myOtherName, myGreatHobbies} = require('./my-modules/export-end-import');

console.log(myFriend);
console.log(myOtherName);
console.log(myGreatHobbies);
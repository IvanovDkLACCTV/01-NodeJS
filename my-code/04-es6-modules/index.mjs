//these aren't distructuring assignments
import { season, temperature } from "./named-exports.mjs"; //this is named export
import { huminidy, isRaining } from "./inline-exports.mjs"; //this is inline export
//name can be anything
import theUser from "./export-by-default.mjs"; //this is export by default
import getDataFromServer from "./default-export.mjs"; //this is default export
//mixed export
import DEFAULT_SERVER, {
    USERNAME as MY_USERNAME,
    PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs';

let print = (something) => {
  console.log(something);
};

print(`It is ${season} and the temperature is ${temperature} degrees.`);
print(`It is ${huminidy} and it is ${isRaining ? "raining" : "not raining"}`);
print(`User is ${theUser[0]} ${theUser[1]} and is ${theUser[2]} years old.\nIs the user married? ${theUser[3]}`);


getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
.then(posts => print(posts))

print(`The default server is ${DEFAULT_SERVER}`);
print(`The username is ${MY_USERNAME} and the password is ${MY_PASSWORD}`);
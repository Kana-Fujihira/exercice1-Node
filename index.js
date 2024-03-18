const cowsay = require("cowsay");
const ourCampus = require('./information');
console.log(cowsay.say({
    text: `Hi, my name is ${ourCampus.name} at ${ourCampus.schoolName} `,
    e: "oO",
    T: "U "
}));


const userInfo = require("./information");
const cowsay = require("cowsay");

const cow = cowsay.think({ text:`Salut, je suis ${userInfo.firstName} et je suis un wilder. Mon campus est en ${userInfo.campus}`});

console.log(cow);
const fs =  require("fs");
fs.copyFileSync("text1.txt","text2.txt");

var superheroes = require("superheroes");
var mySuperHero = superheroes.random();
console.log(mySuperHero);

var names = require("marvel-comics-characters");
var name = names.all;
console.log(name);

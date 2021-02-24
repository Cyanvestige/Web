let repeat = require('repeat-string');
let joke = require('one-liner-joke');
let generatePassword = require('password-generator');
console.log(repeat('a ',10));
console.log(generatePassword(20,false,/\d/,'nice-pass-'));
'use strict';

const add3 = (a, b, c) => a + b * c;
console.log(add3(1, 2, 3));
const add3Bind = add3.bind(null, 2, 2);
console.log(add3Bind(5));
const add3Grid = c => add3(2, 2, c);
console.log(add3Grid(5));

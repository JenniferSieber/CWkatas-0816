// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/557af4c6169ac832300000ba
const removeRotten = bagOfFruits => bagOfFruits ? bagOfFruits.map(fruit => fruit.replace('rotten', '').toLowerCase()) : [];

console.log(removeRotten(["apple","banana","kiwi","melon","orange"]));
console.log(removeRotten(["apple","rottenBanana","Apple"]));

// KATA 2 7kyu
// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
//'A' = 65, 'B' = 66, 'C' = 67 --> 656667
const calc = x => {
  let total1 = x.replace(/./g, x => x.charCodeAt(0));
  let total2 = total1.replaceAll(/7/g, '1');
  let sum = n => [...n].reduce((a,b) => +a + +b);
  return sum(total1) - sum(total2)
}

console.log(calc('abcdef')); 
console.log(calc('ABCDEF')); 

// KATA 3 7kyu
// https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript
const sortReindeer = reindeerNames => reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));

console.log(sortReindeer([
  "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
  "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
]));
console.log(sortReindeer([
  "Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall",
  "Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"
]));

// KATA 4 7kyu
// https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript
const divisibleByThree = str => str.split('').reduce((ttl, cv) => +ttl + +cv, 0) % 3 == 0;

console.log(divisibleByThree('123'));  
console.log(divisibleByThree('88'));  

// KATA 5 7kyu
// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript
const scrollingText = text => {
  text = text.toUpperCase();
  return [...text].map((_, i) => text.slice(i) + text.slice(0, i))
}

console.log(scrollingText('abc'));
console.log(scrollingText('good luck!'));

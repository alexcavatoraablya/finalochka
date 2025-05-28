//1
function test1(str) {
  if (str.includes("?")) {
    console.log("string contains ? or !");
  }
  else {
    console.log("string does not contain ? o r!");
  }
}

function test2(str) {
  let count = 0

  for (const s of str) {
    if (s === ' ') count++;
  }

}

const text = "Привіт, як справи?";
//2
function task2(str) {
  
  console.log("Upper case: ", str[0].toUpperCase() + str.slice(1));
}

task2("uyfyjdj");
//3
function countWords(str) {
  return str.split(/\s+/).filter(word => word.length > 0).length;
}

const text2 = "Привіт, як справи?";
console.log(countWords(text2));

//4
const sentence = "Zhong Telecommunication Equipment";
function makeAbbreviation(sentence) {
  return sentence
  .trim().split(/\s+/).reduce((abbr, word) => abbr + word[0].toUpperCase(), '');
}
console.log(makeAbbreviation (sentence));

//5
function task5(str) {
  const cleaned = str
  .toLowerCase().replace(/[^a-zа-я0-9]/gi, '');

  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log();
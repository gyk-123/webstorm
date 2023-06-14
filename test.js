const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = "1,2,3,4,5"; //[1,2,3,4,5]

let new_arr = [];
arr.forEach((item) => {
  for (let index = 0; index < str.split(",").length; index++) {
    if (item == str.split(",")[index]) {
      new_arr.push(item);
    }
  }
});
console.log(new_arr);

let res = arr.filter((item) => str.split(",").some((i) => i == item));
console.log(res);

console.log(Boolean(1));
console.log(Boolean(0));

function replaceString(oldS, newS, fullS) {
  // Replaces oldS with newS in the string fullS
    for (var i = 0; i < fullS.length; i++) {
      if (fullS.substring(i, i + oldS.length) == oldS) {
        console.log(i,'i');
        let a=fullS.substring(i + oldS.length, fullS.length)
        console.log(a,'a');
       fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
       
      }
    }
    return fullS;
  }
  
  replaceString("World", "Web", "Brave New World");

  console.log("World".substring(5,5),'substring');
  
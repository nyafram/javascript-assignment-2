let str = ''
var result = ''
var asc = 0;
var codes = [ ];
let n = 5;
//start  

function caesarCipher(str, n) {

  str = str.toUpperCase();
  var arr = str.split("");
  for (let i=0; i < arr.length; i++) {
    var asc = arr[i].codePointAt(0);
    codes.push(asc);
}

//console.log(codes);
for (let j=0; j < codes.length; j++) {

  if (codes[j] >= 65 && codes[j] <= 90) {
    if (codes[j] < 78) {
      codes[j] = codes[j] + 5;
    } else {
      codes [j] = codes [j] - 5;
    }
  } else {
    codes[j] = codes[j];
  }
}

//console.log(codes);

for (let m=0; m < codes.length; m++) {

  codes[m] = String.fromCharCode(codes[m]);

}

result = codes.join('');
console.log(result.toLowerCase());

}
caesarCipher("Hello, World!", 5);



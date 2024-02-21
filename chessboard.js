function chessboard(size) {
  let output = "";
  for(let m = 0; m < size; m++) {
    for(var n = 0; n < size / 2; n++) {
      if(m % 2 === 0) {
        output += " ";
        output += "#";
      } else {
        output += "#";
        output += " ";      
      }
    }
    output += "\n";
  }
  return output;
}
console.log(chessboard(8));

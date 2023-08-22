// ============ quickSort ============

function dictionary(text) {
  let array = text.toLowerCase().match(/[a-z]/g);
  let dictionary = {};
  for (let letter of array) {
    if (dictionary[letter]) {
      dictionary[letter] += 1;
    } else dictionary[letter] = 1;
  }
  return dictionary;
}

let text = "Thhhhhe quickkkkkk foooooox jumps over the laaaaazy dog";
console.log(dictionary(text));

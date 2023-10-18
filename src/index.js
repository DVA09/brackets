module.exports = function check(str, bracketsConfig) {
  const counting = Math.round(str.length / 2);
  const brackets = [];
  let newStr = str;
  for (let item of bracketsConfig) {
    brackets.push(item.join(''));
  }
  for (let i = 0; i <= counting; i++) {
    if (newStr.length > 1 && newStr.length !== 0) {
      for (let bracket of brackets) {
        newStr = newStr.replaceAll(bracket, '');
      }
    }
  }
  if (newStr.length === 0) {
    return true;
  } else {
    return false;
  }  
}

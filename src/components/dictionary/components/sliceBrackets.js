function sliceBrackets(string) {
  const tempOne = /<b>/;
  const tempTwo = /<\/b>/;

  let myArray = string.replace(tempOne, '');
  myArray = myArray.replace(tempTwo, '');

  return myArray;
}

export default sliceBrackets;

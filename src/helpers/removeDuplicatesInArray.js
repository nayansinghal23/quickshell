export const removeDuplicatesInArray = (elem) => {
  let newArray = [];
  let uniqueObject = {};
  for (let i in elem) {
    let objTitle = elem[i]["id"];
    uniqueObject[objTitle] = elem[i];
  }
  for (let i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }
  return newArray;
};

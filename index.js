

function iterativeLog(array) {
  array.forEach((element, index, array) => {
    return console.log(`${index}: ${element}`)})
};


function iterate(callback) {
  var animals = ["cat", "dog", "cammel"];
  animals.forEach(callback);
  return animals;
};
function doToArray(array, callback) {
  array.forEach(callback);
}



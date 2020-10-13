
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []; 
  let outMatrix = [];
  matrix.forEach((element, ind) => {
  ind % 2 !== 0 ?element = element.reverse() :  element ;
    element.forEach((element) => {
      outMatrix.push(element);
    })
  })
  return outMatrix;
}

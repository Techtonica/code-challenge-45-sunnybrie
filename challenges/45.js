// Given an array of ints length 3, figure out which is larger,
// the first or last element in the array, and set all the other elements to be that value. 
// Return the changed array.
//
// max_end3([1, 2, 3]) → [3, 3, 3]
//
// max_end3([11, 5, 9]) → [11, 11, 11]
//
// max_end3([2, 11, 3]) → [3, 3, 3]
//
// Bonus Challenge:  Try to do this _without_ initializing a new array.


function max_end3(int_array){
  let lastElem = int_array[(int_array.length - 1)];
  if(int_array[0] > lastElem){
    for(let i = 0; i < int_array.length; i++){
      int_array[i] = int_array[0]
    };
  }else{
    for(let i = 0; i < int_array.length; i++){
      int_array[i] = lastElem;
    };
  };
  return int_array;
};

console.log(max_end3([1, 2, 5]));
console.log(max_end3([4, 2, 2]));

module.exports = max_end3;

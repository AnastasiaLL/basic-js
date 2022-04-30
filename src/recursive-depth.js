const { NotImplementedError } = require('../extensions/index.js');

/**
 * Привет НАСТЯ!!!!
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
//  class DepthCalculator {

//   calculateDepth(arr) {
//     if (!Array.isArray(arr)) {
//       return 0
//     }
//     let maxDepth = 1;
//     let depth =1;
//     rec(arr)
//     function rec(el){

//         el.forEach(elem => {
//             if (Array.isArray(elem) ){
//                 depth = depth + 1;
//                 rec(elem)
//             }
//         });
//         if (depth > maxDepth){
//             maxDepth = depth;
//         }
//         depth = depth -1;

//     }

//       return maxDepth

//     }
// }

//  class DepthCalculator {

//   constructor(arr) {
//     if (!Array.isArray(arr)) {
//       return 0
//     }
//     // if (!Array.isArray(array)) throw new Error("Параметр не является маcсивом.");
//     this.arr = arr;
//     this.depth = 1;
//     this.maxDepth = 1;
//   }

//   calculateDepth(arr = this.arr, depth = 1) {


//     arr.forEach(elem => {
//       if (Array.isArray(elem) ){
//         this.depth = this.depth + 1;
//         this.calculateDepth(elem)
//       }
//     });

//     if (this.depth > this.maxDepth){
//       this.maxDepth = this.depth;
//     }
//     this.depth = this.depth -1;



//     return this.maxDepth

//   }
// }

class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(array, depth = 1) {
    if (!Array.isArray(array)) {
      return 0
    }
    if (depth == 1) {
      this.depth = 1
    }
    if (depth > this.depth) this.depth = depth;
    for (let e of array) {
      if (Array.isArray(e)) {
        this.calculateDepth(e, depth + 1);
      }
    }
    return this.depth;
  }
}


module.exports = {
  DepthCalculator
};

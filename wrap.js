// function wrap(str, n){
//   let newStr = []

//   let arr = str.split(' ').forEach((word, index) => {
//     let count = 1;
//     let subStr = ''
//     while (count < str.length / n){
//       if (subStr <= n * count){
//         subStr += (word + ' ');
//       }
//       if (subStr.length > n * count){
//         newStr.push(subStr);
//         count++;
//         subStr = '';
//       }

//     }

//   });

//   let final = newStr.join('/n');

// }


const wrap = (line, maxLen) => '';

module.exports = wrap;


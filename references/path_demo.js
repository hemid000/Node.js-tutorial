const path = require('path')
// console.log(path);

// console.log(__filename);
console.log(path.basename(__filename));

//directory 
console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.join(__filename , '/ss'));



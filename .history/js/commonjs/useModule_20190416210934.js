let utils = require('./ggg.js');
utils = require('./ggg')
utils.sayhello()
// console.log('require.main === module:',require.main === module)// true 用来判断是否是node直接运行的那个文件
// console.log('require.cache:',require.cache)
// console.log(require.resolve.paths('fs'))
console.log('exports:', exports)
console.log('module.exports:', module.exports)
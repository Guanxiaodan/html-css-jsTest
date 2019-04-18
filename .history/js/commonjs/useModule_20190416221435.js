let utils = require('./ggg.js');
utils = require('./ggg')
utils.sayhello()


// utils.call()
// console.log('require.main === module:',require.main === module)// true 用来判断是否是node直接运行的那个文件
// console.log('require.cache:',require.cache)
// console.log(require.resolve.paths('fs'))
// console.log('exports:', exports)


/**
 * module属性
 */

// console.log('module.require():',module.require('./ggg')) 
// { sayhello: [Function: sayhello] }  返回子脚本的module.exports对象的内容

// console.log('module.paths:', module.paths) 
// 本模块的搜索路径
// [ '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/node_modules',
//   '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/node_modules',
//   '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/node_modules',
//   '/Users/guanxiaodan/WebstormProjects/gxd/myTest/node_modules',
//   '/Users/guanxiaodan/WebstormProjects/gxd/node_modules',
//   '/Users/guanxiaodan/WebstormProjects/node_modules',
//   '/Users/guanxiaodan/node_modules',
//   '/Users/node_modules',
//   '/node_modules' ]
let utils = require('./ggg.js');
utils.sayhello()


// utils.call()
// console.log('require.main === module:',require.main === module)// true 用来判断是否是node直接运行的那个文件
// console.log('require.cache:',require.cache)
// console.log(require.resolve.paths('fs'))



/**
 * module属性
 */









// console.log('module.filename:',module.filename)
// /Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/useModule.js


// console.log('module.id:',module.id)
// 模块的标识符。 通常是完全解析后的文件名。
// .



// console.log('module.loaded:',module.loaded)
// 模块是否已经加载完成，或正在加载中。
// false


// console.log('module.require():',module.require('./ggg')) 
// 返回子脚本的module.exports对象的内容
// { sayhello: [Function: sayhello] }  



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



// console.log('module.parent:', module.parent)
// 谁调用了本模块
// null










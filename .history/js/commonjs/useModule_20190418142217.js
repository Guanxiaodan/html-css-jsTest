let utils = require('./ggg.js');
let gx = require('./usedscript');
utils.sayhello()
gx.sayhello()


// console.log('require.main === module:',require.main === module)// true 用来判断是否是node直接运行的那个文件
// console.log('require.cache:',require.cache)
// console.log(require.resolve.paths('fs'))



/**
 * require对象----------require对象----------require对象--------------require对象-----------require对象---------require对象-------
 */

// console.log('require.resolve:',require.resolve('./ggg.js'))
// 返回解析后的文件名，不会加载该模块。
// /Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js



// console.log('require.main:',require.main)
// console.log('require.main === module:', require.main === module) /** true */
// 被node执行的那个模块，也就是入口文件
// Module {
//     id: '.',
//     exports: {},
//     parent: null,
//     filename: '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/useModule.js',
//     loaded: false,
//     children: 
//      [ Module {
//          id: '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js',
//          exports: [Object],
//          parent: [Circular],
//          filename: '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js',
//          loaded: true,
//          children: [],
//          paths: [Array] } ],
//     paths: 
//      [ '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/myTest/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/node_modules',
//        '/Users/guanxiaodan/node_modules',
//        '/Users/node_modules',
//        '/node_modules' ] }










/**
 * module对象---------module对象-----------module对象----------module对象-----------module对象----------module对象----------module对象--
 */

// console.log('module.exports:',module.exports)
// 模块的导出内容
// {}



// console.log('module.children:',module.children)
// 被该模块引用的模块对象。
// [ Module {
//     id: '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js',
//     exports: { sayhello: [Function: sayhello] },
//     parent: 
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename: '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/useModule.js',
//        loaded: false,
//        children: [Circular],
//        paths: [Array] },
//     filename: '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js',
//     loaded: true,
//     children: [],
//     paths: 
//      [ '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/myTest/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/gxd/node_modules',
//        '/Users/guanxiaodan/WebstormProjects/node_modules',
//        '/Users/guanxiaodan/node_modules',
//        '/Users/node_modules',
//        '/node_modules' ] } ]

// console.log('module.filename:',module.filename)
// 模块的完全解析后的文件名。
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










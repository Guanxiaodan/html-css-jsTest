let utils = {
    sayhello:function(){
        console.log(`你好我的猫`, this)
    }
}
// let aa = {
//     call:function(){
//         console.log('13521023333')
//     }
// }
console.log('this:', this)

module.exports = utils




/**
 * require对象
 */

// console.log('require.main:',require.main)
// console.log('require.main === module:', require.main === module) /** false */
// 返回被node运行的那个模块，也就是入口文件
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
//          loaded: false,
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



// console.log('require.resolve:',require.resolve('./ggg.js'))
// 返回解析后的文件名，不会加载该模块。
// /Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js



// console.log('require.resolve.paths:',require.resolve.paths('./ggg.js'))
// 返回一个数组，其中包含解析 request 过程中被查询的路径。 如果 request 字符串指向核心模块（例如 http 或 fs），则返回 null
// [ '/Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs' ]






/**
 * module对象属性
 */
// console.log('module.exports:',module.exports)
// 模块的导出内容
// { sayhello: [Function: sayhello] }




// console.log('module.children:',module.children)
// 被该模块引用的模块对象。
// []



// console.log('module.filename:',module.filename)
// 模块的完全解析后的文件名。
// /Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js


// console.log('module.id:',module.id)
// 模块的标识符。 通常是完全解析后的文件名。
// /Users/guanxiaodan/WebstormProjects/gxd/myTest/html-css-jsTest/js/commonjs/ggg.js



// console.log('module.loaded:',module.loaded)
// 模块是否已经加载完成，或正在加载中。
// false



// console.log('module.parent:', module.parent)
// 谁调用了本模块
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
//          loaded: false,
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




/**
 * module.exports与exports对比
 */

// 1.module.exports被重新赋值
// module.exports = utils
// console.log('exports:', exports) // exports: {}
// console.log('module.exports:', module.exports) // module.exports: { sayhello: [Function: sayhello] }

// 2.module.exports添加属性
// module.exports.sayhello = utils.sayhello
// console.log('exports:', exports) // exports: { sayhello: [Function: sayhello] }
// console.log('module.exports:', module.exports) // module.exports: { sayhello: [Function: sayhello] }

// 3.exports被重新赋值
// exports = utils
// console.log('exports:', exports) // exports: { sayhello: [Function: sayhello] }
// console.log('module.exports:', module.exports) // module.exports: {}
// 但是这个时候exports里面的内容并未被导出，导致引用这个脚本的文件会报错


// 4.exports添加属性
// exports.sayhello = utils.sayhello
// console.log('exports:', exports) // exports: { sayhello: [Function: sayhello] }
// console.log('module.exports:', module.exports) // module.exports: { sayhello: [Function: sayhello] }



/**
 * Module对象，注意，这里是module的构造函数
 * 获取Module构造函数通过这个：require('module')。。看例子
 */

// console.log("require('module'):",require('module'))
// // module的构造函数
// function Module(id, parent) {
//     this.id = id;
//     this.exports = {};
//     this.parent = parent;
//     updateChildren(parent, this, false);
//     this.filename = null;
//     this.loaded = false;
//     this.children = [];
//   }






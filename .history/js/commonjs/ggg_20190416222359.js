let utils = {
    sayhello:function(){
        console.log(`你好我的猫`)
    }
}
// let aa = {
//     call:function(){
//         console.log('13521023333')
//     }
// }

module.exports = utils

// exports.call = aa.call
// exports.sayhello = utils.sayhello
// module.exports.call = aa.call
// // console.log('exports:',exports)
// console.log('require.main === module_ggg:',require.main === module)// false



/**
 * module对象属性
 */












console.log('module.id:',module.id)
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
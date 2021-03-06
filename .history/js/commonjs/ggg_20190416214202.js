let utils = {
    sayhello:function(){
        console.log(`你好我的猫`)
    }
}
let aa = {
    call:function(){
        console.log('13521023333')
    }
}

module.exports = utils
exports.call = aa.call
// exports.sayhello = utils.sayhello
// module.exports.call = aa.call
// // console.log('exports:',exports)
// console.log('require.main === module_ggg:',require.main === module)// false
// console.log('require.main.filename_ggg:',require.main.filename)
console.log('exports:', exports) // exports: {}
console.log('module.exports:', module.exports) // module.exports: { sayhello: [Function: sayhello] }

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
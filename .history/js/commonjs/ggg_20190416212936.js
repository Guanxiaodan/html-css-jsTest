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

// module.exports = utils
exports.sayhello = utils.sayhello
// module.exports.call = aa.call
// // console.log('exports:',exports)
// console.log('require.main === module_ggg:',require.main === module)// false
// console.log('require.main.filename_ggg:',require.main.filename)
console.log('exports:', exports) // exports: {}
console.log('module.exports:', module.exports) // module.exports: { sayhello: [Function: sayhello] }
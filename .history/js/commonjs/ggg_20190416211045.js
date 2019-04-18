let utils = {
    sayhello:function(){
        console.log(`你好我的猫`)
    }
}

module.exports = utils
// // console.log('exports:',exports)
// console.log('require.main === module_ggg:',require.main === module)// false
// console.log('require.main.filename_ggg:',require.main.filename)
console.log('exports:', exports) // exports: {}
console.log('module.exports:', module.exports) // module.exports: { sayhello: [Function: sayhello] }
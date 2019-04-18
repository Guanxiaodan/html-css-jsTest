let utils = {
    sayhello:function(){
        console.log(`你好我的猫`)
    }
}

module.exports = utils
// console.log('exports:',exports)
console.log('require.main === module_ggg:',require.main === module)// false
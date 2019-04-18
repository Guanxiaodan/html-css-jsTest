
let utils = {
    sayhello:function(){
        console.log(`你好我的猫`)
    }
}

module.exports = utils 
console.log('require.main === module_m:',require.main === module)

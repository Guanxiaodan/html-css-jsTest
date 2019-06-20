var name ='guan';
console.log('global:',global.name);
console.log(module);


var a = 10;
var c = {
    a:4,
    b:(function(){
        this.a -= 2;
        a+=5;
        return function(){
            this.a +=3;
            a+=2;
            console.log(a)
        }
    })(this.a)
};
var b1=c.b;
b1();
c.b();
console.log(a,c.a)
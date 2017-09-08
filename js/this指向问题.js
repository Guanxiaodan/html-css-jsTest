/**
 * Created by GXD on 2017/9/8.
 *
 */
var name = 'window';

var person1 = {
    name: 'person1',
    show1: function () {
        console.log(this.name)
    },
    show2: () => console.log(this.name),
    show3: function () {
        return function () {
            console.log(this.name)
        }
    },
    show4: function () {
        return () => console.log(this.name)
    }
};
var person2 = { name: 'person2' };

person1.show1(); // person1 ====== person1
person1.show1.call(person2); // person2 ======= person2

person1.show2(); // window ======= window
person1.show2.call(person2); // person2 ======= window  因为就算是换了对象，但他依然是箭头函数，所以还是指向全局

person1.show3()(); // undefined ======= window  因为返回里面的函数后，这个函数就成了全局函数，座椅这个函数再被调用，this就指向了全局
person1.show3().call(person2); // person2 ======= person2
person1.show3.call(person2)(); // window ======= window

person1.show4()(); // window ======= person1
person1.show4().call(person2); // person2 ======= person1
person1.show4.call(person2)(); // window ======= person2


console.log('================================================================================================');

function Person (name) {
    this.name = name;
    this.show1 = function () {
        console.log(this.name)
    };
    this.show2 = () => console.log(this.name);
    this.show3 = function () {
        return function () {
            console.log(this.name)
        }
    };
    this.show4 = function () {
        return () => console.log(this.name)
    }
}

var personA = new Person('personA');
var personB = new Person('personB');

personA.show1(); // personA
personA.show1.call(personB); // personB

personA.show2(); // personA
personA.show2.call(personB); // personA

personA.show3()(); // window
personA.show3().call(personB); // personB
personA.show3.call(personB)(); // window

personA.show4()(); // personA
personA.show4().call(personB); // personA
personA.show4.call(personB)(); // personB
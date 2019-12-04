var x;
console.log(x);
var x = 10;

var b = 1;
b += typeof(b);

console.log(b);
//closure
//console.log(mul(2)(3)(4)); // output : 24
var closure = function(x) {
    return function(y) {
        return function (z) {
            return x*y*z;
        }
    }
}

console.log(closure(2)(3)(4));
//var arrayList =  ['a','b','c','d','e','f']; clean it up
arrayList =  ['a','b','c','d','e','f'];
//arrayList.length = 0;
arrayList.splice(0, arrayList.length);
console.log(arrayList);


//prototype chain
function isArray(object) {
    return object.__proto__ === Array.prototype;

}
console.log(isArray(arrayList));

//prototype chain -- inherent
var f = function() {
    this.a = 15;
    this.b = 22;
}

let g = new f();
console.log(g.a);
f.prototype.c = 100;

console.log(g.c);

var o = {
    a:2,
    m: function (t) {
        return this.a + 10*t;
    }
};

var p = Object.create(o);
p.a = 38;
console.log(p.m(1));

var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);

//Hoisting
//Only declaration can be hoisted
console.log(hoisting_0);
var hoisting_0;
hoisting_0 = 1;

hoisting_1 = 1;
console.log(hoisting_1);
var hoisting_1;

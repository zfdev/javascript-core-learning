//#Object
//Object构造函数创建一个对象包装器
//如果给定值是null或者undefined，将会创建并返回一个空对象。


//#语法
    //{nameValuePairs1[, nameValuePairs2[, ...nameValuePairsN]]} //对象初始化器
    //new Object([value]) //以构造函数形式来调用
//#构造函数参数
    //nameValuePairsN 成对的键值对，字符串与值的祖父，其中通过冒号分隔键和值，每组值使用逗号分隔
    //value 任何值

//#Object类
//##构造函数Property
//--//Object.length
    //构造函数的length属性，其值为1，不是对象实例的length属性
//--//Object.prototype
    //可以为所有Object类型的对象添加属性

//##构造函数Method
//--//Object.assign()

    //参数

    //返回值

//#常用方法

//#Object实例和Object原型对象
//Javascrip中所有的对象都来自Object,所有对象从Object.prototype继承方法和属性，尽管他们可能被覆盖，例如，其他构造函数的原型将覆盖constructor属性，并提供自己的toString()方法，Object原型对象的更改将传播到所有对象，除非受到这些更改的属性和方法将沿原型链进一步覆盖。


//##Object原型对象属性
//--//Object.prototype.constructor

//--//Object.prototype.__proto__

//##Object原型对象方法
//--//Object.prototype.hasOwnProperty()


//#理解Javascript的继承与原型链
//首先要纠正我之前的错误理解，实例不仅继承了构造函数prototype的属性还有方法，我之前理解的只有方法忽略了属性，实例的[[prototype]](浏览器的实现是__proto__)属性指向构造函数的prototype对象，当在实例上找不到的属性和方法，会沿着原型链一直向上查找下去，直到查找到Object.prototype[[prototype]],它的值为null。这里最关键的点就是要理解[[prototype]](__proto__)指向构造函数的prototype这个要点，理解了这个要点，就会理解为什么一个对象上有很多不是它自身定义的方法，通过__proto__一层一层向上查找，直到顶层对象Object.prototype.__proto__，它的值是null,如果还找不到就会返回undefined,通过Object.prototype.hasOwnProperty来判断这个属性是不是当前对象自己所属的，并不是从原型链上继承下来的,如何通过扩展基础类实现自己的类库。prototype对象上既有属性也有方法。比如有些属性本质上其实是getter setter函数。
//ES6中引入了class关键字，但是它只是语法糖，Javascript仍然是基于原型的，所以要按照Javascript的实现来理解类的实现。
//Javascript只有一种结构，对象。

//##基于原型链的继承
    //每个对象Object的实例object都有一个私有属性，__proto__([[prototype]])指向它的构造函数的原型对象prototype。该原型对象prototype也有自己的__proto__([[prototype]]),层层向上直到Object.prototype，顶层对象Object.prototype.__proto__的值为null，而null没有__proto__，就会返回undefined.
//--//###继承属性
    //从ES6开始，someObject.[[prototype]]可以通过Object.getPrototypeOf()和Object.setPrototypeOf()来访问，这等同于Javascript的非标准，但是很多浏览器都实现的属性__proto__。这里理解的难点就是不要与构造函数func的prototype属性混淆，这里的someObject.[[prototype]]只是指向它的构造函数func.prototype的指针。
    //这里需要理解的是属性屏蔽，下面这个例子用于理解属性屏蔽
    //Example
    let CustomClass = function(){
        this.a = 1;
        this.b = 2;
    }
    let customInstance = new CustomClass();
    console.dir(customInstance);

    CustomClass.prototype.b = 3; //定义在构造函数原型链上的属性b，要这样在原型链的基础上添加属性，而不是直接赋值为一个对象，这样会打破原型原有的指针
    CustomClass.prototype.c = 4;

    //customInstance.[[prototype]] === CustomClass.prototype
    console.log(Object.getPrototypeOf(customInstance) === CustomClass.prototype);
    //customInstance.[[prototype]].[[prototype]] === Object.prototype
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(customInstance)) === Object.prototype);
    //customInstance.[[prototype]].[[prototype]].[[prototype]] === null
    console.log( Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(customInstance))) === null);

    //属性访问路径 实例customInstance --__proto__--> CustomClass.prototype --__proto__--> Object.prototype --__proto__--> null
    console.log(customInstance.a); //实例customInstance自身的属性
    console.log(customInstance.b); //实例customInstance自身的属性，虽然构造函数的原型链上也有个b属性，但是不会被访问到，这种情况称为property shadowing 属性屏蔽
    console.log(customInstance.c); //构造函数原型链prototype上的属性，
    console.log(customInstance.d); //根据访问路径可以看出向上搜索到null之后没有找到属性d，所以返回值undefined


//--//###继承方法
    //在Javascript里没有其他编程语言里所谓的方法，这里的方法其实说得就是函数，任何函数都可以添加到对象上作为对象的属性，这里的继承也与属性的继承没有差别，包括property shadowing属性屏蔽
    //唯一需要注意的是就是当继承的函数被调用时，this指向的是当前继承的对象，而不是继承的函数所在的原型对象。
    //Example
    const thisObject = {
        a: 2,
        m: function(){
            return this.a + 1;
        }
    }
    console.log();
    console.log(thisObject.m()); //this指向对象thisObject

    //创建一个继承自对象thisObject的新对象
    const inheritObject = Object.create(thisObject);
    inheritObject.a = 4;
    console.log(inheritObject.m()); //this指向inheritObject


//##使用不同的方法来创建对象和生成原型链
//--//### 语法结构创建的对象
console.log();
const createObject = {
    a: 1
}
console.log(createObject.hasOwnProperty('a')); //从Object.prototype继承而来的hasOwnProperry方法
//原型链 createObject --> Object.prototype --> null

const createArray = ['yo', 'whats up'];
console.log(createArray.entries().next()); //从Array.prototype继承而来的entries方法
console.log(createArray.hasOwnProperty('length')); //从Object.prototype继承而来的hasOwnProperty
//原型链 createArray --> Array.prototype --> Object.prototype --> null

const createFunction = function(){
    return 2;
}
console.log(createFunction.apply(this, null)); //从Function.prototype继承而来的apply方法
//原型链 createFunction --> Function.prototype --> Object.prototype --> null

//--//### 构造器创建的对象
//在javascript中，构造器其实就是一个普通的函数，当使用new操作符来作用这个函数的时候，它就可以被称为构造函数
const Graph = function(){
    this.vertices = [];
    this.edges = [];
}
Graph.prototype = {
    addVertex(v){
        this.vertices.push(v);
    }
}
const gInstance = new Graph();
gInstance.addVertex(1);
console.log(Object.getPrototypeOf(gInstance)); //从Function.prototype继承而来的getPrototypeOf方法
//原型链 gInstance --> Graph.prototype --> Function.prototype --> Object.prototype --> null
//gInstance是生成的对象，它自身的属性有vertices和edges，并不是从原型继承的
//在gInstatnce被实例化时，gInstance.[[prototype]]指向了Graph.prototype,所以它有了addVertex方法
//vertices和edges属性是gInstance实例本身的属性值 并不是从原型链Graph.dprototype继承下来的

//--//### Object.create创建的对象
    //ES新增的方法，这个方法用于创建一个新对象，新对象的原型就是调用create方法时传入的第一个参数
const createObjBase = {
    a: 1
}
const inheritCreateA = Object.create(createObjBase);
console.log();
console.log(Object.getPrototypeOf(createObjBase) === Object.prototype);
console.log(Object.getPrototypeOf(inheritCreateA)); //因为Object.create创建的对象，所以[[prototype]]指向createObjBase
console.log(inheritCreateA.a);
//Prototype path: inheritCreateA --> createObjBase --> Object.prototype --> null
const inheritCreateB = Object.create(inheritCreateA);
console.log(inheritCreateB.a);
//Prototype path: inheritCreateB --> inheritCreateA --> createObjBase --> Object.prototype --> null
const inheritCreateC = Object.create(inheritCreateB);
console.log(inheritCreateC.a);
//Prototype path: inheritCreateC --> inheritCreateB --> inheritCreateA --> Object.prototype --> null 

//--//### class关键字创建的对象
//ES6引入了一套新的关键字用于实现class,这是一个语法糖，javascript仍是基于原型的，这些新关键字包括class,constructor,static,extends,super
class Polygon{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon{
    constructor(sideLength){
        super(sideLength, sideLength);
    }
    //Get property function
    get area(){
        return this.height * this.width;
    }
    //Set property function
    set sideLength(newLength){
        this.height = newLength;
        this.width = newLength;
    }
}
const squareInstance = new Square(2);
console.log('Square area:', squareInstance.area);


//##性能
//在原型链上查找属性比较耗时，对想能有副作用，试图访问不存在的属性时会遍历整个原型链
//遍历对象的属性时，原型链上每个可枚举属性都会枚举出来。要检查对象是否具有自己定义的属性，而不是原型链上的某个属性，则必须使用所有对象从Object.prototype继承的hasOwnProperty方法,它是javascript中不会遍历原型链的方法之一
console.log(gInstance.hasOwnProperty('vertices')); //从Object.prototype继承而来的hasOwnProperty方法 属性vertices不是从原型链上继承的，是它本身的属性 所以返回true
console.log(gInstance.hasOwnProperty('nope'));
console.log(gInstance.hasOwnProperty('addVertex')); //不是它本身的属性，而是原型链上Graph.prototype的属性(函数方法)
console.log(Object.getPrototypeOf(gInstance).hasOwnProperty('addVertex'));
//Object.keys()也是遍历属性不会遍历原型链的方法之一
console.dir(Object.keys(gInstance)); //只返回对象自身的属性

//##不要尝试直接在原生对象的原型上进行扩展

//##ES5模拟extend
const ES5ClassA = function(a){
    this.varA = a
}
ES5ClassA.prototype = {
    varA: null,
    doSomething(){
        console.log(this.varA);
    }
}
const ES5ClassB = function(a, b){
    ES5ClassA.call(this, a);
    this.varB = b;
}
ES5ClassB.prototype = Object.create(ES5ClassA.prototype, {
    varB:{
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    }, //对象属性描述符
    doSomething: {
        value: function(...args){
            ES5ClassA.prototype.doSomething.apply(this, args);
            console.log(this.varB);
        },
        enumerable: true,
        configurable: true,
        writable: true
    }
});
ES5ClassB.prototype.constructor = ES5ClassB;
const bInstance = new ES5ClassB('a', 'b');
bInstance.doSomething();

//##prototype和Object.getPrototypeOf
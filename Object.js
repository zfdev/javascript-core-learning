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
//我们注意到javascript的function函数有一个特殊的属性prototype，该特殊属性可以与Javascript的new操作符一起使用。实现创建基于构造函数的实例，所以构造函数的prototpye对象，所有的实例都会共享，因为所有实例的[[prototype]]都指向构造函数的prototype
    // const A = function(){};
    // const a1 = new A();
    // const a2 = new A();
    // //内存中查找路径
    // a1.doSomething ---> Object.getPrototypeOf(a1).doSomething ---> A.prototype.doSomething;
    // a2.doSomething ---> Object.getPrototypeOf(a2).doSomething ---> A.prototype.doSomething;
    // //执行时
    // a1.doSomething() ---> A.prototype.doSomething.call(a1);
    // a2.doSomething() ---> A.prototype.doSomething.call(a2);

//##prototype用于类，Object.getPrototypeOf()用于实例

//##Javascript new本质
    const FunctionClass = function(){}
    //当运行下面的代码时
    const fInstance = new FunctionClass();
    //首先创建一个空对象 
    // const emptyObject = new Object();
    //将空对象的[[prototype]]指向构造函数的prototype原型
    // emptyObject.__proto__ = FunctionClass.prototype; (Object.getPrototypeOf(emptyObject) = FunctionClass.prototype) 
    //修改构造函数的作用域为新建的空对象并执行
    //FunctionClass.call(emptyObject);

//##Javascript 属性访问符.本质是递归引用
    //object.property
    //它会首先检查object本身是否含有property属性，如果没有，
    //它会继续查找Object.getPrototypeOf(object).property(就是__proto__的指向)
    //它会继续查找Object.getPrototypeOf(Object.getPrototypeOf(object)).property 如此继续直到顶点Object.prototype.[[prototpye]]的null返回undefined然后抛出错误


//#对象模型的细节
//Javasript是一种基于原型而不是基于类的面对对象语言。

//--//##基于类vs基于原型的语言
    //基于类的语言中的类，可使特定的对象集合特征化，类是抽象的，而不是其所描述的对象集合中任何特定的个体，一个实例是一个类的实例化，也就是其中一名成员。
    //基于原型的语言并不存在这种区别，它只有对象，基于原型的语言具有所谓原型对象的概念，原型对象可以作为一个模板，新对象可以从中获得原始的属性，任何对象都可以指定其自身的属性，既可以是创建时也可以在运行时创建。而且任何一个对象都可以作为另一个对象的原型，从而允许后者共享前者的属性。

    //###定义类
    //基于类的语言，需要专门的类定义符来定义类，在定义类时，允许定义特殊的方法，称为构造器。来创建该类的实例，在构造器方法中，可以指定实例的属性的初始值以及其他一些操作。你可以通过将new操作符和构造方法来创建类的实例
    //Javascript中只需要定义构造函数来创建具有一组特定初始属性和属性值的对象。任何Javascript函数都可以用作构造器。也可以使用new操作符和构造函数来创建一个新对象。

    //###子类和继承
    //基于类的语言是通过对类的定义中构建类的层级结构，在定义类中，可以指定新的类是一个现存的类的子类，子类可以继承父类的全部属性。并可以添加新的属性或者修改继承的属性。
    //例如: 假设Employee类只有name和dept属性，而manager是Employee的子类，并添加了reports属性。这时，Manager类的实例，将具有所有三个属性name,dept,reports
    //Javascript通过将构造器函数与原型对象相互关联的方式来实现继承。
    //例如: 创建一样的Employee -- Manager实例，却需要不同的方式来实现，
    //首先需要定义Employee构造函数，在构造函数内部定义name,dept属性，接下来，定义Manager构造函数，在该构造函数内调用Employee构造函数，并定义reports属性，最后将一个获Employee.prototype的新对象赋予给Manager构造函数，作为Manager构造函数的原型，之后当你创建新的Manager对象实例时，该实例会从Employee对象继承name,dept属性

    //###添加和移除属性
    //基于类的语言中，通常在编译时创建类，然后再编译时或者运行时对类的实例进行实例化。一旦定义了类，无法对类的属性进行更改。
    //在javascript中允许运行时添加或者移除任何对象的属性。如果您为一个对象中添加一个属性。而这个对象又作为其他对象的原型，则该对象作为原型的所有其他对象也将获得该属性

    //###总结
    //####基于类的(Java)
    //1.类和实例是不同的事物。
    //2.通过类定义来定义类，通过构造器方法来实例化
    //3.通过new操作符来创建单个对象实例
    //4.通过类定义来定义现存类的子类，从而构建对象的层级结构
    //5.遵循类链继承属性
    //6.类定义指定类的所有实例所有属性，无法再运行时动态添加属性

    //####基于原型的(Javascript)
    //1.所有对象都是Object的实例
    //2.通过构造器函数来定义和创建一组对象
    //3.通过new操作符来创建单个对象实例
    //4.指定一个对象作为原型，并且与构造函数一起构建对象的层级结构
    //5.遵循原型链继承属性
    //6.构造器函数或者原型指定初始属性集合，允许动态地向单个对象或者整个对象集中添加移除属性


//--//##创建层级结构
    //基础类Employee有一个name属性和dept属性
    const Employee = function(name, dept){
        this.name = name || '';
        this.dept = dept || 'general';
    };
    //Manager继承于Employee类，自有一个属性reports
    const Manager = function(reports){
        Employee.call(this);
        this.reports = reports || [];
    }
    Manager.prototype = Object.create(Employee.prototype);
    //WorkerBee继承于Employee类，自有一个projects属性
    const WorkerBee = function(projs){
        Employee.call(this);
        this.projects = projs || [];
    }
    WorkerBee.prototype = Object.create(Employee.prototype);
    //SalesPerson继承于WorkerBee类，重写了dept属性为sales，自有一个属性为quota
    const SalesPerson = function(){
        WorkerBee.call(this);
        this.dept = 'sales';
        this.quota = 100;
    }
    SalesPerson.prototype = Object.create(WorkerBee.prototype);
    //Engineer继承于WorderBee类，重写了dept属性为engineering，自有一个machine属性
    const Engineer = function(mach){
        WorkerBee.call(this);
        this.dept = 'engineering';
        this.machine = mach || '';
    }
    Engineer.prototype = Object.create(WorkerBee.prototype);

    const mark = new WorkerBee();

//--//##对象的属性
    //执行new操作符时发生的事情，以WorkerBee作为例子，它会创建一个空对象，并将其作为关键字this的值传递给WorkerBee的构造函数，构造函数显式地设置projects值，然后隐式地将其内部的[[prototype]]属性设置为WorkerBee.prototype的值，一旦这些属性设置完成，Javascript返回这些新创建的对象，然后赋值语句会将变量mark的值指向该对象。 

    //###继承属性
    console.log(mark.hasOwnProperty('name'));
    console.log(Object.getPrototypeOf(mark));
    mark.projects.push('navigator');
    console.log(mark);
    mark.name = 'mark';
    console.log(mark);

    //###添加属性
    //在Javascript中，可以在运行时为任何对象添加属性，而不必受限于构造器函数提供的属性。
    //在类WorkerBee的实例对象mark上添加属性bonus
    mark.bonus = 3000;
    //向构造函数的原型对象中添加新的属性，那么该属性将添加到这个原型中继承属性的所有对象中
    

    const jim = new Employee('Jim', 'Marketing');
    console.log(jim);
    const sally = new Manager();
    console.log(sally);
    
    console.log(mark);
    console.log(mark.specialty);
    const fred = new SalesPerson();
    console.log(fred);
    const jane = new Engineer();
    console.log(jane);   

//--//##更灵活的构造器
    //在创建新实例时为其制定属性值。当没有指定属性值时会赋值为默认初始值。
    //this.name = name || '';

    const belau = new Engineer('belau');
    //new操作符创建了一个空对象
    //将空对象的的[[prototype]]属性指向Engineer.prototype
    //将这个对象的this传递给Engineer构造函数
    //
    Employee.prototype.specialty = 'none';
    console.log(belau);
    console.log(belau.specialty);

//--//##属性的继承
    

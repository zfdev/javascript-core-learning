//#Array
//#常用方法
//##创建数组
    let fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.length);
//##通过索引访问数组元素
    let first = fruits[0];
    console.log(first);
    let last = fruits[fruits.length - 1];
    console.log(last);
//##遍历数组
    fruits.forEach(function(value, index, array){
        console.log(value, index);
    });
//##添加元素到数组的末尾，并返回当前数组的长度
    let newLength = fruits.push('berry');
    console.log(newLength);
    console.log(fruits);
//##删除数组末尾的元素,并返回它
    let lastItem = fruits.pop();
    console.log(lastItem);
    console.log(fruits);
//##删除数组最前面(头部)的元素,并返回它
    let firstItem = fruits.shift();
    console.log(firstItem);
    console.log(fruits);
//##添加元素到数组的头部,并返回这个新数组的长度
    let unshiftNewLength = fruits.unshift('grape');
    console.log(unshiftNewLength);
    console.log(fruits);
//##找出某个元素在数组中的索引并返回索引值
    let pos = fruits.indexOf('banana');
    console.log(pos);
//##通过索引删除某个元素，并返回它
    let removeItem = fruits.splice(pos, 1);
    console.log(removeItem);
    console.log(fruits);
//##从一个索引位置删除多个元素,并返回删除的元素数组
    fruits.unshift('pear');
    fruits.unshift('peach');
    console.log(fruits);
    let deleteMutiple = fruits.splice(0, 2);
    console.log(deleteMutiple);
    console.log(fruits);

//##复制一个数组
    let copy = fruits.slice(); 
    fruits.unshift('watermelon');
    console.log(copy);
    console.log(fruits);

//#语法
//##构造函数参数
    //[element0, element1, ..., elementN]
    //new Array(element0, element1[, ...[,elementN]])
    //new Array(arrayLength)

//#Array类
//##Property
    //构造函数的length属性，其值为1，不是数组实例的length属性
    //Array.length
    //通过数组的原型对象可以为数组的所有的数组对象添加属性
    //Array.prototype

//##Method
    //从一个类数组或者可遍历对象中创建一个新的数组实例
    //Array.from(arrayLike[, mapFn[,thisArg]])
    //###参数
    //arrayLike
        //需要转换成数组的可遍历对象
    //mapFn(可选参数)
        //新数组中每个元素都会执行该回调函数
    //thisArg(可选参数)
        //执行回调函数时mapFn时的this对象
    //###返回值
    //新的数组实例

    //###Example
        //转换字符串
        let stringToArray = Array.from('jason');
        console.log(stringToArray);
        //Array from a Set
        let arrToSet = new Set(['foo', 'window']);
        console.log(Array.from(arrToSet));
        //Array from a Map
        let arrToMap = new Map([[1, 2], [3, 4], [5, 6]]);
        console.log(arrToMap.keys());
        console.log(Array.from(arrToMap));
        //Array from an Array-like object
        let testFun = function(){
            return Array.from(arguments);
        }
        console.log(testFun([1, 2, 3]));
        //use arrow function 
        let arrowFun = Array.from([7, 8, 9], x=>x*x);
        console.log(arrowFun);
        let arrowFun1 = Array.from({
            length: 5
        }, (value, index) => index, {});
        console.log(arrowFun1);
        //combine and merge
        const combine = function(...arrays){
            const mergedArray = Array.prototype.concat.apply([], arrays);
            return Array.from(new Set(mergedArray));
        }
        const mergedArr1 = [1, 2, 2, 4, 5, 6];
        const mergedArr2 = [2, 3, 3, 4, 7, 8];
        console.log(combine(mergedArr1, mergedArr2));

    //判断一个对象是不是数组元素
    //Array.isArray(object)
    //###参数
    //object 
        //需要检测的值
    //返回值 Boolean
    //是Array为true,不是为false

    //创建一个具有可变参数数量的新数组实例，与构造函数的单参数的情况不同的是，构造函数会以arrayLength来解析数字单个数字参数，而of会解析成数组的元素
    //Array.of(element0,[,element1,[,...[elementN]]])
    //###参数
    //elementN 
        //
    //###返回值 Array
    //新的Array实例

//#Array实例
//Array.prototype上的方法
//--//##Array.prototype.concat(value1, [,value2 [, ...[,valueN]]])

    //###Description
    //合并两个或者多个数组，不更改现有数组，返回一个新数组
    //concat是浅拷贝，对于对象引用，concat将对象引用赋值到新数组中，对于简单数据类型，比如字符串，数字和boolean,concat将赋值值到新的数组中

    //###参数
    //valueN，将数组或值连接组成新数组。

    //###返回值 Array
    //新的数组实例(new Array)

    //###Example
    const concatArr1 = ['a', 'b', 'c'];
    const concatArr2 = [1, 2, 3];
    console.log(concatArr1.concat(concatArr2));


//--//##Array.prototype.copyWithin(target, [,start [, end]])

    //###Description
    //浅复制数组的一部分到统一数据中的另一个位置，并返回它，而不修改其大小
    //copyWith的方法是浅copy当操作复杂数组对象时尤其要注意

    //###参数
    //target，0为基地的索引，复制序列到该位置，如果是负数，target将从末尾开始计算，target大于arr.length的话，将不发生copy；如果target在start之后，复制的序列将会被修改以符合arr.length
    //|start,0为基底的索引，开始复制元素的启示位置，如果是负数，start的索引位置等于length+start,也就是从末尾开始计算。如果值被忽略，默认值为0。
    //|end,0为基底的索引，开始复制元素的结束位置，copyWith将会copy到该位置，但不包括end这个位置的元素，如果是负数，end的位置等于length+end，也就是从末尾开始计算。如果值被忽略，默认值为等于length
    
    //###返回值 Array
    //改变了的数组(self)

    //###Example
    const copyWithArr1 = [1, 2, 3, 4, 5];
    //const cloneCopyWithArr1 = copyWithArr1.slice();
    const cloneArray = function(array){
        //return Array.prototype.slice.apply(array);
        return [].concat(array);
    }
    console.log(copyWithArr1);
    console.log(cloneArray(copyWithArr1));
    console.log(cloneArray(copyWithArr1).copyWithin(-2));
    console.log(cloneArray(copyWithArr1).copyWithin(0, 2)); //如果不指定end位置，将会一直copy到数组结尾
    console.log(cloneArray(copyWithArr1).copyWithin(0, 3, 4));
    console.log(cloneArray(copyWithArr1).copyWithin(-2, -3, 4));
    console.log([].copyWithin.call({ length: 5, 3:1}), 0, 3); //Array like object
    const i32a = new Int32Array([1, 2, 3, 4, 5]);
    console.log(i32a.copyWithin(0, 2));
    console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));


//--//##Array.prototype.entries()

    //###Description
    //entries()方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键值对

    //###参数
    //无
    
    //###返回值 Array Iterator
    //一个新的Array Iterator迭代器对象，它的原型(__proto__:Array Iterator)上有一个next方法，可用遍历迭代器取得原数组的[key, value]

    //###Example
    //Array Iterator
    const util = require('util');
    const entriesArr = ['a', 'b', 'c'];
    const entriesArrIterator = entriesArr.entries();
    console.log(util.inspect(entriesArr, {showHidden: true, depth: null}));
    //Array Iterator
    // {
    //     __proto__: Array Iterator,
    //     next: function(){},
    //     Symbol(Symbol.toStringTag): 'Array Iterator'
    // }

    //iterator.next()
    //next方法返回迭代器结果对象
    //console.dir(entriesArrIterator.next());

    //iterator.next方法执行，可以使用for of循环遍历iterator对象，并输出每次迭代的值
    // for(let key of entriesArrIterator){ //迭代器能被for of循环遍历
    //     console.log(key);
    // }  

    //这里使用一个while循环模拟for of循环执行的过程，核心思想就是通过每次迭代返回的结果对象作为判断是非终止循环的条件
    console.log();
    const forOfLoop = function(iterator){
        const result = [];
        const getIteratorResult = function(){
            return iterator.next();
        }
        let loopCondition;
        do {
            let iteratorObj = {};
            iteratorObj = getIteratorResult();
            loopCondition = iteratorObj.done;
            if(!loopCondition){
                result.push(iteratorObj.value);
            }            
        } while (!loopCondition);
        return result;
    }
    console.log(forOfLoop(entriesArrIterator));

    //二维数组排序
    //使用entries方法生成的iterator对象进行遍历来获取二维数组的每个子对象，再对子对象的值在原来的基础上使用数组的sort方法排序
    console.log();
    let twoArr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
    const sortArr = function(array){
        let goNext = true;
        const arrayIterator = array.entries();
        while(goNext){
            let iteratorResult = arrayIterator.next();
            if(!iteratorResult.done){
                console.log(iteratorResult.value);
                //这里的value存储的Array iterator值有些特殊，结果是一个带有索引的二维数组，要想获取到值需要访问数组的第二项，也就是value[1]的值
                iteratorResult.value[1].sort((x, y) => x - y);
                goNext = true;
            }else{
                goNext = false;
            }
        }
        return array;
    }
    console.log(sortArr(twoArr));
    

//--//##Array.prototype.every(callback(element[,index[,orginalArray]])[, thisArg])

    //###Description
    //方法测试数组的所有元素是否都通过了指定函数的测试
    //callback为每一个元素返回true，every才会返回true

    //###参数
    //callback 用来测试每个元素的函数
        //element 元素值
        //index 元素的索引
        //orginalArray 原数组
    //|thisArg 执行callback时使用的this值，如果省略该参数，非严格模式下为全局对象，严格模式下为undefined
    
    //###返回值 Boolean
    //(只有当所有元素都符合条件才返回true,只要找到一个不符合条件的就返回false)

    //###Example
    const isBigEnough = function(element, index, orignalArray){
        return element >= 10;
    }
    console.log([5, 8, 12, 130, 40].every(isBigEnough));

//--//##Array.prototype.fill(value[, start[,end]])

    //###Description
    //用一个固定值填充一个数组中从起始索引到终止索引内的全部元素，不包括终止索引。

    //###参数
    //value 用来填充的数组的值
    //|start 起始索引，默认值为0，如果start值是个负数，索引会被计算成length + start
    //|end 终止索引，默认值为this.length,如果end值是个负数，索引会被计算成length + end
    
    //###返回值 
    //修改后的数组(self)

    //###Example
    const fillArr = [1, 2, 3];
    console.log();
    console.log(cloneArray(fillArr).fill(4));
    console.log(cloneArray(fillArr).fill(4, 1));
    console.log(cloneArray(fillArr).fill(4, 1, 2));
    console.log(cloneArray(fillArr).fill(4, 1, 1)); //不包括结束位置
    console.log(cloneArray(fillArr).fill(4, -3, -2));
    console.log(new Array(3).fill(4));
    console.log([].fill.call({length:3}, 4));
    const fillArrSameValue = new Array(3).fill({});
    console.log(fillArrSameValue[0].name = 'Jason');
    console.log(fillArrSameValue); //这里的对象是引用类型，所以用这个值创建这个数组的时候，数组每个元素存储的都是相同的指针，导致修改一个，所有的值都受影响
    
//--//##Array.prototype.filter(callback(element[, index[, array]])[, thisArg])

    //###Description
    //创建一个新数组，其包含通过所提供函数实现的测试的所有元素
    //filter为数组中的每个元素调用一次callback函数，并利用所有使得callback返回true的或者等价于true的值的元素创建一个新的数组。filter不会改变原数组，它返回过滤后的新数组。同样的遍历范围是在第一次调用callback时已经确定的元素，filter之后被添加到数组中的元素不会被filter遍历到。

    //###参数
    //callback 用来测试数组每个元素的函数，调用时使用以下三个参数，返回true表示保留该元素，返回fasle则不保留。
        //element 当前在数组中处理的元素
        //|index 正在处理元素在数组中的索引
        //|array 调用了filter的数组
    //|thisArg 执行callback时用于this的值
    
    //###返回值 Array(new)
    //一个新的通过测试的元素的集合的数组，如果没有通过测试则返回空数组(new Array)

    //###Example
    //过滤掉小于某个值的元素
    const moreThanTen = function(element){
        return element >= 10;
    }
    console.log([12, 5, 8, 130, 44].filter(moreThanTen));
    //过滤掉JSON中非0非整数的条目
    //console.log(Number.isInteger(undefined));
    const filterJSON  = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        { },
        { id: null },
        { id: NaN },
        { id: 'undefined' }
    ];
    const isValidateValue = function(item){
        if(Number.isInteger(item.id) && item.id !== 0){
            return true;
        }
        return false;
    }  
    console.log(filterJSON.filter(isValidateValue));
    //在数组中搜索带有指定字母的条目
    const filterFruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    const query = (word) => {
        return filterFruits.filter((element) => {
            return element.toLowerCase().indexOf(word.toLowerCase()) > -1;
        });
    }
    console.log(query('an'));
    console.log(query('ap'));

//--//##Array.prototype.find(callback[, thisArg])

    //###Description
    //返回数组中满足提供测试函数的第一个元素的值
    //需要注意的是callback函数会为数组中每个索引调用从0到length-1，不仅仅是那些被赋值的索引，对于稀疏数组来说，这个方法效率要低于那些只遍历有值的索引的方法。同样直对callback访问时的数组元素有效，后添加的元素不会被检索，即使遍历过程中删除了数组中的条目，索引也会调用回调函数。

    //###参数
    //callback 在数组上每一项执行的函数
        //element 当前遍历到的元素
        //index 当前遍历的索引
        //array 数组本身
    //|thisArg 

    //###返回值 Object
    //当某个元素通过callback测试时，返回数组中的一个值，否则返回undefined

    //###Example
    //查找数组里的含有某个name值的对象
    const findInventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cherries', quantity: 5},
        {name: 'cherries', quantity: 9999}
    ];  
    const findCherries = function(element){
        return element.name === 'cherries';
    }
    console.log(findInventory.find(findCherries));
    //寻找数组中的质数
    const isPrime = function(element, index, array){
        let start = 2;
        while(start <= Math.sqrt(element)){
            if(element % start++ < 1){
                return false;
            }
        }
        return element > 1;
    }
    console.log([4,5,6,8,12].find(isPrime));
    //在遍历过程中删除一个数组中的元素，依然可以遍历到那一项
    let findArr = [0, 1, 2, 3, 4, 5];
    findArr.find((value, index, array) => {
        if(index === 0){
            console.log(`Deleting findArr[5] with value ${findArr[5]}`);
            findArr.pop();
        }
        //Element 5 is still visited even though deleted.
        console.log(`Visited index ${index} with value ${value}`);
    });
    
//--//##Array.prototype.findIndex(callback[, thisArg])

    //###Description
    //返回数组中满足提供测试函数的第一个元素的索引，否则返回-1
    //这个方法和find方法很相似，不同的是返回的值第一个满足函数的元素的索引

    //###参数
    //callback 数组中每个元素的执行的回调函数，执行时会传入下面三个参数
        //element 当前元素
        //index 当前元素的索引
        //array 调用findIndex的数组
    //thisArg 执行callback时作为this对象的值

    //###返回值 Number
    //找到的第一个元素的索引，如果没找到，则返回-1

    //###Example
    //查找数组元素中第一个质数的索引
    console.log([4,5,6,8,12].findIndex(isPrime));
    
//--//##Array.prototype.forEach(callback(currentValue, index, array){
        //do something...
    //}[, thisArg])

    //###Description
    //对数组每个元素执行一次提供的函数
    //按照升序为数组中含有有效值的每一项执行一次callback函数，那些已经删除或者未初始化的项将被跳过(在稀疏数组上)
    //需要注意的是，没有办法终止或者跳出forEach循环，除了抛出一个异常。如果需要通过判断条件提早终止循环，请使用其他方法。
    //这个方法与map不同的地方是用于遍历原数组，并不是用于返回新数组。因为返回值一直是空。

    //###参数
    //callback 为数组中每个元素执行的函数
        //currentValue 数组中正在处理的当前元素
        //index 数组中正在处理的当前元素的索引
        //array forEach()方法正在操作的数组
    //|thisArg 它将被传给callback函数，用作它的this值，否则会传入undefined作为它的this值
        
    //###返回值
    //undefined，这点不同于map()和reduce() 它总是返回undefinded值

    //###Example
    //for循环转到forEach
    const forEachItems = ['item1', 'item2', 'item3'];
    const forEachItemsCopy = [];
    forEachItems.forEach((item) => {
        forEachItemsCopy.push(item);
    });
    console.log(forEachItems);
    console.log(forEachItemsCopy);

    //打印数组的内容
    const logArrayElements = function(element, index, array){
        console.log(`array[${index}] = ${element}`);
    }
    //索引2被跳过了，因为在数组的这个位置没有项
    Array.prototype.forEach.call([2, 5, , 9], logArrayElements);
    Array.prototype.forEach.call([2, 5, '', 9], logArrayElements); //空值不会跳过
    Array.prototype.forEach.call([2, 5, undefined, 9], logArrayElements); //undefined不会跳过
    //使用thisArg
    class Counter{
        constructor(){
            this.sum = 0;
            this.count = 0;
        }
        add(array){
            array.forEach(function(entry){
                this.sum += entry;
                ++this.count;
            }, this); //把class Counter的this传递给forEach的callback函数，作为它的this值，使用箭头函数一样可以做到这点
            console.log(this);
        }
    }
    let thisArgObj = new Counter();
    thisArgObj.add([1, 3, 5, 7]);
    console.log(thisArgObj.count);
    console.log(thisArgObj.sum);
    //对象复制函数
    //对于对象赋值需要注意的点，就是对象是复杂数据类型，对象的属性和方法需要分别处理
    //ES6实现
    const copyObject = function(object){
        let clone = Object.create(object); //从对象原型创建新对象
        //获取目标对象的属性
        let propNames = Object.getOwnPropertyNames(object);
        //console.dir(propNames);
        propNames.forEach((propName) => {
            const propDescriptor = Object.getOwnPropertyDescriptor(object, propName)
            Object.defineProperty(clone, propName, propDescriptor);
        });
        //遍历目标对象属性，并复制到新对象上
        return clone;
    }
    const cloneCounter = copyObject(thisArgObj);
    console.dir(thisArgObj);
    console.dir(cloneCounter);
    cloneCounter.sum = 9999;
    console.dir(thisArgObj);
    console.dir(cloneCounter);

    //如果数组在迭代时被修改了，其他元素会被跳过。
    let forEachWords = ['one', 'two', 'three', 'four'];
    forEachWords.forEach((word) => {
        console.log(word);
        if(word === 'two'){
            forEachWords.shift(); //当遍历到数组第二项时，数组第一项被删除了，导致元素four的索引发生了改变，three被跳过，证明forEach在执行callback过程中，如果数组项被改变，并不会遍历callback传入时的值，这点与其他的方法有些区别。
        }
    });

//--//##Array.prototype.includes(seachElement[, fromIndex])

    //###Description
    //用来判断一个数组是否包含一个指定的值，如果包含侧返回true,否则返回false
    //

    //###参数
    //searchElement 需要查找的元素值
    //|fromIndex 从该索引处开始查找searchElement，如果为负值，则从array.length-fromIndex开始搜索
    
    //###返回值 Boolean
    //如果包含侧返回true,否则返回false

    //###Example
    console.log();
    console.log([1, 2, 3].includes(2));
    console.log([1, 2, 3].includes(4));
    console.log([1, 2, 3].includes(3, 3));
    console.log([1, 2, 3].includes(3, -1));
    console.log([1, 2, NaN].includes(NaN));
    //如果搜索fromIndex大于等于数组长度，则返回false,该数组不会被搜索
    console.log([1, 2, 3].includes(3, 100));
    //如果fromIndex为负值，如果计算出的索引小于0，整个数组都会被搜索。
    console.log([1, 2, 3].includes(3, -100));
    //通用方法可以遍历类数组对象
    ((...args) => {
        console.log([].includes.call(args, 'a'));
    })('a', 'b', 'c');

    
//--//##Array.prototype.indexOf(searchElement[, fromIndex])

    //###Description
    //在数组中找到一个给定元素的第一个索引，如果不存在，则返回-1
    //indexOf使用strict equality

    //###参数
    //searchElement 要查找的元素
    //|fromIndex 开始查找的位置，默认值为0，如果是负值，从array.length-fromIndex开始查找
    
    //###返回值 Number
    //首个被找到元素在数组中的索引位置，如果没找到则返回-1

    //###Example
    const indexOfArray = [2, 5, 9];
    console.log(indexOfArray.indexOf(2));
    console.log(indexOfArray.indexOf(7));
    console.log(indexOfArray.indexOf(9, 2));
    console.log(indexOfArray.indexOf(2, -1));
    //找出指定元素出现的所有位置
    const indices = [];
    const indexOfArray1 = ['a', 'b', 'a', 'c', 'a', 'd'];
    const findElement = 'a';
    let currentFindIndex = indexOfArray1.indexOf(findElement); //查找第一个元素的位置
    while(currentFindIndex != -1){ //如果找到了第一个结果，继续向后查找，当索引等于-1时证明找不到元素了
        indices.push(currentFindIndex);//将找到的第一个结果添加到结果索引数组里
        currentFindIndex = indexOfArray1.indexOf(findElement, currentFindIndex+1); //继续从刚刚找到位置开始向后查找
    }
    console.log(indices);
    //如果一个元素不在数组里，则把它更新到数组中
    const hobbies = ['photograph', 'running', 'music'];
    const updateHobby = function(hobbies, newHobby){
        if(hobbies.indexOf(newHobby) == -1){
            hobbies.push(newHobby);
            console.log(`New hobby ${newHobby} is added to the hobby collection`);
        }else{
            console.log(`${newHobby} is already existes in the hobby collection.`);
        }
    }
    updateHobby(hobbies, 'sex');
    updateHobby(hobbies, 'sex');


//--//##Array.prototype.join(separator)

    //###Description
    //这个方法用于将数组所有的元素用指定字符连接成一个字符串，并返回这个字符串
    //

    //###参数
    //separator 指定一个字符串来分割数组的元素，默认值为,如果separator是空字符串'',则所有元素之间没有任何字符
    
    //###返回值 String
    //一个所有数组元素连接的字符串，如果array.length为0，则返回空字符串

    //###Example
    //使用四种不同的分隔符连接数组元素
    console.log(hobbies.join());
    console.log(hobbies.join(''));
    console.log(hobbies.join(' + '));
    console.log(hobbies.join(', '));
    //连接类数组对象arguments
    ((...args) => {
        console.log(Array.prototype.join.call(args));
    })(1, `a`, true);

    
//--//##Array.prototype.keys()

    //###Description
    //返回一个包含数组中每个元素的索引键的Array Iterator对象
    //

    //###参数
    //无
    
    //###返回值 Array Iterator
    //一个新的Array迭代器对象

    //###Example
    //索引迭代器会包含哪些没有对应元素的索引
    const keysArray = ['a', , 'c'];
    console.log(Object.keys(keysArray));
    console.log([...keysArray.keys()]); //使用扩展运算符展开Array Iterator对象为序列

    
//--//##Array.prototype.lastIndexOf(searchElement[, fromIndex = array.length -1])

    //###Description
    //方法返回指定元素在数组中的最后一个索引的位置，如果不存在则返回-1，与indexOf不同的是，这个方法从数组的后面向前查找
    //lastIndexOf使用strict equality ===比较数组中的元素

    //###参数
    //searchElement 被查找的元素
    //|fromIndex 从此位置开始逆向查找，默认值为array.length-1, 如果为负值，将其视为从数组末尾向前的偏移。
    
    //###返回值 Number
    //数组中最后一个元素的索引，如果未找到返回-1

    //###Example
    const lastIndexOfArray = [2, 5, 9, 2];
    console.log();
    console.log(lastIndexOfArray.lastIndexOf(2));
    console.log(lastIndexOfArray.lastIndexOf(2, 0)); //从第一个位置开始查找
    console.log(lastIndexOfArray.lastIndexOf(7));
    console.log(lastIndexOfArray.lastIndexOf(2, 3));
    console.log(lastIndexOfArray.lastIndexOf(2, 2));
    console.log(lastIndexOfArray.lastIndexOf(2, -2));
    console.log(lastIndexOfArray.lastIndexOf(2, -1)); //从最后一个位置开始查找
    //查找所有元素中匹配项的索引
    const lastIndices = [];
    const lastIndexOfArray1 = ['a', 'b', 'a', 'c', 'a', 'd'];
    const lastFindElement = 'a';
    let lastCurrentFindIndex = lastIndexOfArray1.lastIndexOf(lastFindElement); //查找第一个元素的位置
    while(lastCurrentFindIndex != -1){ //如果找到了第一个结果，继续向后查找，当索引等于-1时证明找不到元素了
        lastIndices.unshift(lastCurrentFindIndex);//将找到的第一个结果添加到结果索引数组里
        lastCurrentFindIndex = lastCurrentFindIndex > 0 ? lastIndexOfArray1.lastIndexOf(lastFindElement, lastCurrentFindIndex-1) : -1; //继续从刚刚找到位置开始向前查找,由于从后向前查找，当遍历到第一个元素的时候应该终止遍历，当lastCurrentFindIndex == 0时
    }
    console.log(lastIndices);


//--//##Array.prototype.map(function callback(currentValue[, index[, array]]){
    //
//}[, thisArg])

    //###Description
    //方法创建一个新数组，其结果是数组中每个元素都调用一个提供的函数后返回的结果
    //map方法不修改调用它的原数组本身，callback每次执行后的返回值(包括undefined)组合起来形成一个新数组。callback只会在有值的索引上被调用，没有被赋过值或者delete删除的索引则不会被调用。map方法处理数组时，数组元素范围在callback方法第一次调用之前就已经确定了，map方法执行过程，原数组增加的元素不会被callback访问到。

    //###参数
    //callback 生成新数组元素的函数
        //currentValue callback数组中正在处理的当前元素
        //index callback数组中正在处理的当前元素的索引
        //array 原数组
    //thisArg 执行callback函数时使用的this值
    
    //###返回值 Array(New)
    //一个新数组，每个元素都是回调函数的结果

    //###Example
    //求数组中每个元素的平方根
    const mapArray = [1, 4, 9];
    console.log();
    const mapRoots = mapArray.map(Math.sqrt);
    console.log(mapRoots);
    console.log(mapArray);
    //使用map方法重新格式化数组中的对象
    const mapObjectArray = [{key: 1, value: 10}, 
                            {key: 2, value: 20}, 
                            {key: 3, value: 30}];
    const reformattedArray = mapObjectArray.map((obj) => {
        const reformattedObj = {};
        reformattedObj[obj.key] = obj.value;
        return reformattedObj;
    });
    console.log(reformattedArray);

    //使用一个包含一个参数的函数来创建一个新数字数组
    const arrayNumbers = [1, 4, 9];
    const doubleNumbers = arrayNumbers.map((currentValue, index, array) => {
        return currentValue * 2;
    });
    console.log(doubleNumbers);

    //获取每个字符的ASCII码组成的数组
    console.log(Array.prototype.map.call('Hello world', (x) => {
        return x.charCodeAt(0);
    }));

    //遍历querySelectorAll得到的动态对象集合的值
    // const elements = document.querySelectorAll('select option:checked');
    // const elementsValues = Array.prototype.map.call(elements, (obj) => {
    //     return obj.value;
    // })

    //注意因为回调函数接收两个参数导致的错误，因为map本身的回调函数有三个
    console.log();
    console.log(parseInt.length);
    console.log(['1', '2', '3'].map(parseInt)); //parseInt接收两个参数，第一个是要处理的值，第二个是进制
    //我们可以有几种方案处理这样的情况，
    //第一个方法就是封装一层，变成单参数的方法
    const parseIntSingle = (element) => {
        return parseInt(element, 10);
    }
    console.log(['1', '2', '3'].map(parseIntSingle));
    //第二种就是使用箭头函数传入参数，并返回值非常方便
    console.log(['1', '2', '3'].map(element => parseInt(element)));
    //第三种使用单参数的Number构造函数直接对字符串进行转换
    console.log(['1', '2', '3'].map(Number));

    
//--//##Array.prototype.pop()

    //###Description
    //从数组中删除最后一个元素，并返回该值。此方法会修改数组的长度。与方法push是相反的操作。
    //此方法具有通用性，该方法通过和call和apply一起使用，可以用在类数组对象上，根据length属性来确定最后一个元素的位置。

    //###参数
    //无
    
    //###返回值 Object
    //从数组中删除的元素

    //###Example
    const popArray = ['angel', 'clown', 'mandarin', 'surgeon'];
    console.log(popArray);
    console.log(popArray.pop());
    console.log(popArray);

//--//##Array.prototype.push(element1, ..., elementN);

    //###Description
    //将一个或者多个元素添加到数组的末尾，并返回该数组的新长度。
    //该方法具有通用性，该方法和call和apply一起使用时，可以应用在类数组对象上，push方法根据length属性决定从哪里开始插入给定的值，如果length不能转换为一个数组，则插入的元素索引为0，包括length不存在时，将会创建它。

    //###参数
    //elementN
    
    //###返回值 Number
    //数组新的长度

    //###Example
    //添加两个元素到数组
    const pushArray = ['soccer', 'baseball'];
    const totalLength = pushArray.push('football', 'swimming');
    console.log(totalLength);
    console.log(pushArray);

    //合并两个数组, 这只是一个简单的示例，正式应用合并时要使用concat方法
    const vegetables = ['parsnip', 'potato'];
    const moreVegs = ['celery', 'beetroot'];
    Array.prototype.push.apply(vegetables, moreVegs);
    console.log(vegetables);

    //像数组一样使用对象, push是特意设计为通用的, object尽管不是数组，push方法成功地使object的length属性增长了
    const objectArray = {
        length: 0,
        addElem: function(element){
            Array.prototype.push.call(this, element);
        }
    }
    objectArray.addElem({});
    objectArray.addElem({});
    console.log(objectArray);
    console.log(objectArray.length);
    
//--//##Array.prototype.reduce(callback(accumulator[, currentValue[, currentIndex[, array]]])[, initialValue])

    //###Description
    //对数组中每个元素执行一个由你提供的reducer函数，将其结果汇总为单个返回值
    //如果没有提供initialValue，reduce会从索引1的地方开始执行callback方法，跳过第一个索引，如果提供initialValue，索引从0开始
    //执行过程中不包含被删除或未被赋值的元素
    //累计器accumulator和currentValue取值根据是否挺initialValue有两种取值情况
    //第一种:提供了initialValue，accumulator值为initialValue, currentValue为数组中第一个值
    //第二种:没有提供initialValue，accumulator的值为数组第一个值，currentValue为数组中的第二个值

    //###参数
    //callback 执行数组中每个值的函数，包含四个参数，这里比较难理解的是reducer函数return值与累计器的关系，callback函数每次执行后return的值会传递给累计器，也就是说累计器在执行下一次函数时的值是这次callback函数的返回值
        //accumulator 累计器，累计回调函数的返回值，它是上一次调用回调函数返回值的累计值，或者initialValue
        //currentValue 数组中正在处理的元素
        //currentIndex 数组中正在处理的当前元素的索引，如果提供了initialValue，则起始索引号为0，否则为1
        //array 调用reduce函数的数组
    //|initialValue 作为第一次滴啊用callback函数时第一个参数的值，如果没有提供初始值，则将使用数组中的第一个元素，在没有初始值的空数组中调用reduce将报错。
    
    //###返回值 Object
    //函数累积器处理的结果，每次执行都从累积器返回值，这里返回的是最后一个执行的返回值

    //###Example
    //提供初始值，以免发生错误。
    const maxCallback = (acc, cur) => Math.max(acc, cur);
    console.log();
    console.log([{ x: 22 }, { x: 42 }].map(element => element.x).reduce(maxCallback, -Infinity));

    //数组所有元素值求和
    const reduceArray = [0, 1, 2, 3, 4];
    const reduceArraySum = reduceArray.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue, 0); //这里要注意箭头函数的特性，当不使用{}包裹函数体时，不需要return返回值，当使用{}包裹函数体时，则需要用return返回值
    console.log(reduceArraySum);
    
    //累加对象数组中的值
    const reduceObjectArray = [
        {x:1},
        {x:2},
        {x:3}
    ];
    console.log(reduceObjectArray.map(element => element.x).reduce((accumulator, currentValue, currentIndex, array)=>{
        return accumulator + currentValue;
    }, 0));
    
    //二维数组转换为一维数组，具体思路就是使用一个空数组，不断concat合并二维数组的子项
    const flattenedArray = [[0, 1], [2, 3], [4, 5]];
    console.log(flattenedArray.reduce((accumulator, cuurentValue) => {
        return accumulator.concat(cuurentValue);
    },[]));
    
    //计算数组中每个元素出现的次数
    const reduceArrayString = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    const reduceArrayCount = reduceArrayString.reduce((accumulator, currentValue) => {
        if(currentValue in accumulator){ //这里使用in操作符来判断累计器对象中是否含有当前元素
            accumulator[currentValue] ++;
        }else{
            accumulator[currentValue] = 1;
        }
        return accumulator; //这里需要每次执行返回值给累计器，不然没有值，这点不要忘了，并不是自动累加的，需要在函数中返回
    }, {});
    console.log(reduceArrayCount);
    //按属性对object分类，返回结果为对象，以属性名的值为对象索引
    const reducePeople = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ];
    const groupBy = function(objectArray, property){
        return objectArray.reduce((accumulator, currentValue) => {
            const propertyValue = currentValue[property];
            if(!(propertyValue in accumulator)){
                accumulator[propertyValue] = []; //关键点，如果没有这个值，新建一个数组用于存储同属性的对象
            }
            accumulator[propertyValue].push(currentValue); //这里遗漏了一步，必须每次都把值存到累计器的数组中
            return accumulator; //每次函数执行完成返回累计器
        }, {});
    }
    console.log(groupBy(reducePeople, 'age'));

    //使用扩展运算符和initialValue获取对象数组中的数组并累加值返回结果
    const reduceFriends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
    }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }];
    console.log(reduceFriends.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue.books);
        //return [...accumulator, ...currentValue.books]
    }, ['Alphabet']));

    //数组去重
    const reduceArraySameValue = [1,2,1,2,3,5,4,5,3,4,4,4,4];
    const sortedReduceArray = reduceArraySameValue.sort();
    const removeSameValueResult = sortedReduceArray.reduce((accumulator, currentValue, currentIndex, array) => {
        if(array[currentIndex + 1] !== currentValue){
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    console.log(removeSameValueResult);

    //按顺序运行promise，主要思路就是把每个promise对象返回的结果传递给累计器，这个累计器也是一个promise对象，不断的通过传递promise对象跟then方法实现链式调用then.
    //这里利用通过给Promise.resolve方法传递值返回一个状态是resolved的promise对象，并通过then方法的回调函数，将这个param值传递给第一个回调函数，并不断地将计算出的结果传递给通过then下一个回调函数
    console.log();
    const p1 = function(a){
        return new Promise((resolve, reject)=>{
            console.log(a);
            resolve(a * 5);
        })
    }
    const p2 = function(a){
        return new Promise((resolve, reject) => {
            console.log(a);
            resolve(a * 2);
        });
    }
    const f3 = function(a){
        console.log(a);
        return a * 3;
    }
    const p4 = function(a){
        return new Promise((resolve, reject) => {
            console.log(a);
            resolve(a * 4);
        });
    }    
    const promiseArr = [p1, p2, f3, p4];

    const runPromiseInSequence = function(promiseArray, param){
        return promiseArray.reduce((chainPromise, currentFunction) => {
            return chainPromise.then(currentFunction);
        },
        Promise.resolve(param));
    }
    //runPromiseInSequence(promiseArr, 10).then((value) => console.log(value));

    //功能型函数管道，通过依次传递上次函数执行的结果给下一个函数，实现灵活组合的管道函数
    console.log('-------------------------------------');
    const double = x => x + x;
    const triple = x => x * 3;
    const quadruple = x => x * 4;
    const pipeFunction = function(...functions){
        return function(input){
            return functions.reduce((acc, fn) => {
               return fn(acc);
            }, input);
        };
    }

    const mutiple6 = pipeFunction(double, triple);
    console.log(mutiple6(6));

    
//--//##Array.prototype.reduceRight(callback(previousValue[, currentValue[,currentIndex[,array]]])[, initialValue])

    //###Description
    //方法接收一个函数作为累加器accumulator 
    //reduceRight为数组中每一个元素调用依次callback回到函数，但是数组中被删除的索引或者从未被赋值的索引会跳过，reduceRight与reduce方法不同的地方在于reduceRight是从右向左遍历的，无论是当前值还是当前索引。
    //很多特性都与reduce类似, 不同的是
    //第一种情况提供了initialValue的值之后，previousValue是initialValue，currentValue的值是数组中最后一个元素，当前的索引值currentIndex是array.length-1，因为reduceRight是从后往前遍历的，
    //第二种情况没有提供initialValue, previousValue的是值是数组中的最后一个元素(array.lenth-1)，currentValue是array.length-2的元素，currentIndex的值是array.length-2

    //###参数
    //callback 一个回调函数，用来操作数组中的每个元素
        //previousValue 上一次调用回调函数的返回值，或者提供的initialValue
        //currentValue 当前被处理的元素
        //currentIndex 当前处理的元素的索引
        //array 调用reduce的数组
    //|initialValue 作为第一次调用callback的第一个参数
    
    //###返回值
    //执行之后的最后的返回值

    //###Example
    //reduce与redcueRight之间的区别，遍历的顺序不同
    const reduceRightArray = ['1', '2', '3', '4', '5'];
    console.log(reduceRightArray.reduce((acc, cur) => acc + cur));
    console.log(reduceRightArray.reduceRight((pre, cur) => pre + cur));

    
//--//##Array.prototype.reverse()

    //###Description
    //reverse用于将数组中的元素位置颠倒
    //这个方法会修改原数组的值

    //###参数
    //无
    
    //###返回值 Array(self)
    //返回该数组的引用

    //###Example
    //颠倒数组中元素的位置
    const reverseArray = ['one', 'two', 'three'];
    console.log(reverseArray);
    console.log(reverseArray.reverse());
    console.log(reverseArray);
    
//--//##Array.prototype.shift()

    //###Description
    //这个方法用于从数组中删除第一个元素，并返回该元素的值，此方法会修改数组的长度
    //与之相反的添加值的方法为unshift
    //shift方法移除索引为0的元素，并返回被移除的元素，其他元素的索引也随之减1
    //这个方法并不局限于数组，可以通过call或者apply作用于类数组对象上。

    //###参数
    //无
    
    //###返回值 Object
    //被删除的元素的值

    //###Example
    //移除数组的元素
    const shiftArray = ['angel', 'clown', 'mandarin', 'surgeon'];
    console.log(shiftArray);
    console.log(shiftArray.shift());
    console.log(shiftArray);

    
//--//##Array.prototype.slice([begin[, end]])

    //###Description
    //方法返回一个新的数组对象，这个对象是一个由begin和end(不包括end)决定的原数组的浅copy,原数组不会改变
    //由于是浅copy，需要注意值的类型
    //对于字符串，数组，布尔值，slice会copy这些值到新的数组里，在原数组中修改这些的值，是不会影响copy出的数组的
    //对于引用类型的值，slice会copy这个对象的引用指针到新的数组里，两个数组的对象的值都指向了同一个对象，如果对象的值发生了改变，两个数组都会受到影响。

    //###参数
    //begin 从该索引处开始提取原数组中的元素，如果省略，默认值为0。如果参数为负数，表示从数组中的倒数第几个元素开始提取，到最后一个元素
    //end 在该索引处结束提取原数组元素，但不包含end这个位置的元素，如果被省略，默认会一直提取到原数组末尾。如果该参数为负数，它表示在元素中倒数第几个元素结束提取
    
    //###返回值 Array(new)
    //一个含有提取元素的新数组

    //###Example
    //返回现有数组的一部分
    const sliceArray = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    const clonePartOfSliceArray = sliceArray.slice(1, 3); 
    console.log();
    console.log(sliceArray);
    console.log(clonePartOfSliceArray);
    console.log(sliceArray);

    //浅copy的测试
    const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
    var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
    var newCar = myCar.slice(0, 2);
    console.log();
    console.log(myCar);
    console.log(newCar);
    myCar[0].color = 'white';
    console.log(myCar);
    console.log(newCar);   

    //类数组对象应用
    const arrayLikeSlice = function(...args){
        return Array.prototype.slice.call(args);
    }
    console.log();
    console.log(arrayLikeSlice(1, 2, 3));

    
//--//##Array.prototype.some(callback(element[, index[, array]])[, thisArg])

    //###Description
    //测试数组中的某些元素是否通过由提供函数实现的测试。
    //与every的模式不同，如果一个函数返回true，some方法就会立刻返回true
    //callback只会在那些有值的索引上调用，不会在那些被删除或者从来没有被赋值的索引上调用。
    //调用时不改变原数组。

    //###参数
    //callback 用来测试每个元素的函数
        //element 数组正在处理的元素
        //index 数组中正在处理的元素的索引值
        //array 被some调用的数组
    //|thisArg 执行callback时使用的this值
    
    //###返回值 Boolean
    //如果有任何回调函数返回true，则返回true,否则返回false

    //###Example
    //测试数组元素的值
    console.log();
    console.log([12, 5, 8, 1, 4].some(value => value > 10));

    //模拟include方法，判断元素是否在数组中，如果在数组中存在则返回true
    const someArray = ['apple', 'banana', 'mango', 'guava'];
    const checkAvailability = function(array, value){
        return array.some((element) => element === value);
    }
    console.log();
    console.log(checkAvailability(someArray, 'apple'));
    console.log(checkAvailability(someArray, 'kela'));

    //将任意类型的值转换为布尔类型
    const TRUTHY_VALUES = [true, 'true', 1];
    const getBoolean = function(value){
        if(typeof value === 'string'){
            value = value.trim().toLowerCase();
        }
        return TRUTHY_VALUES.some((element) => {
            return element === value;
        });
    }
    console.log();
    console.log(getBoolean(1));
    console.log(getBoolean('true'));
    
//--//##Array.prototype.sort([compareFunction])

    //###Description
    //用原地算法对数组的元素进行排序，并返回排序后的数组，默认排列顺序是根据字符串Unicode码点
    //这里需要注意的是，如果不指定compareFunction，元素会被转换为字符串的Unicode位点进行排序。比如数字80和9，由于转换成了字符串，80会排在9之前。
    //这里比较难的部分是理解这个排序算法的实现，参数传入的是一个比较函数，传入两个参数，通过返回结果大于 等于 小于 三种结果告诉排序算法哪个应该排在前面，至于真实值的大小排序算法并不关系，按照你定义的比较函数来操作两个元素的位置
    
    // 下面这个排序函数展示了任何基于比较的排序算法 (comparison-based sorting algorithm) 都有的一段代码: 从大到小排序(一列东西, 一个比较函数) {
    //   ...
    //   比较结果 = 比较函数(东西1, 东西2)
    //   讨论 比较结果 {
    //     大于零 说明 东西1 比 东西2 大
    //     小于零 说明 东西1 比 东西2 小
    //     等于零 说明 东西1 和 东西2 相等
    //   }
    //   ...
    // }
    // 也就是说你在用这个排序算法的时候, 除了需要传入一列东西以外, 还需要传入一个比较函数. 为什么呢? 注意这个排序函数在利用比较函数干什么: 函数执行到这里, 它需要判断两个东西的大小. 整数/浮点数的大小比较倒是好说, 但是任意类型的两个对象怎么比较大小, 就需要程序员自定义了. 我们来考察一个比较函数的输入输出: 输入是同一类型的两个对象; 输出是三个状态 {大, 小, 相等}, 通常用 {大于零的值, 小于零的值, 零} 来分别代表. 也就是说, 比较函数是留给其他程序员自己定义任意类型的对象间大小关系的. 一个算法接收一个比较函数, 就能把具体两个对象怎么比较这件事从算法中分离 (抽象) 出来, 丢给别人做, 自己只关系高层的实现. 排序算法并不关心它手上的元素的序关系到底是怎么定义的, 它只需要知道比较结果.

    //###参数
    //compareFunction 用来指定某种顺序排列的函数，如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序
    //compareFunction详解
    //compareFunction(a, b)
    //a和b是两个要被比较的元素，比较函数的返回值会分为三种情况
    //compareFunction(a, b) < 0 那么a会排在b之前(a,b按顺序排列)
    //compareFunction(a, b) = 0 a和b的位置不变 
    //compareFunction(a, b) > 0 b会排在a之前(a,b交换位置)
    //总的来说就是return 1的时候就在算法操作里交换两个正在比较元素的位置，至于排序的结果的顺序和数据结构比较逻辑，就由程序员自己来决定了。
    function compare(a, b){
        if(a<b){
            return -1;
        }
        if(a>b){
            return 1;
        }
        return 0;
    }
    
    //###返回值 Array(selft)
    //排序后的数组，这里需要注意的是数组原地排序，在原来的数组基础上进行排序，

    //###Example
    //数字排序 正序
    const sortNumbers = [4, 2, 5, 1, 3]; 
    console.log(sortNumbers.sort((a, b) => a - b)); //正序 
    // (a, b) => {
    //     return a - b;
    // }
    //本质上是实现了
    // if(a > b){ //a比b大 需要b排在前面 小的排在前面 实现正序
    //     return 1; //现有的ab进行交换位置
    // }
    // if(a < b){
    //     return -1;
    // }
    // if(a === b){
    //     return 0;
    // }
    console.log(sortNumbers.sort((a, b) => b - a)); //倒序
    // (a, b) => {
    //     return b - a;
    // }
    // if(a < b){ //b比a大 需要b排在前面 大得排在前面 实现倒序 
    //     return 1; //现有的ab进行交换位置
    // }
    // if(a > b){
    //     return -1;
    // }
    // if(a === b){
    //     return 0;
    // }
    //根据对象的属性值排序
    const sortItems = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: undefined},
        { name: 'Zeros', value: 37 },
        { name: 'Zeros', value: 37 },       
    ];
    //sort by value
    console.log(sortItems.sort((a, b) => {
        //修复undefined值在算法中的排序错误，将undefined排在最前
        if(a.value === undefined){
            return -1;
        }
        if(b.value === undefined){
            return 1;
        }
        return (a.value - b.value);
    }));
    //sort by name
    //这里由于是字符串进行比较，所以需要讲解字符串比较的原理
    //关系运算符中的隐式转换，四种情况: (undefined,null特殊值除外)
        //1.两个操作数都是数值时，直接进行数值比较
            //'a'>'z' //false //'a'的ASCII的值是97, 'c'的ASCII的值是122 
        //2.两个操作数都是字符串，则比较两个字符串对应的字符编码的值ASCII，使用charCodeAt()进行转换之后再进行比较
            //'3'>'22' //true 两个都是字符串，字符编码进行比较
        //3.两个操作数中有一个是数值，则将另一个转换为数值，再进行数值比较
            //'3'>22 //false 其中有一个是数值，转换成数值进行比较
        //4.两个操作数中有一个是对象，则先调用ValueOf()方法或者toString()方法，再用结果进行比较
            //new String('a') > new String('B') //true 同样都调用toString()进行转换之后进行比较，两个字符串的ASCII码进行比较，'a'的ACSII值是97,'B'的ASCII值是66
    console.log();
    console.log(sortItems.sort((a, b) => {
        const nameA = a.name.trim().toLowerCase();
        const nameB = b.name.trim().toLowerCase();
        if(nameA > nameB){ //ASCII码小的排在前面 按照小写字母a-z顺序排列
            return 1; //a,b交换位置
        }
        if(nameA < nameB){
            return -1;
        }
        return 0;
    }))
    //创建显示以及排序数组
    const sortStringArray = ["Blue", "Humpback", "Beluga"];
    const sortNumericStringArray = ["80", "9", "700"];
    const sortNumberArray = [40, 1, 5, 200];
    const sortMixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
    const compareNumbers = function(a, b){
        return a - b;
    }
    console.log();
    console.log(sortStringArray.join());     
    console.log(sortStringArray.sort());     
    console.log();     
    console.log(sortNumericStringArray.join());     
    console.log(sortNumericStringArray.sort());  //默认按照ASCII排序
    console.log(sortNumericStringArray.sort(compareNumbers)); //提供比较函数，按照数组排序 
    console.log();     
    console.log(sortNumberArray.join()); 
    console.log(sortNumberArray.sort());  //即使是数字，也转换成了字符串进行排序，按照ASCII排序
    console.log(sortNumberArray.sort(compareNumbers));     
    console.log();     
    console.log(sortMixedNumericArray.join());     
    console.log(sortMixedNumericArray.sort());     
    console.log(sortMixedNumericArray.sort(compareNumbers)); 
    
    //对非ASCII字符排序
    const sortNotASC = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
    console.log(sortNotASC.sort((a, b)=>{
        return a.localeCompare(b);
    }));

    //使用映射改善排序
    //对于复杂的数组对象，尤其当元素较多结构复杂时。使用map把需要排序的值还有数组的索引映射到一个新的数组，排序之后再通过排序后的索引值进行排序，减少操作的复杂度，提高执行效率
    const sortMapIndexArray = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
    const mappedArray = sortMapIndexArray.map((element, index) => {
        return {
            index,
            value: element.toLowerCase()
        }
    });
    mappedArray.sort((a, b) => {
        return +(a.value > b.value) || +(a.value === b.value) - 1
    });
    const finalResult = mappedArray.map((element) => {
        return sortMapIndexArray[element.index];
    });
    console.log(finalResult);

//--//##Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...itemN]]]])

    //###Description
    //splice方法通过在指定位置删除现有元素和添加新元素来修改数组，来实现修改原数组的目的
    //如果添加进数组的元素个数不等于被删除的元素个数，数组的长度将会发生改变
    //splice与slice方法的作用是不同的，splice直接在原数组上修改

    //###参数
    //start 指定修改的开始位置，从0开始，如果超过数组的长度，则从数组末尾开始添加内容，如果为负值，则表示从数组末尾开始的第几位，如果负数的绝对值大于数组的长度，则表示开始位置为0
    //|deleteCount 整数，要删除的数组的个数，包括start位置的元素,如果deleteCount是0，则是添加元素模式。如果deleteCount大于start之后的元素总数，则从start后面的元素都将被删除，如果deleteCount被省略，则相当于array.length - start
    //|itemN 要添加进的数组的元素，从start开始，如果不指定，则将只删除元素
    //灵活使用这三个参数可以实现各种不同的操作
    //start参数是必须的，deleteCount参数用于控制是删除还是添加
    //array.splice(start) 从start位置开始删除[start, end]的元素
    //array.splice(start, deleteCount) 从start位置开始删除[start, count]的元素
    //array.splice(start, 0, item1, item2, ...) 从start位置开始添加item1, item2, ...元素,start位置的元素会被插入元素导致后移
    
    //###返回值
    //被删除的元素组成的一个数组，如果只有一个元素被删除，则返回只包含一个元素的数组，如果没有删除元素，则返回空数组

    //###Example
    //从索引第2位开始删除0个元素，插入“drum”
    const spliceArray = ["angel", "clown", "mandarin", "surgeon"];
    console.log(spliceArray.splice(2, 0, "drum"));
    console.log(spliceArray);

    //从索引第3位开始删除1个元素
    const spliceArray1 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
    console.log(spliceArray1.splice(3, 1));
    console.log(spliceArray1);

    //从索引第2位开始删除1个元素，然后插入“trumpet”
    const spliceArray2 = ['angel', 'clown', 'drum', 'sturgeon'];
    console.log(spliceArray2.splice(2, 1, 'trumpet'));
    console.log(spliceArray2);

    //从第0位开始删除2个元素，然后插入"parrot","anemone"和"blue"
    const spliceArray3 = ['angel', 'clown', 'trumpet', 'sturgeon'];
    spliceArray3.splice(0, 2, 'parrot', 'anemone', 'blue');
    console.log(spliceArray3);

    //从索引第2位开始删除2个元素节
    const spliceArray4 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
    spliceArray4.splice(spliceArray4.length - 3, 2);
    console.log(spliceArray4);

    //从索引第2位开始删除所有元素
    const spliceArray5 = ['angel', 'clown', 'mandarin', 'sturgeon'];
    console.log(spliceArray5.splice(2));
    console.log(spliceArray5);

//--//##Array.prototype.toLocaleString([locals[, options]])

    //###Description
    //返回一个字符串表示数组中的元素，数组中的元素将会使用各自的toLocaleString方法转换字符串
    //数组中的元素将会使用各自的 toLocaleString 方法：

        // Object: Object.prototype.toLocaleString()
        // Number: Number.prototype.toLocaleString()
        // Date: Date.prototype.toLocaleString()

    //###参数
    //|locals 带有BCP 47语言标记的字符串或者字符串数组
    //|options 一个可配置的属性对象，对于数字，Number.prototype.toLocaleString()，对于日期Date.prototype.toLocaleString()
    
    //###返回值
    //表示数组元素的字符串

    //###Example
    //显示prices数组中显示货币符号
    const toLocaleStringPrices = ['￥7', 500, 8123, 12];
    console.log(toLocaleStringPrices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));
    console.log(toLocaleStringPrices);


//--//##Array.prototype.toString()

    //###Description
    //返回一个字符串，表示指定的数组和其元素
    //Array.prototype.toString()方法覆盖了Object.prototype.toString()方法，它会连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素

    //###参数
    //无
    
    //###返回值
    //一个表示数组元素的字符串，使用逗号分隔

    //###Example
    const toStringArray = [1, 2, 'a', '1a'];
    console.log(toStringArray.toString());

   
//--//##Array.prototype.unshift(element1[, element2[, ...elementN]])

    //###Description
    //将一个或者多个元素添加到数组的开头，并返回该数组的新长度
    //unshift对应相反操作的删除数组开头元素的方法是shift
    //unshift被设计成具有通用性，能够通过call或apply方法作用于类数组对象上

    //###参数
    //elementN 要添加到数组的开头的元素
    
    //###返回值 Number
    //返回添加成功后数组的length属性值

    //###Example
    //添加一个或者多个元素到数组的头部
    const unshiftArray = [0, 1, 2];
    console.log(unshiftArray.unshift(-1));
    console.log(unshiftArray);
    unshiftArray.unshift(-3, -2); //多元素是逐个插入数组的头部的，注意传参顺序
    console.log(unshiftArray);
    unshiftArray.unshift([-4]);
    console.log(unshiftArray);

   
//--//##Array.prototype.values()

    //###Description
    //返回一个新的Array Iterator对象，该对象包含数组所有元素的值
    //

    //###参数
    //无
    
    //###返回值 Array Iterator
    //包含数组所有元素的Array Iterator对象

    //###Example
    //使用for...of循环迭代
    const valueArray = ['w', 'y', 'k', 'o', 'p'];
    for(let value of valueArray.values()){
        console.log(value);
    }

    //使用Iterator.next()方法迭代
    const valueArray1 = ['w', 'y', 'k', 'o', 'p'];
    const iteratorValueArray1 = valueArray1.values();
    console.log(iteratorValueArray1.next()); //下轮事件循环开始
    console.log(iteratorValueArray1.next());
    console.log(iteratorValueArray1.next());
    console.log(iteratorValueArray1.next());
    console.log(iteratorValueArray1.next());
    console.log(iteratorValueArray1.next());

    
   
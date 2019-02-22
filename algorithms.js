//bubble sort
// let bubbleSortTestArr = [22, 55, 65, 343, 6646, 334, 2, 66, 77, 99, 89899, 6786, 987, 456, 7877, 343, 646, 3353, 88, 99, 22, 666, 8877, 88, 88, 88, 88, 22, 55, 65, 343, 6646, 334, 2, 66, 77, 99, 89899, 6786, 987, 456, 7877, 343, 646, 3353, 88, 99, 22, 666, 8877, 88, 88, 88, 88, 22, 55, 65, 343, 6646, 334, 2, 66, 77, 99, 89899, 6786, 987, 456, 7877, 343, 646, 3353, 88, 99, 22, 666, 8877, 88, 88, 88, 88, 22, 55, 65, 343, 6646, 334, 2, 66, 77, 99, 89899, 6786, 987, 456, 7877, 343, 646, 3353, 88, 99, 22, 666, 8877, 88, 88, 88, 88, 22, 55, 65, 343, 6646, 334, 2, 66, 77, 99, 89899, 6786, 987, 456, 7877, 343, 646, 3353, 88, 99, 22, 666, 8877, 88, 88, 88, 88];
const generateRandomArray = function(size = 10, max = 9999){
    const getRandomNumber = function(){
        return Math.floor(Math.random() * max)
    };
    const array = [];
    for(let i=0; i<size; i++){
        array.push(getRandomNumber());
    }
    return array;
}
let bubbleSortTestArr = generateRandomArray(9999, 999999999);

// let bubbleSortTestArr = [2, 3, 5, 4, 1];
// let bubbleSortTestArr = [2, 3, 5, 4, 11, 1, 6];
const removeSameValue = function(arr){
    let arraySet = new Set(arr);
    let arrayResult = [];
    for(let value of arraySet.values()){
        arrayResult.push(value);
    }
    return arrayResult;
}
//bubbleSortTestArr = removeSameValue(bubbleSortTestArr);
console.dir(bubbleSortTestArr);

//冒泡排序
const bubbleSort = function(arr){
    //用程序实现算法就要换另一个思路，分析好那些是重复的步骤，就用循环来实现，分析好循环的执行条件，什么时候终止循环，或者循环的规律，重复步骤需要几层循环来实现。有那些步骤需要逻辑判断。理清思路就可以写出好的算法代码了。
    //如何理解两层循环都分别做什么是关键，虽然在纸上可以写出冒泡排序的算法，但是落实到代码的循环里就需要仔细思考一下如何实现。
    //核心是比较两个相邻元素的大小，如果第一个元素比第二个大，就交换两个元素的位置，数组内所有相邻的元素两两比较，直到最后一个元素，那么最后一个元素就是最大的元素了，下次循环可以不用遍历最后一个元素
    //继续执行这样的循环，直到没有任何需要比较的元素
    const startTime = new Date();
    for(let loopTimes = 0; loopTimes < arr.length - 1; loopTimes++){ //第一层循环控制循环次数，这里不要理解为数组中的元素了
        for(let index = 0; index < arr.length - 1 - loopTimes; index++){ //第二层循环控制遍历的元素索引，要排除掉已经排到最后的元素, 由于外层循环每次都排序出了一个最大的元素在最后，所以通过控制排序索引，每次减去当前的循环次数，就可以了
            //console.log(arr[j], arr[j+1]);
            if(arr[index] > arr[index + 1]){
                const temp = arr[index]; //创建一个临时变量用于交换两个元素的值
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
            }
        }
    }
    const endTime = new Date();
    console.log('Bubble Sort Cost Time:', endTime - startTime);
    return arr;
}

//快速排序
//根据算法。我可以写出一个最简单的快速排序，但是要分析代码的逻辑和终止循环或者递归的条件，由于快排使用的是分治法，所以一定会有递归。
const quickSortSimple = function(arr){
    const startTime = new Date();
    const quickSort = function(arr){
        //递归终止条件
        if(arr.length <= 1){
            return arr;
        }
        //简单快排的思路是先随机取出一个元素，这里使用了Array.prototype.splice方法，删除数组中这个基准元素，并且返回它
        const pivot = arr.splice(Math.floor(Math.random()*(arr.length - 1)), 1);
        //创建两个数组left right用于存储比基准元素小的和比基准元素大的元素
        const left = [];
        const right = [];
        //遍历剩余需要比较的元素
        arr.forEach(element => {
            if(element<pivot[0]){
                left.push(element)
            }else{
                right.push(element);
            }
        });
        //关键在这里，递归继续处理左边的数组和右边的数组，直到数组中的元素剩下1个终止递归
        const sortedLeft = quickSort(left);
        const sortedRight = quickSort(right);
        //使用扩展运算符合并数组
        return [...sortedLeft, ...pivot, ...sortedRight];
    }
    const result = quickSort(arr);
    const endTime = new Date();
    console.log('Fast Sort Cost Time:', endTime - startTime);
    return result;    
}
//交换两个元素的位置
const swap = function(a, b){
    let temp = a;
    a = b;
    b = temp;
}
//优化快速排序算法
const quickSortFast = function(arr){
    //首先分析出算法使用分治法拆分出的重复逻辑，还有终止循环或者递归的条件
    //优化的快速排序算法在排序过程中优化了交换元素的逻辑，减少了交换的次数，并且把pivot元素放置在了最后，避免了越界的问题，我们来写一下算法的逻辑，然后再来思考如何转换成代码，如果使用递归把算法实现
    //算法逻辑:
    //1. 选择一个基准点，一般是选择数组中间元素，而不是选择开头的元素，避免当遇到已经有序的数组时，算法执行次数过多，导致效率低下。
    //2. 移动基准点元素到数组的最后，对余下的元素，做如下操作:
    //从左到右遍历，索引为i，直到找到一个大于等于基准点的值或者等于基准点就停下来
    //从右到左遍历，索引为j，直到找到一个小于基准点的值或者与左到右的遍历交叉，就停下来
    //3.交换找到的值，继续遍历，直到左到右的遍历和右到左的遍历交叉，记住这个交叉点，将放置在最后的元素与这个交叉点交换。因为这个交叉点的左边的元素一定是基准点小的值，右边一定是比基准点大的值。
    //排除掉基准点元素，对余下的数组继续执行同样的步骤。

    //接下来思考如何使用递归实现算法的逻辑
    //如何将结果返回
    //用递归还是循环，这里用递归
    //中止条件,当数组中剩下一个元素时证明排序已经完成，递归的中止条件，将结果返回即可
    //假如我们实在没有什么好思路，可以尝试先写一次逻辑，剩下的根据一次简单的实现，递归下去，用中止条件控制递归，这里我们看到算法有左右遍历，我们可以知道应该while循环
    //从算法的逻辑里我们可以看出，每次递归都需要传入的参数，
    //  (1)要排序的数组
    //  (2)
    //  (3)

    const swap = function(arr, a, b){
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        //[arr[a], arr[b]] = [arr[b], arr[a]];
    }
    const startTime = new Date();
    // const quickSort = function(arr, start, end){
    //     //终止条件
    //     if(start >= end) return; //不要忘记在递归函数里把结果返回去，不能只是加一个终止条件就结束了。
    //     //基准点
    //     let pivotPos = Math.floor((start + end)/2);
    //     const pivot = arr[pivotPos];
    //     //swap to the end
    //     [arr[pivotPos], arr[end]] = [arr[end], arr[pivotPos]];
    //     //left to right loop
    //     let leftPos = start;
    //     let rightPos = end;

    //     let condition = true;
    //     while(condition){ //目前发现的缺点是，有一次多余的循环，循环中判断条件太多，导致算法效率低。
    //         if(arr[leftPos] >= pivot){
    //             rightPos--;
    //             if(arr[rightPos] < pivot){
    //                 // console.log(arr[leftPos]);
    //                 // console.log(arr[rightPos]);
    //                 [arr[leftPos], arr[rightPos]] = [arr[rightPos], arr[leftPos]];
    //                 //swap(arr[leftPos], arr[rightPos]);                
    //             }
    //         }else{           
    //             leftPos++;
    //         }
    //         if(leftPos === end || leftPos >= rightPos){ //交汇的条件判断
    //             //swap(arr[leftPos], arr[rightPos]);
    //             pivotPos = rightPos;
    //             [arr[pivotPos], arr[end]] = [arr[end], arr[pivotPos]];
    //             condition = false;
    //         }        
    //     }   
        
    //     quickSort(arr, start, pivotPos - 1);
    //     quickSort(arr, pivotPos + 1, end);
    //     return arr;
    // }

    const quickSort = function(arr, left, right){
        //终止条件 开始的索引大于等于结束的索引 说明这个数组已经排序完成
        if(left >= right) return;
        //基准点，选择最右边的元素作为基准点
        let pivotPos = right;
        const pivotValue = arr[pivotPos];
        //关键点，创建一个分割索引等于左侧起始点
        let partitionIndex = left;
        for(let i = left; i<right; i++){ //这里的循环条件是不大于最后一个元素的索引
            if(arr[i] < pivotValue){ //大于等于基准点的值不管跳过，当值小于基准点时，和分割点交换，同时分割点索引值加1。
                swap(arr, i, partitionIndex); //这部分比较难理解，这么做减少的判断的逻辑，
                partitionIndex++; //本质上是记录小于参考点元素的索引
            }
        }
        swap(arr, partitionIndex, right); //最后执行尾部元素和分割点swap之后，分割点左侧都是小于基准点值的元素，右侧都是大于基准点值的元素

        quickSort(arr, left, partitionIndex - 1); //对分割点左侧的元素排序
        quickSort(arr, partitionIndex + 1, right); //对分割点右侧的元素排序
        return arr;        
    }

    // const quickSort = function(arr, left, right){
    //     var len = arr.length, 
    //     pivot,
    //     partitionIndex;
     
     
    //    if(left < right){
    //      pivot = right;
    //      partitionIndex = partition(arr, pivot, left, right);
         
    //     //sort left and right
    //     quickSort(arr, left, partitionIndex - 1);
    //     quickSort(arr, partitionIndex + 1, right);
    //    }
    //    return arr;
    //  }
      
    //  function partition(arr, pivot, left, right){
    //     var pivotValue = arr[pivot],
    //         partitionIndex = left;
     
    //     for(var i = left; i < right; i++){
    //      if(arr[i] < pivotValue){
    //        swap(arr, i, partitionIndex);
    //        partitionIndex++;
    //      }
    //    }
    //    swap(arr, right, partitionIndex);
    //    return partitionIndex;
    //  }
      
    // const result = quickSort(arr, 0, arr.length - 1);

    const result = quickSort(arr, 0, arr.length-1);
    const endTime = new Date();
    console.log('Fast Sort Fast By Jason Cost Time:', endTime - startTime);
    return result;     
}

//系统内置排序算法
const internalSort = function(arr){
    const startTime = new Date();
    const result = Array.prototype.sort.call(arr, function(a, b){
        return a - b;
    });
    const endTime = new Date();
    console.log('Internal Sort Cost Time:', endTime - startTime);
    return result; 
}

// //冒泡排序结果测试 排序10000个值的数组 用时177ms
// bubbleSortTestArr = bubbleSort(bubbleSortTestArr);
// console.log(bubbleSortTestArr);

//快速排序结果测试 排序10000个值的数组 用时22ms
// bubbleSortTestArr = quickSortSimple(bubbleSortTestArr);
// console.log(bubbleSortTestArr);

//优化过的快速排序结果测试 排序10000个值的数组 用时6ms，和系统排序一样快。
bubbleSortTestArr = quickSortFast(bubbleSortTestArr);
console.log(bubbleSortTestArr);

//系统内置排序测试结果 排序10000个值的数组 用时6ms
// bubbleSortTestArr = internalSort(bubbleSortTestArr);
// console.log(bubbleSortTestArr);
function makeArray(collection){
    let arr;
    if (typeof collection === 'object'){
        arr = Object.values(collection)
    }
    return arr;
}
function myEach(collection, callback){
    let arr = makeArray(collection);
    for (let i = 0; i<arr.length; i++){
        callback(arr[i])
    }
    return collection;
}
function myMap(collection, callback){
    let newArr = [];
    let arr = makeArray(collection);
    for (let i=0; i<arr.length; i++){
        newArr.push(callback(arr[i]))
    }
    return newArr;
}
function myReduce(collection, callback, acc){
    let arr = makeArray(collection);
    let accumulator;
    let start = 0;
    if (acc !== undefined){
        accumulator = acc;
    }else{
        accumulator = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], arr)
    }
    return accumulator;
}
function myFind(collection, predicate){
    let trues = [];
    for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i]) === true){
            trues.push(collection[i]);
            break;
        }
    }
    return trues[0]
}
function myFilter(collection, predicate){
    let arr = makeArray(collection);
    let trues = [];
    for (let i = 0; i < arr.length; i++){
        if (predicate(arr[i]) === true){
            trues.push(arr[i]);
        }
    }
    return trues;
}
function mySize(collection){
    let arr = makeArray(collection)
    return arr.length;
}
//Array Functions
function myFirst(array, n=1){
    let results = [];
    for (let i = 0; i < n; i++){
        results.push(array[i])
    }
    if (results.length < 2){
        return results[0]
    }else{
        return results;
    }
}
function myLast(array, n=1){
    let results = [];
    for (let i = n; i > 0; i--){
        results.push(array[array.length-i])
    }
    if(results.length < 2){
        return results[0]
    }else{
        return results;
    }
}
//Object Functions
function myKeys(object){
    let results = [];
    for (let keys in object){
        results.push(keys);
    }
    return results;
}
function myValues(object){
    let results = [];
    for (let keys in object){
        results.push(object[keys]);
    }
    return results;
}
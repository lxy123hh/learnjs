const arr = [1, 2, 3, 4, 5];
const arr1 = [{name: 1}, {name: 2}, {name:3}];
// 1.数组遍历
// const callback = function(a, b, arr) {
//   console.log(a, b, arr);
// }
// arr.forEach(callback);

//引用类型在做copy时，只是copy了引用地址，浅拷贝
//深拷贝：新建一个对象，把原对象的属性值copy过来
//const test = arr1[0];  //浅拷贝
const test = {                         //深拷贝
    name: arr1[0].name,
}
test.name = 2;



// arr1.forEach(function(item) {
//     //如果原数组中的item是引用类型，直接修改item的属性值会影响原数组中的item
//     //如果原数组中的item是基本类型，直接修改item的属性值不会影响原数组中的item
//     //一般情况下不这么做
//     item.name = item.name + 1;
//     console.log(item.name);
// })
// console.log(arr1); 



//2.数组的map方法
const newarr1 = arr1.map(function(item) {
    console.log(item)
    return {name:item.name + 1}; //返回一个新对象，原数组不变
})
console.log(newarr1); 
console.log(arr1); //原数组不变


//3. Arry.isArray()方法
//4.every()方法
const result = arr.every(function (item) {
    return item > 0; //判断数组中的每个元素是否都大于0
})
console.log(result); //true
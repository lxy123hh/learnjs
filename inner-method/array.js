const arr = [1, 2, 3, 4, 5];
const arr1 = [{name: 'Tom'}, {name: 'Jerry'}, {name: 'Jack'}];
// 1.数组遍历
// const callback = function(a, b, arr) {
//   console.log(a, b, arr);
// }
// arr.forEach(callback);

//引用类型在做copy时，只是copy了引用地址，浅拷贝
//深拷贝：新建一个对象，把原对象的属性值copy过来
//const test = arr1[0];  //浅拷贝
const test = {
    name: arr1[0].name,
}
test.name = 2;



arr1.forEach(function(item) {
    console.log(item.name);
})


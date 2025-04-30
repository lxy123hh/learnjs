//1.assign
const target = {
    name : 1,
    age : 2
}

const source = {
    name : 3,
    age : 4
}
const result = Object.assign(target, source) //把source的属性复制到target中，返回target
console.log(result) //{ name: 3, age: 4 }，target被修改了，source不变
console.log(target) //{ name: 3, age: 4 }，target被修改了，source不变

//2.entries
const result1 = Object.entries(target) //把对象转换成数组，返回一个二维数组
console.log(result1) // [ [ 'name', 3 ], [ 'age', 4 ] ]
result1.forEach(function(item) {
    console.log(item[0], item[1]) //打印每个属性名和属性值
}) //name 3 age 4
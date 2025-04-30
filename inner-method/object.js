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
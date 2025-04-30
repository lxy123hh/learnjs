const str1 = '1234'
console.log(str1[3])

//2.concat()方法,数组也有
const str2 = '5678'
const str3 = str1.concat(str2) //连接两个字符串
console.log(str3) //12345678

//3.endwith()方法,判断字符串是否以某个字符串结尾
const result = str1.endwith('34') //true
console.log(result) //true

//4.includes()方法,判断字符串中是否包含某个字符串，返回true或false
const result1 = str1.includes('23') //true
console.log(result1) //true

//5.indexOf()方法,返回字符串中某个字符串第一次出现的位置，没找到返回-1
const result2 = str1.indexOf('23') //1
console.log(result2) //1

//6.match()方法,返回字符串中符合正则表达式的结果，没找到返回null
const h1 = '<h1>{{ msg }}</h1>'
const msg = 'hello';

//7.replace()方法,替换字符串中的某个字符串
const result3 = str1.replace('23', '99') //替换字符串中的23为99
console.log(result3) //1994

//8.slice()方法,截取字符串中的某个部分
const result4 = str1.slice(1, 3) //截取字符串中的第1到第3个字符
console.log(result4) //23





//笔记：
/*
* fang.js
* export const mianji = function(a,b){
* console.log(a*b)
* }
* export const zhouchang = function(a,b){
* console.log(a*b):
* }
* /////
* yuan.js
* export const mianji = function (r) {
    console.log(3.14*r*r);
}
export const zhouchang = function (r) {
    console.log(r*2*3.14);
}

//
main.js
import {mianji,zhouchang} from 'fang.js'
import {mianji,zhouchang} from 'yuan.js'

fang.js 和 yuan.js导出的变量名相同 在main.js导入时 后面会覆盖前面的，所以我们可以用
import * as yuan from 'yuan.js'
import * as fang from 'fang.js' 给他们加命名空间 调用时为 yuan.mianji() yuan.zhouzhang fang.mianji() fang.zhouchang()
* */


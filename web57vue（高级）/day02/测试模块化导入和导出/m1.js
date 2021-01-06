let a = 0
let c = 0
function show() {
    console.log(111111);
}
// 一个文件只能export default一次
export default {
    a,
    c,
    show
}

// 按需导出,可以多次
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
    console.log(2222);
}

// 当有时候不需要导入其他模块向外暴露的成员时，但是想直接执行代码
import './m2'

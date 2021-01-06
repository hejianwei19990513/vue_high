// 默认导入
import m1 from './m1'
console.log(m1);

// 按需导入（两者不冲突）
import {s1,s2 as a ,say} from './m1'
console.log(s1,a,say);
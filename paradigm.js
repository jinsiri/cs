'use strict';

// 함수형 프로그래밍
const ret = [1, 2, 3, 4, 5, 11, 12]
    .reduce((max, num) => num > max ? num : max, 0)
console.log(ret)

// 순수 함수
// 출력이 입력에 의존
const pure = (a, b) => {
    return a + b;
}

// 객체 지향 프로그래밍
const ret2 = [1, 2, 3, 4, 5, 11, 12]
class List {
    constructor(list) {
        this.list = list
        this.mx = list.reduce((max, num) => num > max ? num : max, 0)
    }
    getMax() {
        return this.mx
    }
}
const a = new List(ret2)
console.log(a.getMax()) // 12

// 절차형 프로그래밍
let b = 0;
for (let i = 0; i < ret.length; i++) {
    b = Math.max(ret[i], a)
}
console.log(b);
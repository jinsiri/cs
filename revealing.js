// revealing module pattern
// js에는 자바의 private, public 같은 접근 제어자가 없다(전역실행)
// 이 노출모듈 패턴으로 접근제어자 구현하기도 한다

// 화살표 함수는 IE에서 먹통...
const pukuba = (() => {
    const a = 1
    const b = () => 2
    const public = {
        c: 2,
        d: () => 3
    }
    return public
})() // 즉시실행 함수. 초기화 코드에 많이 사용.
console.log(pukuba)
console.log(pukuba.a)
// {c:2, d:[Function:d]}
// undefined
// 이 부분 책 설명이 좀 이상함.

// 이 원리 기반으로 CJS(CommonJS) 모듈 방식 만들어짐.
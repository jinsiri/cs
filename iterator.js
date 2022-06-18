// 자료형 구조 상관없이 하나의 인터페이스로 순회 가능.

const mp = new Map()
mp.set('a', 1)
mp.set('b', 2)
mp.set('c', 3)

const st = new Set()
st.add(1)
st.add(2)
st.add(3)

for (let a of mp) console.log(a)
for (let a of st) console.log(a)

// 자료형이 set과 map으로 다르지만
// for a of b라는 이터레이터 프로토콜로 순회 가능

/*
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
1
2
3
*/
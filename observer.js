// 옵저버 패턴
// 예) 트위터
// 주체(관찰자)가 어떤 객체의 상태 변화를 관찰하다가 상태 변화가 있을 때마다
// 메서드 등을 통해 옵저버(객체 상태변화에 따라 변경 사항 생기는 객체)에게 변화를 알림.
// 객체와 주체가 합쳐질 수도 있음.

// 프록시 객체로 구현할 수 있음.
// 프록시 객체? 어떤 대상의 기본적인 동작을 가로챌 수 있는 개체. js에서 두 개의 매개변수 가짐.
// target(프록시할 대상)과 handler(동작 정해진 함수)

const handler = {
    get: function (target, name) {
        return name === 'name' ? `${target.a} ${target.b}` : target[name]
    }
}

const p = new Proxy({ a: 'I', b: 'am Jinsil' }, handler)
console.log(p.name);

// p라는 변수에 name이라는 속성을 선언하지 않았지만
// p.name으로 name 속성에 접근하려고 할 때 그 부분을 가로채 문자열을 만들어 반환

function createReactiveObject(target, callback) {
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            if (value !== obj[prop]) {
                const prev = obj[prop]
                obj[prop] = value
                callback(`${prop}가 [${prev}] >> [${value}]로 변경되었습니다.`)
            }
            return true
        }
    })
    return proxy
}

const a = {
    "A": "솔로"
}
const b = createReactiveObject(a, console.log)
b.A = "솔로"
b.A = "듀엣"

// 프록시 객체의 get() 함수는 속성과 함수에 대한 접근을 가로채고
// has()함수는 in 연산자의 사용 가로챔. set() 함수는 속성에 대한 접근 가로채서 A속성이 솔로에서 듀엣되는 것 감시.
// 뷰에서 ref나 reactive로 정의하면 해당 값이 변경되었을 때 자동으로 DOM값 변경되는데
// 프록시 객체를 이용한 옵저버 패턴으로 구현한 것.
'use strict';

const num = new Object(42);
const str = new Object('abc');
num.constructor.name; // Number
str.constructor.name; // String

// js에서 팩토리 패턴 new Object()로 간단 구현 가능.
// 어떤 타입을 전달하느냐에 따라 다른 타입 객체 생성됨.
// 전달값에 따라 객체가 생성되며 인스턴스 타입 결정.

class Latte {
    constructor() {
        this.name = "latte"
    }
}

class Espresso {
    constructor() {
        this.name = "Espresso"
    }
}

class LatteFactory {
    static createCoffee() {
        return new Latte()
    }
}

class EspressoFactorry {
    static createCoffee() {
        return new Espresso()
    }
}

const factoryList { LatteFactory, EspressoFactory }

class CoffeeFactory {
    static createCoffee(type) {
        const factory = factoryList[type]
        return factory.createCoffee()
    }
}

const main = () => {
    // 라떼 주문
    const coffee = CoffeeFactory.createCoffee("LatteFactory")
    // 커피 이름 부름
    console.log(coffee.name) //latee
}

main();
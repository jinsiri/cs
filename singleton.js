'use strict';

// 하나의 클래스에 하나의 인스턴스만!
// 데이터베이스 연결에 많이 사용
// 인스턴스 생성 비용이 주는 반면 의존성이 높아짐

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this
        }
        return Singleton.instance
    }
    getInstance() {
        return this.instance
    }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true

// 디비 연결 해보기
const URL = 'DB주소'; //책엔 몽고디비로 시작하는 주소 있음
const createConnection = url => ({ "url": url });
class DB {
    constructor(url) {
        if (!DB.instance) { // DB의 인스턴스가 생성되지 않았으면
            DB.instance = createConnection(url) // 만들라
        } // 조건문 미해당 시 다음 코드 라인으로
        return DB.instance // 인스턴스 리턴
    }
    connect() {
        return this.instance
    }
}
const c = new DB(URL);
const d = new DB(URL);
console.log(c === d); // true
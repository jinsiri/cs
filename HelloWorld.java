class Singleton {
    private static class singleInstanceHolder {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static synchronized Singleton getInstance() {
        return singleInstanceHolder.INSTANCE;
    }
    // 면접볼 때 질문 받았던 synchronized.
    // 처음 들어본 개념이었음.
    // 데이터의 스레드세이프를 위해 해당 키워드 사용
    // 여러개의 스레드가 한개의 자원을 사용하고자 할 때, 현재 데이터를 사용하고 있는 해당 스레드를 제외하고
    // 나머지 스레드들은 데이터에 접근 할 수 없도록 막음
    // 변수와 함수에 동기화해서 사용할 수 있다고 함. 남발하면 성능저하
}

public class HelloWorld {
    public static void main(String[] args) {
        Singleton a = Singleton.getInstance();
        Singleton b = Singleton.getInstance();
        System.out.println(a.hashCode());
        System.out.println(b.hashCode());
        if (a == b) {
            System.out.println(true);
        }
    }
}
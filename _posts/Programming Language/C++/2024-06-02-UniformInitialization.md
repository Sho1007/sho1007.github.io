---
title: "Uniform Initialization"
category:
- C++
tag:
- C++
- Initialization
toc: true
toc_sticky: true
date: 2024-06-02
last-modified-at: 2024-06-02
---
# Uniform Initialization
유니폼 초기화 혹은 균일 초기화라고 부른다.
## 생기게된 계기
C++ 에서 변수를 초기화 할 때, 아래와 같은 실수를 저지른다.
```c++
    int a();
    MyClass b();
```
이 때, a와 b는 작동 방식이 다르다. a는 int자료형을 Direct Initialization한 것이고, b는 MyClass라고 하는 자료형을 반환하는 함수를 정의한 것 이기 때문에, 생성자가 호줄되지 않는다. (전방선언)

> 함수의 정의처럼 보이는 것들은 모두 함수의 정의로 해석   

다른 예로는,
```c++
B b(A());
```
의 경우, 인자값을 받지 않고 A를 return 하는 함수를, 다시 인자값으로 받아 B를 return하는 함수 b인 것이다. (우리는 class A의 기본 생성자로 생성된 객체 A를 인자값으로 받는 B 생성자로 b를 생성했다고 생각했지만)
> 문제는, 소괄호 ()가 함수를 인자를 정의할 때도, 객체의 생성자를 호출할 때도 사용되기 때문

그래서 이런 문제를 해결하고자 나온 것이, {}를 사용하는 Uniform Initialization이다.

## Uniform Initialization 의 특징

### ()생성과 {}생성의 차이점
데이터 손실이 있는 형 변환 (Narro Conversion) 의 가능 여부
```c++
    int A(3.5f) // Narrow-Conversion 가능
    int B{3.f} // Narro-Conversion 불가 -> Error 발생
```

### 반환 할 때의 특징
Uniform Initialization 으로 반환할 때에는, 생성할 객체의 타입을 명시하지 않아도 된다는 특징이 있다.
```c++
class A
{
    public:
    A(int x, double y) {}
}

A func()
{
    return {3, 3.5};    // A(3, 3.5) 와 동일
}
```
이 경우 컴파일러가 함수의 반환값을 보고 추론하여 A의 생성자를 호출한다.
### Initializer_list (초기화자 리스트)
배열을 초기화할 때, {}를 사용할 수 있다.
```c++
int arr[] = {1, 2, 3, 4};
```
Uniform Initialization을 사용하면, 객체도 이처럼 초기화할 수 있는데, 이 때 Initializer_list 가 사용된다.
```c++
class A
{
    public:
    A(std::initializer_list<int> l)
    {
        for (auto iter = l.begin(), iter != l.end(); ++iter)
        {
            // Todo : Use *iter
        }
    }
}

int main()
{
    A a = {1, 2, 3, 4};
}

```
### Initializer_list 사용시 주의할 점
* ()을 사용해 생성하면 initializer_list 를 사용할 수 없다.
* 원소의 갯수가 1개일 때 주의할점
    * 벡터 생성 시
        ```c++
        vector<int> a(10); // 원소 10개짜리 벡터 생성
        vector<int> b{10}; // 10을 원소로 가지는 1개짜리 벡터 생성
        // vector<int> b = {10} 와 동일;
        ```
* initializer_list 가 최우선으로 고려되어 생기는 문제점
    ```c++
    class A {
    public:
    A(int x, double y) { std::cout << "일반 생성자! " << std::endl; }

    A(std::initializer_list<int> lst) {
        std::cout << "초기화자 사용 생성자! " << std::endl;
    }
    };

    int main() {
    A a(3, 1.5);  // Good
    A b{3, 1.5};  // Bad! -> initializer_list<int> 인데, 1.5인 double 이 들어왔음 -> Narrow-Conversion이 안되므로 error 발생
    }
    ```
* auto를 사용하여 생기는 문제점
    * 원소의 갯수에 따른 문제(해결됨)
        ```c++
        auto a{1};          //std::initializer_list<int>
        auto b{2, 3, 4};    //std::initializer_list<int>
        // 즉 둘 다 배열로 간주된다는 점
        ```
        * 하지만 이는 원소의 갯수가 1개이나, 2개 이상이냐로 나뉘어 해결됨
        ```c++
        auto a{1};          // 그냥 int
        auto b{2, 3, 4};    //std::initializer_list<int>
        ```
    * 문자열에 대한 문제 
        ```c++
        auto list = {"abc", "def", "ghi"};
        //std::initilizer_list<string>이 아닌 std::initilizer_list<const char*>이 됨

        // 이를 해결하기 위해서는 C++14에서 추가된 리터럴 연산자를 사용

        using namespace std::literals;
        auto stringList = {"abc"s, "def"s, "ghi"s};
        // 이러면 std::initilaizer_list<string>으로 처리됨
        ```



# Reference
[모두의 코드](https://modoocode.com/286)
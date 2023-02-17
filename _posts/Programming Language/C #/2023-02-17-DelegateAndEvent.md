---
title: "Delegate / Event"
category:
- C Sharp
tag:
- C Sharp
- Delegate
- Event
toc: true
toc_sticky: true
date: 2023-02-17
last-modified-at: 2023-02-17
---
# Delegate
## 정의
같은 형식의 [단일 / 복수] 함수를 대신하여 호출해주는 대리자
- 메서드만 호출 가능
- 외부에서도 호출 가능 (단, private / protected 메서드는 호출 불가)
## 형식
```c#
// [접근 한정자] delegate [반환형] [델리게이트 타입 이름](메서드 매개변수)
    public delegate int MyIntDelegate(string name);
```
## 사용
(c# 1.0 이상)
```c#
// [델리게이트 타입 이름] [델리게이트 변수 이름] = new [델리게이트 타입 이름](메서드 이름);
    MyIntDelegate myIntDelegate = new MyIntDelegate(MyFunction);
    myIntDelegate(5);   // 델리게이트에 등록된 함수들에 매개변수 5가 전달되어 호출
```
(c# 2.0 이상)
```c#
// [델리게이트 타입 이름] [델리게이트 변수 이름] = 메서드 이름;
    MyIntDelegate myIntDelegate = MyFunction;
    myIntDelegate(5);
```
## Multicast Delegate
'다수'의 메서드를 호출
1. 포함
    ```c#
        myIntDelegate += MyFunction1;
        myIntDelegate += MyFunction2;
    ```
2. 제거
    ```c#
        myIntDelegate -= MyFunction1;
        myIntDelegate -= MyFunction2;
    ```

# Evenet
## 정의
특정 상황이 발생했을 때, 알리고자하는 용도 (호출 + 데이터 전달)
## 특징
Event는 해당 Event를 포함하는 class 의 method 내부에서만 실행 가능
## 형식
```c#
public class Test : MonoBehaviour
{
// [접근 한정자] event [델리게이트 타입 이름] [이벤트 변수 이름]
    public static event MyIntDelegate MyIntEvent;

    public void CallEvent() // 이 함수를 실행하면
    {
        MyIntEvent("test"); // 이 이벤트에 "test"라는 매개변수를 넣어 호출하겠다.
    }
}

public class Test2 : MonoBehaviour
{
    private void Start()
    {
        Test.MyIntEvent += TestFunction;    // static 으로 event를 선언해서 별도의 객체 없이 접근, += 로 추가 / -= 로 제거
    }
    
    private int TestFunction(string name)   // delegate와 형식이 일치한다.
    {
        print(name);
        return 0;
    }
}
```
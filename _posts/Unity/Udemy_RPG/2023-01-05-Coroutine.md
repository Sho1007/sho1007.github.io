---
title: "Coroutine"
category:
- Unity Udemy
tag:
- Unity
- Udemy
- Coroutine
toc: true
toc_sticky: true
date: 2023-01-05
last-modified-at: 2023-01-05
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# 코루틴 (Coroutine)
하나의 프로세스를 여러 함수들이 공유하는 상태.   
1. frame 단위가 아닌 시간 단위로 함수를 호출시키고 싶을 때 사용
2. 함수 중간에 지연 시간을 넣고 싶을 때 사용
3. 여러 함수를 동시에 실행시켜야할 때 사용

# IEnumerator : 열거자
코루틴 = 함수들의 배열
함수들은 IEnumerator 라는 인터페이스를 사용해서, 열거자를 구현
열거자는 yield를 만나면, 소유권을 반납하고 대기한다.
```c#
public interface IEnumerator
{
    object Current {get;} // 현재 가리키는 오브젝트
    bool MoveNext();    // 다음 오브젝트로 넘어간다. 없다면 false
}
```

## 사용법
```c#
private IEnumerator TestFunc()
{
    print("1");
    yield return null;
    print("2");
}

private void MyFunction()
{
    IEnumerator testFunc = TestFunc();
    testFunc.MoveNext();
    print("3");
    testFunc.MoveNext();
}
```
결과
>   1   
    3   
    2
    
# 코루틴 사용법
IEnumerator를 사용하여 하나의 프로세스를 여러 함수들이 공유한다.   
만약 F키를 누르면 서서히 사라지는 Fade 함수를 만들고 싶다면
```c#
private IEnumerator Fade()
{
    for (float i = 1.0f; i >= 0.0f; i -= 0.1f)
    {
        Color c = renderer.material.color;
        c.a = f;
        renderer.material.color = c;
        yield return null;
    }
}
private void Update()
{
    if (Input.GetKeyDown("f"))
    {
        // 아래와 같이 하면, fade.Current() 를 사용하여 현재상태를 계속 확인할 수 있다.
        IEnumerator fade = Fade();
        StartCoroutine(fade);
        // 혹은 간단히 사용하려면
        //StartCoroutine("Fade");
    }
}
```

# yield 의 종류
## 1. null
Update()가 끝나면 실행 (다음 프레임에 실행)
## 2. new WaitForEndOfFrame()
한 프레임워크가 모두 종료된 후 실행   
즉, 모든 Update가 끝나고, 화면 렌더링까지 마친 후 실행
## 3. new WaitForFixedUpdate()
FixedUpdate()가 끝나면 실행
## 4. new WaitForSeconds(1.0f)
해당 초가 끝나면 실행
## 5. new WaitForSecondsRealTime(1.0f)
해당 초가 끝나면 실행, 하지만 여기서 초(시간)은 Time.timeScale의 영향을 받지 않는 <B>절대 시간</B>을 의미
## 6. new WaitUntil(bool)
매개변수인 bool의 값이 참이 될때 실행   
실행 위치는 Update() 와 LateUpdate() 사이
```c#
public class TestClass : MonoBehaviour
{
    private int num1 = 10, num2 = 20;

    private void Start()
    {
        StartCoroutine(CompareCoroutine());
    }

    private IEnumerator CompareCoroutine()
    {
        Debug.Log("비교 시작");
        yield return new WaitUntil(()=>num1 > num2);
        Debug.Log("비교 끝");
    }
    
    private void Update()
    {
        num1++; // 11번의 업데이트가 끝나면 "비교 끝" 출력
    }
}
```
## 7. new WaitWhile(bool)
WaitUntil과 똑같지만 bool 값이 false 일 때 실행

## 8. StartCoroutine(IEnumerator)
함수 안의 Coroutine이 끝나면 실행

## 기타
yield return new www(string) : 웹 통신 작업이 끝날 때까지 대기   
yield return new AsyncIoeration : 비동기 작업이 끝날 때까지 대기 (씬 로딩);


# 참조
https://docs.unity3d.com/kr/560/Manual/Coroutines.html   
https://ansohxxn.github.io/c%20sharp/enumerate/   
https://yeobi27.tistory.com/entry/Unity-yield-return-%EC%A2%85%EB%A5%98
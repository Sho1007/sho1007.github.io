---
title: "Attribute"
category:
    - Unity Udemy
tag:
    - Unity
    - Udemy
    - Attribute
toc: true
toc_sticky: true
date: 2022-12-28
last-modified-at: 2022-12-28
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# Attribute (속성)
Attributes 는 스크립트에서 클래스, 프로퍼티 또는 함수 위에 명시하여 특별한 동작을 나타낼 수 있는 마커입니다. 예를 들어, 프로퍼티 선언 위에 HideInInspector 속성을 추가하여 인스펙터가 공용 프로퍼티인 경우에도 프로퍼티를 표시하지 않도록 할 수 있습니다. C#의 경우 다음과 같이 속성 이름을 대괄호 안에 포함합니다.   
> 즉, C# 스크립트에서 에디트단으로 뭔가를 변경시키고 싶을 때 사용함
```c#
[HideInInspector]
public float strength;
```
[출처 : 유니티 문서](https://docs.unity3d.com/kr/2020.3/Manual/Attributes.html)

# 종류
## SerializeField
접근 제한자가 public이 아닌 변수를 Insepctor 상에 노출시킬 때 사용
```c#
[SerializeField] Transform target; // 이 경우 target의 접근 제한자는 기본값인 private이지만 inspector 창에서 볼(편집할) 수 있다.
```
## Serializable
커스텀 클래스나 구조체를 inspector 상에 노출시킬 때 사용 (직렬화 되어있어야만 가능)
```c#
[Serializable]
public class TestClass
{
    public int A;
    public float B;
    public stirng C;
}
```
## RequireComponent
클래스 위에 사용되는 Attribute로, 지정한 컴포넌트와 종속 관계를 만들어서, 이 Attribute를 사용한 클래스를 추가할 때, 자동으로 지정한 컴포넌트가 추가되도록 함.
> 특정 컴포넌트(ex.Capsule Collider)를 반드시 사용해야 하는 경우 + 삭제 방지

```c#
[RequireComponent(typeof(CapsuleCollider))]
public class TestClass : MonoBehaviour
{
}
```

# 참조
https://kaluteblog.tistory.com/5
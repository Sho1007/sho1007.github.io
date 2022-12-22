---
title: "Animation"
category:
    - Unity Udemy
tag:
    - Unity
    - Udemy
    - Animation
toc: true
toc_sticky: true
date: 2022-12-17
last-modified-at: 2022-12-22
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# Animation
유니티의 애니메이션은 다음으로 구성되어 있다.
1. Animator Component
2. Animator Controller
3. Animation
4. Blend Tree

## Animator Component
게임 오브젝트에 붙여서, 특정 애니메이터 컨트롤러를 통해 해당 오브젝트에 애니메이션을 적용시킨다.

### Animator Component의 Parameter 접근하기
```c#
private void Function()
{
    float value = 0.5f;
    GetComponent<Animator>().SetFloat("MyParameterName", value);
}
```

## Animator Controller
애니메이션들과 변환 과정으로 구성된 State Machine

## Animation
특정 동작

## Blend Tree
다수의 애니메이션들을 부드럽게 섞어주는 노드 (애니메이터 컨트롤러에 들어감)

# 결론
유니티에서 게임오브젝트에 애니메이션을 적용시키기 위해선
1. 게임 오브젝트에 '애니메이터 컴포넌트'를 붙인다.
2. 해당 컴포넌트는 특정 '애니메이터 컨트롤러'를 사용하여 게임 오브젝트에 애니메이션을 적용시킨다.
3. 애니메이터 컨트롤러란, 각종 동작들과 그 동작들 사이의 변환 조건으로 이루어진 일종의 State Machine인 것이다.
4. 이 때, 애니메이터 컨트롤러 안에서, 다수의 동작들을 부드럽게 섞고 싶다면 블렌드 트리를 사용한다.
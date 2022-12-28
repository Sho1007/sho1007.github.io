---
title: "Order Of Execution"
category:
    - Unity Udemy
tag:
    - Unity
    - Udemy
    - Execution
toc: true
toc_sticky: true
date: 2022-12-22
last-modified-at: 2022-12-22
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# Order Of Execution
유니티에서 이벤트 함수의 실행 순서는 아래와 같다.   
![image](https://github.com/Sho1007/sho1007.github.io/blob/main/assets/images/Unity_OrderOfExecution.jpg?raw=true){: width="50%",height="50%"}   
(출처 : https://docs.unity3d.com/kr/current/Manual/ExecutionOrder.html)

## LateUpdate
Update 뒤에 실행되는 함수
1. 카메라 움직임 (카메라를 Update에서 움직일 경우 지터링이 발생할 수 있음)
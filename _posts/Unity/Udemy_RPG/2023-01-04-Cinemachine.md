---
title: "Cinemachine"
category:
- Unity Udemy
tag:
- Unity
- Udemy
- Cinemachine
toc: true
toc_sticky: true
date: 2023-01-04
last-modified-at: 2023-01-04
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# 정의
Cinemachine : Scene에서 여러대의 카메라를 관리할 수 있게 해준다.   

# 구조
Cinemachine Brain이 한대의 Main Camera와, 여러대의 Virtual Camera들을 사용한다.

# 종류
## 1. Virtual Camera
Main Camera에 부착된 [CinemachineBrain] 컴포넌트에 의해 사용되는 가상 카메라
### 속성
1. Priority : 해당 카메라가 가지는 우선순위 (높을수록 우선)
2. Follow : 특정 Transform의 위치를 따라간다. (Position만 변하고 Rotation은 그대로)
3. LookAt : 특정 Transform의 위치를 따라간다. (Position은 그대로 Rotation만 변한다)
4. Body : Virtual Camera를 작동시키는 메인 로직
## 2. Dolly Camera
Dolly Track을 따라 이동하는 Camera
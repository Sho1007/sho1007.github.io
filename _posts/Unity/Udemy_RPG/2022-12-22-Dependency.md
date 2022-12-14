---
title: "Dependency"
category:
    - Unity Udemy
tag:
    - Unity
    - Udemy
    - Dependency
toc: true
toc_sticky: true
date: 2022-12-22
last-modified-at: 2022-12-22
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# Dependency [종속성]
## 정의
하나의 프로그램은 여러 종류의 객체들로 이루어진다. (객체지향)   
이 때 하나의 객체가 다른 객체를 참조(사용)하는 경우가 생기는데 이를 Dependency (객체간의 종속성)라고 한다.
## 종속성을 피해야 하는 이유
프로그램에서 객체간의 종속성을 아예 없앨 수는 없다. (그렇게되면 하나의 커다란 덩어리 코드가 되버리기 때문에)   
하지만 그렇다고 종속성이 계속 생기는걸 방치해둬서는 안된다. 그 이유는 다음과 같다.
1. 프로그램은 수정과 보완이 계속 이루어져야 한다.
2. 이 때 오류가 생긴다면 그 객체를 사용하는 (종속성이 있는) 객체 역시 문제가 생기게된다.
3. 또한 종속성이 단방향이 아닌 순환(사이클)이 있을 경우, 오류는 순환을 타고 결국 해당 사이클에 있는 모든 객체에 오류가 생길 수 있다. 

따라서 종속성과 순환은 프로그램을 구상할 때 피해야 할 대상이다.

# 종속성을 피하는 방법
## Namespace [네임스페이스]
네임스페이스 (명칭공간이라는 번역이 있긴한데 너무 어색하여 이름 그대로 사용하겠다)는 종속성을 피하는 한 방법이다. 
1. 해당 공간에서 정의한 것들은, 다른 객체에서 사용하고자 할 때, (종속성이 발생할 때) 개발자에게 종속성이 있음을 명확히 알린다   
(해당 네임스페이스를 using으로 사용하거나, 해당 네임스페이스를 앞에 명시해야 안의 내용물을 사용 가능). 
2. 같은 함수이름을 사용하여 충돌이 발생하게 되는 경우를 피할 수 있다.   
(서로 다른 네임스페이스 안에서는 같은 이름의 함수나 변수를 사용 가능)

즉, 객체나 함수 변수를 네임스페이스로 한번 더 묶어서 분리하여, 객체간의 종속성 여부 파악이나, 이름 충돌 등을 피하는 것이다.

## Scheduler [스케쥴러]
### 정의
여러 클래스들을 참조해야 하는 경우, 클래스간의 종속성에 사이클이 생기기 쉽다.   
이 때, 인터페이스와 스케쥴러를 사용하여 사이클을 피할 수 있다.
### 스케쥴러가 필요한 상황
1. 캐릭터는 '이동'과 '전투' 클래스를 참조한다.
2. '이동'을 하기 위해선, '전투'의 [현재 목표 취소] 함수를 사용해야 한다.   
(종속성 발생)
3. '전투'를 하기 위해선, '이동'의 [현재 이동 취소] 함수를 사용해야 한다.   
(종속성 발생 -> 사이클 발생)
### 스케쥴러를 활용하여 사이클 회피
1. 우선 스케쥴러를 사용할 비슷한 성격의 클래스를 묶는다.   
(이 경우, 사이클이 발생한 '이동'과 '전투' 클래스가 모두 '행동'이라는 성격을 띈다.)
2. 성격에 맞는 인터페이스와 가상 함수를 만든다.   
('IAction' 이라는 인터페이스를 만들고 [Cancel]이라는 가상 함수를 만들었다.)
3. 각각의 클래스에서 인터페이스를 상속받아서 가상 함수를 보충한다.
4. 'Scheduler' 클래스에서 새로운 '행동'이 들어왔을 때, 이전 행동의 [Cancel]함수를 호출 해준다.
5. 이렇게 되면 '이동'과 '전투'의 직접적인 종속성의 순환이 사라진다.

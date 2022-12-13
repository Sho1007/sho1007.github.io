---
title: "Navigation"
category:
    - Unity Udemy
tag:
    - Unity
    - Udemy
    - Navigation
toc: true
toc_sticky: true
date: 2022-12-13
last-modified-at: 2022-12-13
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# Navigation
네비게이션은 AI 가 특정 위치로 이동하는 데 사용되는 컴포넌트이며 다음으로 구성되어 있다.
1. Navigation
2. Nav Mesh Agent
3. Nav Mesh Obstacle

## Navigation
네비 메쉬를 설정하고 베이크하는 곳
1. 에디터 상단의 Windows -> AI -> Navigation 클릭
2. Navigation 창의 'Bake' 탭에서 네비 메쉬를 설정할 수 있다.
    1. Agent Radius : 낮을 수록 static 오브젝트의 테두리부분이 얇아진다. (더 가깝게 접근 가능)
    2. Max SLope : 높을 수록 더 높은 경사에도 네비 메쉬가 깔린다.
    3. Advanced
        1. Manual Voxel Size  : 네비 메쉬를 구성하는 기본 단위 (복셀)의 사이즈로, 작을 수록 정교한 메쉬가 만들어진다.
        2. Min Region Area : 네비 메쉬가 생성될 최소한의 너비로, 클 수록 건물 옥상 등 예상치 못했던 곳의 네비메쉬를 제거할 수 있다. (적당한 값을 잘 조절해서 사용 필요)

## Nav Mesh Agent
네비 메시 공간을 이동하는 컴포넌트
1. 호출 방법
    ``` c++
    using UnityEngine.AI;
    NavMeshAgent agent = GetComponent<NavMeshAgent>();
    ```
2. 목표 설정
    ``` c++
    // Transform Target;
    agent.destination = Target.position;
    ```
3. Inspector 창에서 속도, 회전 속도, 가속도 등을 설정 가능

## Nav Mesh Obstacle
네비 메쉬 안에서 경로를 가로막는 장애물에 사용
1. 오브젝트가 고정형일 경우 그냥 오브젝트의 Inspector 창에서 Navigation Static 을 체크해준다.
2. 오브젝트가 움직이는 경우 Nav Mesh Obstacle Component를 추가해주고 'Carve' 를 체크해준다.   
    (네비 메쉬 안에 해당 범위 만큼 구멍을 내서 경로에서 제외시킴)
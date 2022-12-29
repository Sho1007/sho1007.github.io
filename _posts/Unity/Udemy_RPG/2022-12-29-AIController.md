---
title: "AI Controller"
category:
- Unity Udemy
tag:
- Unity
- Udemy
- AI
- AI Controller
toc: true
toc_sticky: true
date: 2022-12-29
last-modified-at: 2022-12-29
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# 정의
플레이어의 움직임을 결정했던 Player Controller와 같이 AI의 행동양식을 결정하는데 사용된다.   
Character 라는 상위 Prefab에서 Player 와 Enemy로 나뉘는 다형성을 띄게 된다.

# 기능
## Chase
## Attack

# Chase
플레이어가 추적 범위 안에 들어왔을 때 플레이어를 추적한다.
Fighter 컴포넌트에 이미 Chasing 알고리즘이 들어가 있으므로 그것을 재사용한다.
1. 공격 범위 안에 들어와 있는지 확인
2. 플레이어가 공격 가능한 상태인지 (죽지는 않았는지) 확인
```c#
private bool IsPlayerInAttackRange()
{
    float distanceToPlayer = Vector3.Distance(transform.position, player.transform.position);
    return  distanceToPlayer <= chaseDistance;
}

private void Update()
{
    if (IsPlayerInAttackRange() && fighter.CanAttack(player)) fighter.Attack(player);
    else fighter.Cancel();
}
```
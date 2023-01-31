---
title: "위상 정렬 (Topology Sort)"
category:
    - Algorithm
tag:
    - Sort
    - Data Structure
toc: true
toc_sticky: true
date: 2023-01-31
last-modified-at: 2023-01-31
---

# Topology Sort
## 정의
1. '사이클이 없는' 방향 그래프의 모든 노드를 방향성에 거스르지 않도록 나열한 순서
2. 순서가 정해져 있는 일련의 작업들을 차례대로 수행한 순서
> 흔히 옷 입기나, 수업 듣기 등 '선행 작업'이 등장하는 문제에서 사용


## 구현
```c++
vector<int> afterWork[COUNT]; // 해당 노드의 작업 이후에 수행해야 하는 후행 작업
int degrees[COUNT];           // 해당 노드를 수행하기 전 수행해야 하는 선행 작업의 갯수
int order[COUNT];             // 작업을 수행할 순서
queue<int> works;             // 현재 수행해야할 작업 목록

void TopologySort()
{
    for (int i = 0; i < COUNT; ++i)
    {
        if (degress[i] == 0) works.push(i);     // 선행할 작업이 없으면 큐에 삽입
    }
    
    for (int i = 0; i < COUNT; ++i)
    {
        int now = works.front(); works.pop();   // 작업 목록에서 하나 꺼낸 후
        order[i] = now;                         // 순서 저장
        for (int j = 0; j < afterWork[now].size(); ++j)
        {
            int next = afterWork[now][j];       // 후행 작업을 하나 불러와서
            if (--degress[next] == 0) works.push(next); // 선행 작업 중 하나를 수행 했으므로 감소시키고, 그 수가 0이라면 (더 이상 진행할 선행 작업이 없다면) 큐에 삽입
        }
    }
}
```

## 참조
[참조1](https://m.blog.naver.com/ndb796/221236874984)
[참조2](https://velog.io/@kimdukbae/%EC%9C%84%EC%83%81-%EC%A0%95%EB%A0%AC-Topological-Sorting)
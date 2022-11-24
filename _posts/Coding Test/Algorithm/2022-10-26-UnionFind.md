---
title: "Union Find"
category:
    - Algorithm
tag:
    - Union Find
toc: true
toc_sticky: true
date: 2022-10-26
last-modified-at: 2022-11-04
---

# Union-Find
* [Disjoint Set]()(서로소 집합)을 표현할 때 사용하는 알고리즘
* Union / Find 연산을 사용한다.

## Find
해당 노드의 루트 노드가 무엇인지 찾는 재귀형 연산이다.
```c++
int* p; // 부모노드를 가리키는 배열
int Find(int x)
{
    if (p[x] == x) return x;    // 루트 노드가 자기 자신이면 자신을 그대로 반환
    
    return Find(p[x]);          // 아니라면 자신이 가리키고 있는 노드의 루트노드를 재귀적으로 탐색하여 반환
}
```
하지만 트리가 비대칭일수록 (일렬로 늘어선 모양이 될 수록) 시간복잡도가 O(N)에 가까워진다.   
그래서 아래와 같은 최적화가 가능하다.
```c++
int* p; // 부모노드를 가리키는 배열
int OptimizedFind(int x)
{
    if (p[x] == x) return x;

    return p[x] = Find(p[x]);   // 자기자신이 아니라면 자기자신을 루트노드로 초기화하고 반환
}
```
* 위와 같이 탐색하면서 자기 자신의 부모를 루트노드로 초기화 하기때문에, 해당 경로의 모든 노드들이 루트 바로 아래 달리게 되어 탐색 속도가 증가한다. O(logN)

## Union
두 노드를 하나의 루트로 합치는 연산이다. (합집합)
```c++
int* p; // 부모노드를 가리키는 배열
void Union(int a, int b)
{
    a = Find(a);    // a의 루트노드를 찾는다.
    b = Find(b);    // b의 루트노드를 찾는다.
    
    p[a] = b;       // a(의 루트노드)의 루트노드를 b(의 루트 노드)로 설정한다. (b의 자식 노드로 a가 들어간 셈)
}
```
이 때 트리의 높이를 기준으로 최적화가 가능하다.
```c++
int* p;     // 부모노드를 가리키는 배열
int* rank;  // 해당 트리의 높이를 가리키는 배열
void Union(int a, int b)
{
    a = Find(a);
    b = Find(b);

    if (a == b) return;     // 루트 노드가 같은 경우 (이미 포함 관계)는 그냥 반환

    if (rank[a] < rank[b])
    {
        root[a] = b;
    }
    else                    // 여기서 높이가 같은 경우도 처리
    {
        root[b] = a;

        if (rank[a] == rank[b]) // 만약 둘의 높이가 같다면
            rank[a]++;          // 합치면서 하나 증가했으므로 루트 노트의 높이를 증가 처리
    }
}
```

* 즉 높이가 낮은 쪽을 높이가 높은 쪽의 자식으로 들이는 경우이다.  (높이가 작은 쪽이 높은쪽으로 들어가면 최종 높이는 높은쪽으로 그대로 유지되기 때문)   
* 높이가 같다면 둘을 합친후 증가한 높이 + 1을 적용해준다.
마지막으로 합치면서 두 노드가 속한 트리의 전체 노드의 수를 구하는 경우이다.
```c++
int* p;             // 해당 노드의 부모 노드 배열
int* rank;          // 해당 노드를 루트로 하는 높이 배열
int* nodeCount      // 해당 노드를 루트로 하는 총 노드 수 배열
int Union(int a, int b)
{
    a = Find(a);
    b = Find(b);
    
    if (a == b) return nodeCount[a];        // 해당 노드의 노드 수를 반환

    if (rank[a] < rank[b])
    {
        root[a] = b;
        nodeCount[b] += nodeCount[a];       // 자식의 노드 수를 부모의 노드 수에 더해준다. (서로소 집합이기때문에 겹치는 부분이 없음)
        nodeCount[a] = 1;                   // 추후 최적화된 Find에서 자식노드들이 다 부모노드 밑으로 들어갈 것이기 때문에 자기 자신만 노드로 가짐
        
        return nodeCount[b];                // 부모의 노드 수를 반환
    }
    else
    {
        root[b] = a;
        nodeCount[a] += nodeCount[b];       // 마찬가지로 자식의 노드 수를 부모의 노드 수에 더해준다.
        nodeCount[b] = 1;                   // 추후 최적화된 Find에서 자식노드들이 다 부모노드 밑으로 들어갈 것이기 때문에 자기 자신만 노드로 가짐

        if (rank[a] == rank[b])
            rank[a]++;

        return nodeCount[a];                // 부모의 노드 수를 반환
    }
}
```
* 두 노드는 서로소 집합 (교집합이 없는 집합) 상태이기 때문에 만약 두 노드가 서로 포함 (이미 합집합인) 관계가 아니라면 두 노드의 총 노드 수 는 서로의 노드 수를 더한 것이 된다.
* 그러므로 루트 노드가 될 노드의 노드 수를 두 노드의 합으로 설정해주고, 자식 노드가 될 노드의 노드 수는 1로 설정한다.   
(추후 최적화된 Find가 자식 노드들의 부모를 전부 루트 노드로 바꿀 것이기 때문)

## Union-Find의 사용 예시
전체 집합이 있을 때 구성 원소들이 겹치지 않도록 분할(아래 참고*)하는 데 자주 사용된다.

* [Kruskal MST 알고리즘]()에서 새로 추가할 간선의 양끝 정점이 같은 집합에 속해 있는지(사이클 형성 여부 확인)에 대해 검사하는 경우
* 초기에 {0}, {1}, {2}, … {n} 이 각각 n+1개의 집합을 이루고 있다. 여기에 합집합 연산과, 두 원소가 같은 집합에 포함되어 있는지를 확인하는 연산을 수행하려는 경우
    * [집합의 표현](https://github.com/Sho1007/TIL/blob/main/Algorithm/Coding%20Test/BOJ/%5BBOJ%5D%201717.md)-백준1717번
* 어떤 사이트의 친구 관계가 생긴 순서대로 주어졌을 때, 가입한 두 사람의 친구 네트워크에 몇 명이 있는지 구하는 프로그램을 작성하는 경우
    * [친구 네트워크](https://github.com/Sho1007/TIL/blob/main/Algorithm/Coding%20Test/BOJ/%5BBOJ%5D%204195.md)-백준4195번

### <B>분할(Partition)</B>이란
* 임의의 집합을 분할한다는 것은 각 부분 집합이 아래의 두 가지 조건을 만족하는 Disjoint Set 이 되도록 쪼개는 것이다.   
* 분할된 부분 집합을 합치면 원래의 전체 집합이 된다.   
* 분할된 부분 집합끼리는 겹치는 원소가 없다.
> 예를 들어, S = {1, 2, 3, 4}, A = {1, 2}, B = {3, 4}, C = {2, 3, 4}, D = {4}라면   
A와 B는 S의 분할 O. A와 B는 Disjoint Set   
A와 C는 S의 분할 X. 겹치는 원소가 존재   
A와 D는 S의 분할 X. 두 집합을 합해도 S가 되지 않음   

## 참조
https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html   
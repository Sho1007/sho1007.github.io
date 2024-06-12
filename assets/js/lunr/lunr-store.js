var store = [{
        "title": "17626 Four Squares",
        "excerpt":"17626 Four Squares (c++) 문제 https://www.acmicpc.net/problem/17626 접근 방식 DP N을 만들 수 있는 제곱수들의 합 중 최소 N - sqrt(N) ~ 1까지의 수의 제곱 , 그렇게 뺀 수를 만들 수 있는 최소한의 제곱 수들의 수 (반복) 문제 풀이 #include &lt;iostream&gt; #include &lt;cmath&gt; #define endl '\\n' using namespace std; int N;...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/17626/",
        "teaser": null
      },{
        "title": "11723 집합",
        "excerpt":"11723 집합 (c++) 문제 https://www.acmicpc.net/problem/11723 접근 방식 구현 i번째 위치에 i가 들어간다는 생각으로 풀면 금방 풀림 (굳이 위치를 찾을 필요가 없음) 사실 이건 번호를 넣고 빼는게 아니라 bool 값을 true 와 false로 만드는 연산임 (이걸 알아야함) 해당 번호 자리에 번호가 있는지(true), 없는지(false)가 핵심 문제 풀이 #include &lt;iostream&gt; #include &lt;string&gt; #include...","categories": ["BOJ"],
        "tags": ["Cpp"],
        "url": "/boj/11723/",
        "teaser": null
      },{
        "title": "5430 AC",
        "excerpt":"5430 AC (c++) 문제 https://www.acmicpc.net/problem/5430 접근 방식 문자열 R과 D로 이루어진 명령 결국 R의 갯수가 짝수면 그대로고 홀수면 앞뒤가 바뀐다. D는 맨 앞의 숫자 삭제 그 때 그 때 삭제하는게 아닌 앞에서 삭제할 갯수와 뒤에서 삭제할 갯수를 구한 뒤 마지막에 처리 마지막으로 string으로 감싸서 출력 이 때 정상 순서면, 앞에서...","categories": ["BOJ"],
        "tags": ["Cpp","String"],
        "url": "/boj/5430/",
        "teaser": null
      },{
        "title": "7662 이중 우선순위 큐",
        "excerpt":"7662 이중 우선순위 큐 (c++) 문제 https://www.acmicpc.net/problem/7662 접근 방식 멀티셋 최대값과 최소값에 접근하고 삭제할 수 있어야한다. 삽입때마다 항상 정렬상태를 유지해야한다. 처음엔 직접 클래스를 만들어서 벡터에 lower_bouund를 이용하여 입력을 받았었다. (시간초과) 중복된 수가 나올 수 있으니 맵을 이용해볼까 하다가, 중복이 가능한 정렬상태 자료구조 -&gt; 멀티셋이 생각났다. 멀티셋으로 풀었더니 해결 문제 풀이...","categories": ["BOJ"],
        "tags": ["Cpp","Multi Set"],
        "url": "/boj/7662/",
        "teaser": null
      },{
        "title": "1107 리모컨",
        "excerpt":"1107 리모컨 (c++) 문제 https://www.acmicpc.net/problem/1107 접근 방식 브루트 포스 처음엔 N을 문자열로 받아서 N과 가까운수 중 눌릴 수 있는 수를 찾아보려고 했다. (N[i]가 5인데 5가 안눌리면 4, 6 이런식) 그런데 그럼 2555에서 2가 안눌리면 3555, 1555가 나온다 (가까운 수를 찾으려면 3000, 1999가 나와야함) 그래서 첫째수가 같으면 그 뒤로도 최대한 비슷한...","categories": ["BOJ"],
        "tags": ["Cpp","Brute Force"],
        "url": "/boj/1107/",
        "teaser": null
      },{
        "title": "11403 경로 찾기",
        "excerpt":"11403 경로 찾기 (c++) 문제 https://www.acmicpc.net/problem/11403 접근 방식 플로이드 워셜 알고리즘 i 에서 k 를 거쳐 j 로 갈 수 있는지 O(n^3) 문제 풀이 #include &lt;stdio.h&gt; int main() { int N, arr[101][101]; scanf(\"%d\",&amp;N); for (int i = 1; i &lt;= N; ++i) for (int j = 1; j &lt;= N;...","categories": ["BOJ"],
        "tags": ["Cpp","Floyd-Warshall"],
        "url": "/boj/11403/",
        "teaser": null
      },{
        "title": "16928 뱀과 사다리 게임",
        "excerpt":"16928 뱀과 사다리 게임 (c++) 문제 https://www.acmicpc.net/problem/16928 접근 방식 재귀, dp, 브루트포스 사다리와 뱀을 저장하고 첫번째 칸부터 진행하면서 사다리가 있다면 사다리를 타고 간 칸을 업데이트 뱀이 있다면 뱀을 타고 간 칸을 업데이트 둘 다 없다면 현재칸 앞의 6칸을 업데이트 문제 풀이 #include &lt;iostream&gt; using namespace std; int arr[101] = {};...","categories": ["BOJ"],
        "tags": ["Cpp","Recursive","Dynamic Programming","Brute Force"],
        "url": "/boj/16928/",
        "teaser": null
      },{
        "title": "11286 절대값 힙",
        "excerpt":"11286 절대값 힙 (c++) 문제 https://www.acmicpc.net/problem/11286 접근 방식 우선순위 큐 우선순위 큐에 특정 비교 함수를 넣어주면 해결되는 문제 순위권에 들기 위해선 직접 MeanHip을 작성해야 한다. 문제 풀이 #include &lt;stdio.h&gt; #include &lt;queue&gt; using namespace std; inline int Abs(int a) { return a &lt; 0 ? -a : a; } inline int...","categories": ["BOJ"],
        "tags": ["Cpp","Priority Queue"],
        "url": "/boj/11286/",
        "teaser": null
      },{
        "title": "14500 테트로미노",
        "excerpt":"14500 테트로미노 (c++) 문제 https://www.acmicpc.net/problem/14500 접근 방식 브루트포스, 도형 테트리스 도형들의 몇가지 공통점을 찾았다. 2*3 도형에서 2개를 빼서 만들어지는 도형 3*2 도형에서 2개를 빼서 만들어지는 도형 2*2 도형 1*4 도형 4*1 도형 여기서 핵심은 23과 32를 미리 구해놓고 각각 2개씩 빼가면서 최대값을 비교한다는 것이다. 불필요한 덧셈을 줄일 수 있었다. 문제...","categories": ["BOJ"],
        "tags": ["Cpp","Brute Force"],
        "url": "/boj/14500/",
        "teaser": null
      },{
        "title": "6064 카잉 달력",
        "excerpt":"6064 카잉 달력 (c++) 문제 https://www.acmicpc.net/problem/6064 접근 방식 최소공배수, 수학 결국 우리나라 육십갑자처럼 돌아가면서 짝을 이루는 숫자를 구하는건데, 숫자 N에 대하여 두 M과 N의 나머지가 X와 Y로 떨어지는 수를 구하는 문제 (최소공배수까지만 돌리면 되지만 N * M까지 돌려도 시간복잡도에 문제가 없어보였다) 문제 풀이 #include &lt;iostream&gt; #define endl '\\n' using namespace...","categories": ["BOJ"],
        "tags": ["Cpp","Mathematics"],
        "url": "/boj/6064/",
        "teaser": null
      },{
        "title": "1043 거짓말",
        "excerpt":"1043 거짓말 (c++) 문제 https://www.acmicpc.net/problem/1043 접근 방식 처음엔 아래로 순차접근 하면서 한번씩 진실을 알고 있는 사람이 있는지 확인하고 없다면 answer++ 해줬다. 그랬더니 ‘처음엔 진실을 모르는 사람끼리 있다가 다음에 진신을 알고 있는 사람과 함께있는 사람’이 생겨서 실패했다. /* ex) 1 3 진실을 알고 있음 2 1 2 진실을 알고 있지 않은...","categories": ["BOJ"],
        "tags": ["Cpp","Union Find"],
        "url": "/boj/1043/",
        "teaser": null
      },{
        "title": "16236 아기 상어",
        "excerpt":"16236 아기 상어 (c++) 문제 https://www.acmicpc.net/problem/16236 접근 방식 BFS 아기 상어의 위치에서 각 물고기들까지 BFS 자기보다 작은 물고기 중 거리가 가장 짧고, 가장 윗쪽, 가장 왼쪽의 물고기를 먹는다. 먹은 고기의 숫자가 상어의 크기 숫자와 일치하면 크기 + 1 다시 1번부터 반복 문제 풀이 #include &lt;iostream&gt; #include &lt;queue&gt; #define endl '\\n'...","categories": ["BOJ"],
        "tags": ["Cpp","BFS"],
        "url": "/boj/16236/",
        "teaser": null
      },{
        "title": "1717 집합의 표현",
        "excerpt":"1717 집합의 표현 (c++) 문제 https://www.acmicpc.net/problem/1717 접근 방식 Union Find 초기에 {0}, {1}, .. , {n} 까지 n + 1 개의 집합이 있음 연산이 주어짐 두 집합의 합집합 연산 두 집합이 서로 포함관계인지 확인하는 연산 1번과 2번이 주어지면 Union Find 알고리즘이라는걸 파악해야한다. 문제 풀이 #include &lt;iostream&gt; #define endl '\\n' #define...","categories": ["BOJ"],
        "tags": ["Cpp","Union Find"],
        "url": "/boj/1717/",
        "teaser": null
      },{
        "title": "Union Find",
        "excerpt":"Union-Find Disjoint Set(서로소 집합)을 표현할 때 사용하는 알고리즘 Union / Find 연산을 사용한다. Find 해당 노드의 루트 노드가 무엇인지 찾는 재귀형 연산이다. int* p; // 부모노드를 가리키는 배열 int Find(int x) { if (p[x] == x) return x; // 루트 노드가 자기 자신이면 자신을 그대로 반환 return Find(p[x]); // 아니라면...","categories": ["Algorithm"],
        "tags": ["Union Find"],
        "url": "/algorithm/UnionFind/",
        "teaser": null
      },{
        "title": "1976 여행 가자",
        "excerpt":"1976 여행 가자 (c++) 문제 https://www.acmicpc.net/problem/1976 접근 방식 Union Find 각 노드의 엣지 여부가 N*N 행렬로 입력된다. 0이면 연결되지않은 것 1이면 i, j를 Union 여행지 M 개가 차례로 입력된다. now, next로 받아서 Find(now) == Find(next) 로 계속되면 “YES” 중간에 하나라도 같은 root가 아니라면 “NO” 문제 풀이 #include &lt;iostream&gt; using namespace...","categories": ["BOJ"],
        "tags": ["Cpp","Union Find"],
        "url": "/boj/1976/",
        "teaser": null
      },{
        "title": "4195 친구 네트워크",
        "excerpt":"4195 친구 네트워크 (c++) 문제 https://www.acmicpc.net/problem/4195 접근 방식 Union Find 테스트 케이스 T번 반복 친구의 관계가 F번 입력됨 해당 둘의 관계 네트워크 안에 몇명의 사람이 있는지를 출력 -&gt; Union 하면서 총 node의 갯수를 확인 문제 풀이 #include &lt;iostream&gt; #include &lt;string&gt; #include &lt;map&gt; #define endl '\\n' using namespace std; int order;...","categories": ["BOJ"],
        "tags": ["Cpp","Union Find"],
        "url": "/boj/4195/",
        "teaser": null
      },{
        "title": "2580 스도쿠",
        "excerpt":"2580 스도쿠 (c++) 문제 https://www.acmicpc.net/problem/2580 접근 방식 백 트래킹 0이 적힌 칸이 없을 때 까지 다음을 반복 0이 적힌 칸에 1 ~ 9 중 숫자 하나를 집어 넣는다 0이 적힌 칸이 없으면 맞게 적어넣었는지 체크한다. 틀렸으면 한칸 전 0으로 돌아가서 다음 수를 넣어본다. 문제 풀이 #include &lt;iostream&gt; #define endl '\\n'...","categories": ["BOJ"],
        "tags": ["Cpp","Back Tracking"],
        "url": "/boj/2580/",
        "teaser": null
      },{
        "title": "13549 숨바꼭질 3",
        "excerpt":"13549 숨바꼭질 3 (c++) 문제 https://www.acmicpc.net/problem/13549 접근 방식 BFS, PQ 처음엔 N부터 시작해서 *2는 cost + 0, +1, -1은 cost + 1을 처리하는 재귀함수를 만들었었다. 재귀함수가 *2를 먼저 처리해도, *2가 MAX_SIZE(100’000)을 넘어가는 수부터는 +1, -1을 처리하기 시작해서 시간초과 이 때 (*2를 먼저(우선) 처리하고 +1, -1을 나중에 처리하는 순서(방법)을 찾았어야했다.) 다음엔...","categories": ["BOJ"],
        "tags": ["Cpp","Breadth First Search","Priority Queue"],
        "url": "/boj/13549/",
        "teaser": null
      },{
        "title": "2096 내려가기",
        "excerpt":"2096 내려가기 (c++) 문제 https://www.acmicpc.net/problem/2096 접근 방식 DP 다음 칸은 현재 칸과 인접한 칸 (좌우로 1칸씩)만 선택 가능 매번 현재 열 + 이전 행의 인접한 열 중 큰 값을 선택 (DP) 문제 풀이 #include &lt;iostream&gt; using namespace std; inline int Max(int a, int b) { return a &gt; b ?...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/2096/",
        "teaser": null
      },{
        "title": "배낭 문제 (Knapsack Problem)",
        "excerpt":"Knapsack Problem 배낭에 담을 수 있는 최대 무게가 정해져 있고, 일정 가치와 무게가 정해져 있는 짐들을 배낭에 담을 때 가치의 합이 최대가 되도록 짐을 고르는 방법을 찾는 문제 종류 물건을 쪼갤 수 있는 배낭 문제 (Fraction Knapsack Problem) 물건을( 쪼갤 수 없는 배낭 문제 (0/1 Knapsack Problem) Fraction Knapsack Problem...","categories": ["Algorithm"],
        "tags": ["Knapsack Problem","Dynamic Programming"],
        "url": "/algorithm/KnapsackProblem/",
        "teaser": null
      },{
        "title": "12865 평범한 배낭",
        "excerpt":"12865 평범한 배낭 (c++) 문제 https://www.acmicpc.net/problem/12865 접근 방식 Knapsack Problem, DP 쪼개질 수 없는 배낭 문제 문제 풀이 #include &lt;cstdio&gt; using namespace std; int main() { int N, K, i, j, w, v; scanf(\"%d %d\", &amp;N, &amp;K); int dp[K + 1] = {}; for (int i = 1; i &lt;=...","categories": ["BOJ"],
        "tags": ["Cpp","Knapsack Problem","Dynamic Programming"],
        "url": "/boj/12865/",
        "teaser": null
      },{
        "title": "1916 최소비용 구하기 (80등)",
        "excerpt":"1916 최소비용 구하기 (c++) 문제 https://www.acmicpc.net/problem/1916 접근 방식 Dijkstra 시작 마을에서 도착 마을까지의 최소 비용 -&gt; (시작지점이 정해졌으니 Dijkstra로 한 행만 검사하면 최소비용 구하기 가능) 문제 풀이 #include &lt;iostream&gt; #include &lt;algorithm&gt; #define INF 987654321 using namespace std; int N, M, startPos, endPos, a, b, c; int arr[1'001][1'001] = {}; void...","categories": ["BOJ"],
        "tags": ["Cpp","Dijkstra"],
        "url": "/boj/1916/",
        "teaser": null
      },{
        "title": "9019 DSLR",
        "excerpt":"9019 DSLR (c++) 문제 https://www.acmicpc.net/problem/9019 접근 방식 BFS 가중치가 1인 탐색 (D, S, L, R), 시작노드 A로부터 도착노드 B까지의 최단 경로를 탐색하는 문제 (이걸 왜 BFS로 생각하지 못했을까.. BFS는 무조건 2차원 배열, 또는 그래프에서만 써야한다고 생각했었다.) (하지만 특정 노드 N에서 D, S, L, R 방향으로 탐색하여 도착지까지의 최단 경로(거리)를 탐색한다고...","categories": ["BOJ"],
        "tags": ["Cpp","BFS"],
        "url": "/boj/9019/",
        "teaser": null
      },{
        "title": "11725 트리의 부모 찾기",
        "excerpt":"11725 트리의 부모 찾기 (c++) 문제 https://www.acmicpc.net/problem/11725 접근 방식 BFS 트리가 있을 때 두 노드 중 어느 노드가 부모일 지 모른다. 부모 노드가 있는 노드가 있다면 아닌 노드가 자식으로 들어간다. 부모 노드가 없다면 둘다 인접 노드에 추가해 놓고 나중에 부모가 정해지면 인접 노드 중 부모가 없는 노드들을 자식 노드로 추가...","categories": ["BOJ"],
        "tags": ["Cpp","BFS"],
        "url": "/boj/11725/",
        "teaser": null
      },{
        "title": "1991 트리 순회",
        "excerpt":"1991 트리 순회 (c++) 문제 https://www.acmicpc.net/problem/1991 접근 방식 트리, 재귀 전위 순회 : 부모 -&gt; 왼쪽 -&gt; 오른쪽 순으로 재귀 중위 순회 : 왼쪽 -&gt; 부모 -&gt; 오른쪽 순으로 재귀 후위 순회 : 왼쪽 -&gt; 오른쪽 -&gt; 부모 순으로 재귀 문제 풀이 #include &lt;iostream&gt; using namespace std; int N; pair&lt;char,...","categories": ["BOJ"],
        "tags": ["Cpp","Tree","Recursive"],
        "url": "/boj/1991/",
        "teaser": null
      },{
        "title": "11660 구간 합 구하기 5",
        "excerpt":"11660 구간 합 구하기 5 (c++) 문제 https://www.acmicpc.net/problem/11660 접근 방식 누적 합 누적합([startY][startX] -&gt; [endY][endX]) = 누적합 [endY][endX] - 누적합[startY-1][endX] - 누적합[endY][startX-1] + 누적합[startY-1][startX-1] 문제 풀이 #include &lt;iostream&gt; #define endl '\\n' using namespace std; int N, M, sum, num, startY, startX, endY, endX, sumArr[1025][1025] = {}; int main() { ios::sync_with_stdio(0);...","categories": ["BOJ"],
        "tags": ["Cpp","Prefix Sum"],
        "url": "/boj/11660/",
        "teaser": null
      },{
        "title": "2407 조합",
        "excerpt":"2407 조합 (c++) 문제 https://www.acmicpc.net/problem/2407 접근 방식 조합, 파스칼의 삼각형, 동적 계획법 처음엔 nCr = nPr / r! 로 풀어보려고 했다. 하지만 100C50까지 가면 자릿수가 unsigned long long으로고 커버할 수 없이 커져버린다. 그래서 큰 수를 커버하려고 string 연산으로 수를 표현하려고 했다. 하지만 곱하기는 어떻게든 큰 수로 표현을 하겠는데, 큰수의 나누기...","categories": ["BOJ"],
        "tags": ["Cpp","Combination","Pascal's Triangle","Dynamic Programming"],
        "url": "/boj/2407/",
        "teaser": null
      },{
        "title": "25921 건너 아는 사이",
        "excerpt":"25921 건너 아는 사이 (c++) 문제 https://www.acmicpc.net/problem/25921 접근 방식 소수 음식 값의 두 가지 조건이 있다. 두 사람의 번호가 서로소일 때, 두 번호 중 큰 값 두 사람의 번호가 서로소가 아닐 때, 두 번호의 최대 공약수 이 때 음식 값이 최소가 되려면 서로소는 어쩔 수 없이 큰 값을 더한다. 최대...","categories": ["BOJ"],
        "tags": ["Cpp","Prime Number"],
        "url": "/boj/25921/",
        "teaser": null
      },{
        "title": "9521 LCS",
        "excerpt":"9521 LCS (c++) 문제 https://www.acmicpc.net/problem/9521 접근 방식 LCS 최장 공통 부분 수열 (LCS)는 알고리즘이 있다. A와 B의 원소를 탐색하므로 문자열의 길이가 N이라면 시간 복잡도는 O(N2)이다. 문제에서 문자열의 최대 길이가 1’000이라고 했으므로 총 연산 수는 1’000’000(백만)이고, 시간 제한은 0.1초 이므로 최대 연산 가능 수는 1초당 약 1억이므로 그 10분의 1인 천만이다....","categories": ["BOJ"],
        "tags": ["Cpp","Longest Common Subsequence"],
        "url": "/boj/9251/",
        "teaser": null
      },{
        "title": "1967 트리의 지름",
        "excerpt":"1967 트리의 지름 (c++) 문제 https://www.acmicpc.net/problem/1967 접근 방식 Tree, Post Order Traversal 트리가 가지는 자식들 중 가장 긴 자식과, 다음으로 긴 자식을 더한다. 그 값이 최대 길이보다 크면 최신화 가장 긴 자식을 리턴 1~3을 루트까지 반복 (자식 먼저 접근하고 부모를 접근하기 때문에 Post Order Traversal) 문제 풀이 #include &lt;iostream&gt; #include...","categories": ["BOJ"],
        "tags": ["Cpp","Tree","Traversal"],
        "url": "/boj/1967/",
        "teaser": null
      },{
        "title": "1167 트리의 지름",
        "excerpt":"1167 트리의 지름 (c++) 문제 https://www.acmicpc.net/problem/1167 접근 방식 Tree, DFS 트리가 주어짐 (양방향이고 루트가 어딘지 모름) 가장 거리가 먼 두 노드의 거리 (지름)을 구하여 출력 결국 트리의 모든 노드들은 하나 이상의 인접노드와 연결되어 있다. (부모 1, 자식 0 이상) 마지막으로 입력받은 노드부터 DFS를 진행한다. DFS로 (아직 방문하지 않은) 자식노드를 다...","categories": ["BOJ"],
        "tags": ["Cpp","Tree","DFS"],
        "url": "/boj/1167/",
        "teaser": null
      },{
        "title": "11404 플로이드",
        "excerpt":"11404 플로이드 (c++) 문제 https://www.acmicpc.net/problem/11404 접근 방식 Graph, Floyd Warshall 마을(노드) 와 버스 (엣지) 가 주어진다. 자기 자신으로 가는 버스는 없고, A 마을에서 B 마을까지 가는 버스가 한개가 아닐 수 있다. (최소값 비교 필요) 각 마을에서 마을로 갈 수 있는 최단 거리를 구하라. k를 기점으로 i에서 j까지 가는 거리를 최신화하는...","categories": ["BOJ"],
        "tags": ["Cpp","Graph","Floyd Warshall"],
        "url": "/boj/11404/",
        "teaser": null
      },{
        "title": "고1 - 문자와 식",
        "excerpt":"다항식의 연산 (1) (다항식의 곱셉) 이항식과 다항식의 곱셈 (1 + x)(x2 - 5x - 6) 분배 법칙 = 1(x2 - 5x - 6) + x(x2 - 5x - 6) 다시 분배 법칙 = 1(x2) + 1(-5x) + 1(-6) + x(x2) + x(-5x) + x(-6) = x2 -5x - 6 +...","categories": ["Highschool Mathmatics"],
        "tags": ["Mathmatics"],
        "url": "/highschool%20mathmatics/%EA%B3%A01-%EB%AC%B8%EC%9E%90%EC%99%80%EC%8B%9D/",
        "teaser": null
      },{
        "title": "2206 벽 부수고 이동하기",
        "excerpt":"2206 벽 부수고 이동하기 (c++) 문제 https://www.acmicpc.net/problem/2206 접근 방식 Graph, BFS 기존의 0,0 에서 N,M까지의 벽이 있는 최단거리 문제에서 벽 1개를 부술 수 있는 경우가 추가되었다. 벽을 부수지 않은 cost[0]와 벽을 하나 부순 cost[1]을 가지고 풀면 해결된다. 문제 풀이 #include &lt;iostream&gt; #include &lt;vector&gt; #include &lt;string&gt; #include &lt;queue&gt; #define INF 987654321...","categories": ["BOJ"],
        "tags": ["Cpp","Graph","BFS"],
        "url": "/boj/2206/",
        "teaser": null
      },{
        "title": "2263 트리의 순회",
        "excerpt":"2263 트리의 순회 (c++) 문제 https://www.acmicpc.net/problem/2263 접근 방식 Tree, Traversal 인 오더, 포스트 오더가 주어진다. 인 오더는 (왼쪽자식)나(오른쪽자식) 포스트 오더는 (왼쪽자식)나(오른쪽자식) 즉 포스트 오더의 맨 뒤는 항상 루트이다. 이를 다시 인 오더에서 찾으면 왼쪽과 오른쪽 자식을 분류할 수 있다. 이것을 다시 재귀로 호출한다. 문제 풀이 #pragma GCC optimize(\"Ofast\") #include &lt;iostream&gt;...","categories": ["BOJ"],
        "tags": ["Cpp","Tree","Traversal"],
        "url": "/boj/2263/",
        "teaser": null
      },{
        "title": "15663 N과 M (9)",
        "excerpt":"15663 N과 M (9) (c++) 문제 https://www.acmicpc.net/problem/15663 접근 방식 Backtracking 길이가 M인 수열 중복 X 수열은 사전 순으로 오름차순으로 출력 수열을 우선 정렬하여 백트래킹 했을 때, 사전 순으로 오름차순이 되게 만듦 중복을 없애기 위해 vector를 원소로 가지는 Set을 활용 백트래킹을 하다가 벡터의 길이가 M이 되었을 때 set에 넣어주고, 백트래킹이 완료되면...","categories": ["BOJ"],
        "tags": ["Cpp","Backtracking"],
        "url": "/boj/15663/",
        "teaser": null
      },{
        "title": "17070 파이프 옮기기 1",
        "excerpt":"17070 파이프 옮기기 1 (c++) 문제 https://www.acmicpc.net/problem/17070 접근 방식 BFS N x N 인 정사각형 격자판 파이프는 2칸을 차지 이동할 수 있는 경로는 3가지 오른쪽 (가로) 아래 (세로) 우하향 (대각선) 각각 현재 상태에 따라 이동할 수 있는 경우가 제한된다. 현재 상태 가로 : 가로, 대각선 현재 상태 세로 : 세로,...","categories": ["BOJ"],
        "tags": ["Cpp","BFS"],
        "url": "/boj/17070/",
        "teaser": null
      },{
        "title": "Navigation",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Navigation 네비게이션은 AI 가 특정 위치로 이동하는 데 사용되는 컴포넌트이며 다음으로 구성되어 있다. Navigation Nav Mesh Agent Nav Mesh Obstacle Navigation 네비 메쉬를 설정하고 베이크하는 곳 에디터 상단의 Windows -&gt; AI -&gt; Navigation 클릭 Navigation 창의 ‘Bake’...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Navigation"],
        "url": "/unity%20udemy/Navigation/",
        "teaser": null
      },{
        "title": "Terrain",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Terrain 터레인은 높이 조절로 지형을 생성하고, 텍스쳐를 입혀 질감을 표현한다. 크기 조절 터레인 오브젝트의 Terrain Component 탭을 열고 Terrain Settings (산 + 톱니 모양) 버튼을 누른다. Mesh Resolution (On Terrain Data) 탭에서 Width, Length 등을 변경하여 크기를...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy"],
        "url": "/unity%20udemy/Terrain/",
        "teaser": null
      },{
        "title": "1094 막대기",
        "excerpt":"1094 막대기 (c++) 문제 https://www.acmicpc.net/problem/1094 접근 방식 구현 64cm 길이의 막대를 Xcm로 만들고 싶다. 아래를 반복 막대들의 총 합이 X보다 크다면 막대들 중 가장 작은 막대를 반으로 자르고 자른 막대의 반을 제외한 나머지의 합이 X보다 크다면 자른 막대의 반을 버린다. 막대들의 길이의 총 합이 Xcm가 되었을 때, 막대의 갯수가 답...","categories": ["BOJ"],
        "tags": ["Cpp","Implementaition","Priority Queue"],
        "url": "/boj/1094/",
        "teaser": null
      },{
        "title": "Animation",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Animation 유니티의 애니메이션은 다음으로 구성되어 있다. Animator Component Animator Controller Animation Blend Tree Animator Component 게임 오브젝트에 붙여서, 특정 애니메이터 컨트롤러를 통해 해당 오브젝트에 애니메이션을 적용시킨다. Animator Component의 Parameter 접근하기 private void Function() { float value =...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Animation"],
        "url": "/unity%20udemy/Animation/",
        "teaser": null
      },{
        "title": "RayCast",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. RayCast 한 지점에서 특정 방향으로 Ray를 쏴서, 충돌을 체크하는 방법 void MoveToCursor() { // 스크린좌표에서 카메라의 방향으로 Ray 만든다. Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition); // 레이케스트의 결과를 저장할 RaycastHit 구조체 RaycastHit hit; // Ray 와 RaycastHit을 가지고 충돌...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","RayCast"],
        "url": "/unity%20udemy/RayCast/",
        "teaser": null
      },{
        "title": "15686 치킨 배달",
        "excerpt":"15686 치킨 배달 (c++) 문제 https://www.acmicpc.net/problem/15686 접근 방식 구현, 백트래킹, 브루트 포스 NxN의 마을에서 치킨집을 M개까지 줄였을 때, 각 집에서 가장 가까운 치킨집까지의 거리 합의 최소는? 일단 치킨집 M개를 백트래킹으로 선별 2에서 구해진 M개의 치킨집으로 각 집까지의 거리 중 최소를 구함 3에서 구해진 최소거리들의 합을 answer와 비교하여 더 작다면 answer를...","categories": ["BOJ"],
        "tags": ["Cpp","Implementaition","BackTracking","BruteForce"],
        "url": "/boj/15686/",
        "teaser": null
      },{
        "title": "Dependency",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Dependency [종속성] 정의 하나의 프로그램은 여러 종류의 객체들로 이루어진다. (객체지향) 이 때 하나의 객체가 다른 객체를 참조(사용)하는 경우가 생기는데 이를 Dependency (객체간의 종속성)라고 한다. 종속성을 피해야 하는 이유 프로그램에서 객체간의 종속성을 아예 없앨 수는 없다. (그렇게되면 하나의...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Dependency"],
        "url": "/unity%20udemy/Dependency/",
        "teaser": null
      },{
        "title": "Order Of Execution",
        "excerpt":"이 문서는 Udemy의  ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다.   Order Of Execution  유니티에서 이벤트 함수의 실행 순서는 아래와 같다.      (출처 : https://docs.unity3d.com/kr/current/Manual/ExecutionOrder.html)   LateUpdate  Update 뒤에 실행되는 함수     카메라 움직임 (카메라를 Update에서 움직일 경우 지터링이 발생할 수 있음)  ","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Execution"],
        "url": "/unity%20udemy/OrderOfExecution/",
        "teaser": null
      },{
        "title": "1918 후위 표기식",
        "excerpt":"1918 후위 표기식 (c++) 문제 https://www.acmicpc.net/problem/1918 접근 방식 스택, 자료구조 중위 표기식의 수식을 후위 표기식으로 바꾼다. 문자는 문자열에 바로 추가 연산자는 스택의 탑 보다 우선순위가 높으면 추가 높지 않으면 스택을 위에서부터 우선순위가 나보다 높거나 같은 것들을 문자열에 추가 후 스택에 현재 연사자를 추가 그랬더니 괄호가 문제였다. 처음엔 재귀형식으로 풀려고 했다....","categories": ["BOJ"],
        "tags": ["Cpp","Stack","Data Structure"],
        "url": "/boj/1918/",
        "teaser": null
      },{
        "title": "9935 문자열 폭발",
        "excerpt":"9935 문자열 폭발 (c++) 문제 https://www.acmicpc.net/problem/9935 접근 방식 스택, 문자열 1차시도 str.find()를 이용해서 지워야할 target의 시작위치를 찾고, 지우기를 반복 (시간초과) 2차시도 직접 find 함수를 만들어서 erase 대신 str을 target의 전 문자열과 후 문자열의 합으로 갱신 (시간초과) 3차시도 못풀겠어서 알고리즘 분류를 봄, 스택이 적혀있었음 생각해보니 trigger를 target의 끝문자로 잡고 trigger가 발견될때마다...","categories": ["BOJ"],
        "tags": ["Cpp","Stack","String"],
        "url": "/boj/9935/",
        "teaser": null
      },{
        "title": "Attribute",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Attribute (속성) Attributes 는 스크립트에서 클래스, 프로퍼티 또는 함수 위에 명시하여 특별한 동작을 나타낼 수 있는 마커입니다. 예를 들어, 프로퍼티 선언 위에 HideInInspector 속성을 추가하여 인스펙터가 공용 프로퍼티인 경우에도 프로퍼티를 표시하지 않도록 할 수 있습니다. C#의 경우...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Attribute"],
        "url": "/unity%20udemy/Attribute/",
        "teaser": null
      },{
        "title": "Bug",
        "excerpt":"Bug (버그) 소프트웨어 버그(영어: software bug) 또는 줄여서 버그(bug)는 소프트웨어가 예상하지 못한 잘못된 결과를 내거나, 오류가 발생하거나, 착오나 오작동이 발생하는 등의 문제를 뜻한다. 버그는 프로그램의 소스 코드나 설계 과정에서의 오류 때문에 발생한다. 출처 : 위키피디아 버그의 종류와 해결 순서 1. Game Breaking 게임이 정상적으로 작동하지 못하게 하는 버그 당장 모든...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Bug"],
        "url": "/unity%20udemy/Bug/",
        "teaser": null
      },{
        "title": "Prefab",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Prefab 정의 프리팹은 일종의 템플릿이다. 사용자는 게임 오브젝트를 프리팹으로 만듦으로써 해당 게임 오브젝트의 모든 컴포넌트, 프로젝트, 자식 오브젝트를 [재사용 가능한 에셋]으로 만들 수 있다. 이 프리팹 에셋은 씬에 새로운 프리팹 인스턴스를 만드는 데 사용된다. 기능 게임오브젝트를 프리팹으로...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Prefab"],
        "url": "/unity%20udemy/Prefab/",
        "teaser": null
      },{
        "title": "10610 30",
        "excerpt":"10610 30 (c++) 문제 https://www.acmicpc.net/problem/10610 주어진 숫자들로 30의 배수 중 가장 큰 수를 만들어 출력해라. 만들 수 없다면 -1을 출력해라. 접근 방식 그리디 30의 배수 중 가장 큰 수를 만들라는 것은 3의 배수이고 10의 배수인 수 를 만들라는 것이다. 3의 배수인 수는 모든 자릿수의 합을 3으로 나눈 나머지가 0이어야 한다....","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Priority Queue"],
        "url": "/boj/10610/",
        "teaser": null
      },{
        "title": "AI Controller",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. 정의 플레이어의 움직임을 결정했던 Player Controller와 같이 AI의 행동양식을 결정하는데 사용된다. Character 라는 상위 Prefab에서 Player 와 Enemy로 나뉘는 다형성을 띄게 된다. 기능 Chase Attack Chase 플레이어가 추적 범위 안에 들어왔을 때 플레이어를 추적한다. Fighter 컴포넌트에 이미...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","AI","AI Controller"],
        "url": "/unity%20udemy/AIController/",
        "teaser": null
      },{
        "title": "Gizmo",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. 정의 기즈모 는 씬에 있는 게임 오브젝트와 연관된 그래픽스입니다. 일부 기즈모는 게임 오브젝트가 선택된 경우에만 Unity 에디터가 그리고, 그 외의 기즈모는 선택된 게임 오브젝트에 관계없이 그립니다. 기즈모는 일반적으로 비트맵 그래픽이 아니라 코드를 사용하여 그려지는 와이어프레임이며, 상호작용할 수...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Gizmo"],
        "url": "/unity%20udemy/Gizmo/",
        "teaser": null
      },{
        "title": "1715 카드 정렬하기",
        "excerpt":"1715. 카드 정렬하기 / c++ / Gold 4 / 13분 문제 https://www.acmicpc.net/problem/1715 카드를 두 묶음씩 섞는다. 마지막 한 장의 카드 더미가 남을 때 가장 적게 섞은 횟수는? 접근 방식 그리디, 우선순위 큐 우선 카드를 가장 적게 섞으려면, 가장 적은 카드 둘을 골라 섞으면 된다. (즉, 매번 가장 적은 수를 골라야...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Priority Queue"],
        "url": "/boj/1715/",
        "teaser": null
      },{
        "title": "1744 수 묶기",
        "excerpt":"1744. 수 묶기 / c++ / Gold 4 / 20분 문제 https://www.acmicpc.net/problem/1744 수열의 수를 합한다. 이 때, 수를 그냥 합할 수도, 두 수를 묶어서 곱한 값을 합할 수도 있다. 이렇게 합쳤을 때 최대값을 구하라. 접근 방식 그리디, 우선순위 큐 수열 안의 수는 [음수, 0, 양수]로 나뉜다. 각각 최대가 되는 값의...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Priority Queue"],
        "url": "/boj/1744/",
        "teaser": null
      },{
        "title": "11000 강의실 배정",
        "excerpt":"11000. 강의실 배정 / c++ / Gold 5 / 40분 / 461등 문제 https://www.acmicpc.net/problem/11000 강의의 시작시간과 종료시간이 주어진다. 강의들이 겹치지 않으면 같은 강의실에서 들을 수 있다. 강의실을 최소한으로 사용했을 때 그 수는? 접근 방식 그리디, 우선순위 큐, 라인 스위핑 처음엔 어렵게 생각해서, 해당 강의실의 강의가 끝나는 시간과 가장 가까운 시간의...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Priority Queue","Line Sweeping"],
        "url": "/boj/11000/",
        "teaser": null
      },{
        "title": "Observer Pattern",
        "excerpt":"정의  옵저버 패턴은 객체의 상태 변화를 관찰하는 관찰자들, 즉 옵저버들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다. 주로 분산 이벤트 핸들링 시스템을 구현하는 데 사용된다. 발행/구독 모델로 알려져 있기도 하다.   참조  위키피디아  ","categories": ["Design Pattern"],
        "tags": ["Observer Pattern"],
        "url": "/design%20pattern/Observer/",
        "teaser": null
      },{
        "title": "Cinemachine",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. 정의 Cinemachine : Scene에서 여러대의 카메라를 관리할 수 있게 해준다. 구조 Cinemachine Brain이 한대의 Main Camera와, 여러대의 Virtual Camera들을 사용한다. 종류 1. Virtual Camera Main Camera에 부착된 [CinemachineBrain] 컴포넌트에 의해 사용되는 가상 카메라 속성 Priority : 해당...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Cinemachine"],
        "url": "/unity%20udemy/Cinemachine/",
        "teaser": null
      },{
        "title": "2437 저울",
        "excerpt":"2437. 저울 / c++ / Gold 2 / 1시간 문제 https://www.acmicpc.net/problem/2437 1이상 1,000,000 이하의 무게추가 1 ~ 1’000개 있다. 무게추들의 합으로 구할 수 없는 ‘최소 양의 정수’는 ? 접근 방식 그리디 그리디라는 점에서 일단 ‘최소’ 아니면 ‘최대’를 사용해보려고 했다. 현재 무게추로 나올 수 있는 무게는 [현재 무게추 + 이전 무게추들로...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Sort"],
        "url": "/boj/2437/",
        "teaser": null
      },{
        "title": "Coroutine",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. 코루틴 (Coroutine) 하나의 프로세스를 여러 함수들이 공유하는 상태. frame 단위가 아닌 시간 단위로 함수를 호출시키고 싶을 때 사용 함수 중간에 지연 시간을 넣고 싶을 때 사용 여러 함수를 동시에 실행시켜야할 때 사용 IEnumerator : 열거자 코루틴 =...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","Coroutine"],
        "url": "/unity%20udemy/Coroutine/",
        "teaser": null
      },{
        "title": "LoadScene",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. 설명 SceneManager 안에 속한 함수로, 해당 Scene을 로드 후 이동한다. BuildSetting에 Scene들을 등록해놔야 사용 가능하다. 이름으로 이동 Build에 등록된 번호로 이동 사용법 동기화 버전 using UnityEngine.SceneManagement; // 여기 안에 SceneManager 있음 [SerializeField] int SceneToLoad = -1; //...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","SceneManager","LoadScene"],
        "url": "/unity%20udemy/LoadScene/",
        "teaser": null
      },{
        "title": "Fader (장면 전환)",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. 필요 이유 Fade In, Fade Out의 효과를 주고 싶다. 구조 Fader (오브젝트) : Canvas 오브젝트 (UI) Fader (스크립트) : 구동 코드 부분 Canvas Group (컴포넌트) : Canvas에 속해있는 UI 컴포넌트들을 한번에 조절하는 컴포넌트 Image (컴포넌트) : 화면에서...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","SceneManager","Fader"],
        "url": "/unity%20udemy/Fader/",
        "teaser": null
      },{
        "title": "1700 멀티탭 스케줄링",
        "excerpt":"1700. 멀티탭 스케줄링 / c++ / Gold 1 / 40분 문제 https://www.acmicpc.net/problem/1700 멀티탭 구 수인 N과, 꽂아야할 플러그 갯수인 K가 주어진다. 플러그를 뽑고 다시 꽂는 횟수를 최소하 하면 몇번일까? 접근 방식 그리디 처음엔 몇번 더 꽂아야하는지 (뒤에 얼마나 많이 꽂을 필요가 있는지)로 확인하려고 했다. 그런데 생각해보니, 1번3번이 있을 때 뒤에...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Sort"],
        "url": "/boj/1700/",
        "teaser": null
      },{
        "title": "1049 기타줄",
        "excerpt":"1049. 기타줄 / c++ / Silver4 / 20분 문제 https://www.acmicpc.net/problem/1049 새로 사야할 기타 줄 N개와 기타줄 판매 업체 수 M개가 주어진다. (1 &lt;= N &lt;= 100), (1 &lt;= M &lt;= 50) 각 판매 업체마다 6개들이 가격과 1개들이 가격이 다를 때, 적어도 N개를 살 수 있는 최소 가격은? (가격은 0 이상,...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Sort"],
        "url": "/boj/1049/",
        "teaser": null
      },{
        "title": "10799 쇠막대기",
        "excerpt":"10799. 쇠막대기 / c++ / Silver2 / 26분 문제 https://www.acmicpc.net/problem/10799 괄호로 이루어진 문자열이 주어진다. () 딱 붙어있는 괄호는 레이저 레이저로 잘라진 막대기의 총 갯수는? 접근 방식 자료구조, 스택 괄호는 일단 스택이라고 생각해본다. ’(‘ 열린 괄호가 나오면 스택에 추가한다. ’)’ 닫힌 괄호가 나오면 두가지 경우로 나눈다. ’(‘ 이전 괄호가 열린 괄호인...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Stack"],
        "url": "/boj/10799/",
        "teaser": null
      },{
        "title": "1449 수리공 항승",
        "excerpt":"1449. 수리공 항승 / c++ / Silver3 / 10분 문제 https://www.acmicpc.net/problem/1449 첫 째줄에 파손된 파이프 위치의 수 N과, 항승이 가지고 있는 테이프의 길이 L이 주어진다. 파이프를 수리하려면 파손된 위치의 좌우 0.5만큼 간격윽 줘야한다. 항승이가 모든 파이프를 수리하는데 필요한 테이프의 최소 갯수는? 접근 방식 그리디, 우선순위 큐 라인 스위핑으로 가장 먼...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Priority Queue"],
        "url": "/boj/1449/",
        "teaser": null
      },{
        "title": "Saving System (저장 체계)",
        "excerpt":"이 문서는 Udemy의 ‘RPG Core Combat Creator’ 강의를 보고 배운 점을 적은 것입니다. Saving System 데이터를 저장하고 불러오는 기능 구조 Saving : Saving 관련 컴포넌트들을 가지는 오브젝트 (프리펩) Saving System : Save / Load 기능이 들어있는 API Saving Warpper : Saving System을 Input단과 연결시켜주는 중간다리 Other Object : Save /...","categories": ["Unity Udemy"],
        "tags": ["Unity","Udemy","SceneManager","Saving"],
        "url": "/unity%20udemy/Saving/",
        "teaser": null
      },{
        "title": "3190 뱀",
        "excerpt":"3190. 뱀 / c++ / Gold4 / 1시간 10분 문제 https://www.acmicpc.net/problem/3190 보드의 크기 N, 사과의 갯수 K, 뱀의 방향 변환 횟수 L 뱀은 아래와 같은 움직임을 갖는다. 뱀의 길이가 1 늘어서 머리가 다음칸으로 움직임 만약 다음칸이 사과라면 꼬리가 줄지 않음 만약 다음칸이 사과가 아니라면 꼬리가 1칸 줄음 뱀의 머리가 자기...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Queue"],
        "url": "/boj/3190/",
        "teaser": null
      },{
        "title": "1406 에디터",
        "excerpt":"1406. 에디터 / c++ / Silver2 / 25분 문제 https://www.acmicpc.net/problem/1406 에디터에는 다음과 같은 명령이 주어진다. L : 현재 커서의 위치를 왼쪽으로 한칸 옮기기 (가장 왼편일 경우 무시) D : 현재 커서의 위치를 오른쪽으로 한칸 옮기기 (가장 오른편일 경우 무시) B : 현재 커서의 왼쪽 문자를 삭제 (가장 왼편일 경우 무시)...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Stack"],
        "url": "/boj/1406/",
        "teaser": null
      },{
        "title": "2493 탑",
        "excerpt":"2943. 탑 / c++ / Gold5 / 12분 / 20등 문제 https://www.acmicpc.net/problem/2493 서로 다른 길이의 탑이 N개 주어진다. 아래의 조건을 정보에 담는다. 자신보다 왼쪽에 있는 탑 중 자신보다 크고 자신과 가장 가까이 있는 탑의 위치 정보 출력 접근 방식 자료구조, 연결 리스트 모든 탑마다 왼쪽으로 자신보다 큰 탑을 탐색해야 하나...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Linked List"],
        "url": "/boj/2493/",
        "teaser": null
      },{
        "title": "위상 정렬 (Topology Sort)",
        "excerpt":"Topology Sort 정의 ‘사이클이 없는’ 방향 그래프의 모든 노드를 방향성에 거스르지 않도록 나열한 순서 순서가 정해져 있는 일련의 작업들을 차례대로 수행한 순서 흔히 옷 입기나, 수업 듣기 등 ‘선행 작업’이 등장하는 문제에서 사용 구현 vector&lt;int&gt; afterWork[COUNT]; // 해당 노드의 작업 이후에 수행해야 하는 후행 작업 int degrees[COUNT]; // 해당 노드를...","categories": ["Algorithm"],
        "tags": ["Sort","Data Structure"],
        "url": "/algorithm/TopologySort/",
        "teaser": null
      },{
        "title": "1766 문제집",
        "excerpt":"1766. 문제집 / c++ / Gold2 / 1시간 + 문제 https://www.acmicpc.net/problem/1766 문제 N개, 선행 문제 M개 문제는 숫자가 클 수록 어려운 문제 선행문제는 반드시 먼저 풀어야 한다. N개의 문제를 다 풀었을 때 그 순서는? 접근 방식 자료구조, 우선순위 큐, 위상정렬 연결 리스트로 풀어보려고 직접 연결 리스트를 만들었다. (시간초과) 아무리 생각해보...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Sort","Priority Queue","Topology Sort"],
        "url": "/boj/1766/",
        "teaser": null
      },{
        "title": "트라이 (Trie)",
        "excerpt":"Topology Sort 정의 문자열 집합을 표현하는 ‘트리 자료구조’ 특징 장점 문자열을 빠르게 찾을 수 있다. 다른 문자열에 포함되는 문자열의 존재를 알 수 있다. 문자열의 접두사를 모두 알 수 있다. 단점 필요한 메모리의 크기가 너무 크다. (문자를 저장할 때) 문자 a ~ z 를 모두 저장하는게 아니라면 vector 나 map 을...","categories": ["Algorithm"],
        "tags": ["Data Structure"],
        "url": "/algorithm/Trie/",
        "teaser": null
      },{
        "title": "14725 개미굴",
        "excerpt":"14725. 개미굴 / c++ / Gold3 / 15분 문제 https://www.acmicpc.net/problem/14725 개미가 이동한 경로 N개가 주어진다. 각 경로는 K개의 방을 지났다 개미가 개미굴의 모든 경로를 지났을 때, 개미굴의 구조를 출력하라 (같은 레벨일 경우 사전순) 접근 방식 자료구조, 트라이 Node 구조체를 만든다. (깊이를 나타내는 degree와 다음 방의 음식과 포인터를 가리키는 nextFood) Node*...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Trie"],
        "url": "/boj/14725/",
        "teaser": null
      },{
        "title": "5052 전화번호 목록",
        "excerpt":"5052. 전화번호 목록 / c++ / Gold4 / 45분 문제 https://www.acmicpc.net/problem/5052 테스트 케이스 t (1 &lt;= t &lt;= 50) 각 테스트 케이스마다 전화번호의 수 n (1 &lt;= n &lt;= 10’000) 한 전화번호가 다른 전화번호를 포함하고 있으면 일관성이 없는 목록 같은 전화번호는 주어지지 않을 때, 일관성이 있다면 “YES” 없다면 “NO”를 출력...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Trie"],
        "url": "/boj/5052/",
        "teaser": null
      },{
        "title": "1202 보석 도둑",
        "excerpt":"1202. 보석 도둑 / c++ / Gold2 / 55분 문제 https://www.acmicpc.net/problem/1202 N개의 보석과 K개의 가방이 주어진다. (1 &lt;= N,K &lt;= 300’000) 각 보석은 M의 무개와 V의 가치를 지닌다. (0 &lt;= M,V &lt;= 1’000’000) 각 가방은 최대 C의 무게까지 담을 수 있다. (1 &lt;= C &lt;= 100’000’000) 하나의 가방에 하나의 보석밖에...","categories": ["BOJ"],
        "tags": ["Cpp","Data Structure","Priority Queue","Greedy"],
        "url": "/boj/1202/",
        "teaser": null
      },{
        "title": "2293 동전 1",
        "excerpt":"2293. 동전 1 / c++ / Gold5 / 실패 문제 https://www.acmicpc.net/problem/2293 각각 가치가 다른 동전이 N개의 종류가 있다고 할 때, 가치 K를 만들 수 있는 경우의 수는? (순서만 다른 것은 같은 경우) 접근 방식 동적 프로그래밍 DP 는 보통 dp[i] = dp[i] + dp[target-i] 의 구조를 가지므로 그렇게 생각해봤다. 그런데...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/2293/",
        "teaser": null
      },{
        "title": "11051 이항 계수2",
        "excerpt":"11051. 이항 계수 / c++ / Silver2 / 11분 문제 https://www.acmicpc.net/problem/11051 자연수 N, 정수 K가 주어졌을 때, 이항계수 (N K)를 10’007로 나눈 값을 출력 접근 방식 동적 프로그래밍 (N K) 는 K == 0   K == N 일 때 1이고, 그 이외에는 (N-1 K-1) + (N-1 K)이다. 문제 풀이...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/11051/",
        "teaser": null
      },{
        "title": "11054 가장 긴 바이토닉 부분 수열",
        "excerpt":"11054. 가장 긴 바이토닉 부분 수열 / c++ / Gold4 / 30분 문제 https://www.acmicpc.net/problem/11054 길이가 n인 수열 A가 주어진다. 임의의 지점 Ai를 기준으로 A0 &lt; … &lt; Ai-2 &lt; Ai-1&lt; Ai &gt; Ai+1 &gt; Ai+2 &gt; … &gt; An 의 형태를 취하는 수열을 바이토닉 수열이라고 한다. A에서 가장 긴 바이토닉...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/11054/",
        "teaser": null
      },{
        "title": "11055 가장 큰 증가 부분 수열",
        "excerpt":"11055. 가장 큰 증가 부분 수열 / c++ / Silver2 / 10분 문제 https://www.acmicpc.net/problem/11055 길이가 N인 수열 A가 주어진다. 증가 부분 수열 중 가장 합이 큰 값을 출력 접근 방식 동적 프로그래밍 dp[i]는 i보다 왼편의 값 중 증가 부분 수열에 해당하며 그 합이 가장 큰 dp[j] + arr[i] 만약 dp[i]가...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/11055/",
        "teaser": null
      },{
        "title": "1699 제곱수의 합",
        "excerpt":"1699. 제곱수의 합 / c++ / Silver2 / 36분 문제 https://www.acmicpc.net/problem/1699 100’000 이하의 자연수 N이 주어진다. N을 제곱수의 합으로 표현할 때, 가장 짧은 길이는? 접근 방식 동적 프로그래밍 우선 최대 i * i &lt;= N인 제곱수들을 구해서 dp[i*i] = 1; 을 해준다. 그 다음 그 i * i를 벡터에 넣어준다....","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/1699/",
        "teaser": null
      },{
        "title": "11722 가장 긴 감소하는 부분 수열",
        "excerpt":"11722. 가장 긴 감소하는 부분 수열 / c++ / Silver2 / 13분 문제 https://www.acmicpc.net/problem/11722 길이가 N인 수열 A가 주어진다. 감소 부분 수열 중 가장 긴 수열의 길이를 출력 접근 방식 동적 프로그래밍 자기 자신 왼편에서 자기보다 큰 수들 중 dp값이 가장 큰 수 + 1을 현재 dp에 저장한다. 문제 풀이...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/11722/",
        "teaser": null
      },{
        "title": "1520 내리막 길",
        "excerpt":"1520. 내리막 길 / c++ / Gold3 / 36분 문제 https://www.acmicpc.net/problem/1520 M X N 의 지도에 각 칸마다 높이가 주어진다. 상하좌우의 낮은 칸으로만 이동이 가능할 때 0,0에서 M-1,N-1까지의 경로의 수를 출력하라 접근 방식 동적 프로그래밍 처음엔 BFS로 풀었다. (시간초과) DP라는걸 생각하고 보니, dp[i]는 상하좌우 dp의 합이었다. dp[0][0]을 1로 지정해주면, dp[M-1][N-1]에...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/1520/",
        "teaser": null
      },{
        "title": "1781 컵라면",
        "excerpt":"1781. 컵라면 / c++ / Gold2 / 1시간 12분 (+Hint) 문제 https://www.acmicpc.net/problem/1781 문제 N개가 주어진다. 각 문제는 DeadLine과, 맞췄을 때 얻는 컵라면 수가 정해져 있다. 1문제당 풀이 시간 1이 소요된다고 할 때, 문제를 풀었을 때 가장 많이 얻을 수 있는 컵라면의 수는? 접근 방식 그리디, 우선순위 큐 문제를 우선순위 큐에...","categories": ["BOJ"],
        "tags": ["Cpp","Greedy","Data Structure"],
        "url": "/boj/1781/",
        "teaser": null
      },{
        "title": "2294 동전 2",
        "excerpt":"2294. 동전 2 / c++ / Gold5 / 40분 문제 https://www.acmicpc.net/problem/2294 동전 N개와 금액 K가 주어진다. (동전 종류에 중복 있음) K개를 만들 수 있는 최소한의 동전의 갯수는? (못만들 경우 -1) 접근 방식 동적 프로그래밍 동전을 set에 저장 (중복 제거 / 오름차순 정렬) DP(K) 실행 dp[K]가 0이 아니면 출력 0이면 동전...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/2294/",
        "teaser": null
      },{
        "title": "2225 합분해",
        "excerpt":"2225. 합분해 / c++ / Gold5 / 12분 문제 https://www.acmicpc.net/problem/2225 0~N까지의 정수 K개를 더해 합이 N이 되는 경우의 수를 1’000’000’000으로 나눈 값을 출력 접근 방식 동적 프로그래밍 dp[n][k] = for (i = 0 ~ n) dp[n][k] += dp[n-i][1] + dp[i][k-1] 문제 풀이 #pragma GCC optimize(\"Ofast\") #include &lt;iostream&gt; #define MOD 1'000'000'000...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/2225/",
        "teaser": null
      },{
        "title": "11048 이동하기",
        "excerpt":"11048. 이동하기 / c++ / Silver2 / 21분 문제 https://www.acmicpc.net/problem/11048 1,1 ~ N,M까지의 미로에 각 칸마다 사탕이 0~100개 놓여있다. 준규는 1,1부터 N,M까지이 이동할 때, ‘아래/오른쪽/오른쪽아래대각선’으로만 이동할 수 있다. N,M에 도착했을 때, 얻을 수 있는 사탕의 최대 갯수는? 접근 방식 동적 프로그래밍 한칸이라도 더 들러야 이득인 상황이라, 오른쪽 아래 대각선 이동은...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/11048/",
        "teaser": null
      },{
        "title": "9655 돌 게임",
        "excerpt":"9655. 돌 게임 / c++ / Silver5 / 16분 문제 https://www.acmicpc.net/problem/9655 상근이와 창영이가 N개의 돌을 번갈아가며 가져간다. 한번 가져갈 때 1개 또는 3개만 가져갈 수 있다. 상근이가 선공이고, 둘 다 완벽하게 게임한다고 할 때, 승자를 출력하라. 접근 방식 동적 프로그래밍 경우의 수는 1개를 가져갈지, 3개를 가져갈지 그리고 선공인지, 후공인지 이다....","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/9655/",
        "teaser": null
      },{
        "title": "Delegate / Event",
        "excerpt":"Delegate 정의 같은 형식의 [단일 / 복수] 함수를 대신하여 호출해주는 대리자 메서드만 호출 가능 외부에서도 호출 가능 (단, private / protected 메서드는 호출 불가) 형식 // [접근 한정자] delegate [반환형] [델리게이트 타입 이름](메서드 매개변수) public delegate int MyIntDelegate(string name); 사용 (c# 1.0 이상) // [델리게이트 타입 이름] [델리게이트 변수 이름]...","categories": ["C Sharp"],
        "tags": ["C Sharp","Delegate","Event"],
        "url": "/c%20sharp/DelegateAndEvent/",
        "teaser": null
      },{
        "title": "1890 점프",
        "excerpt":"1890. 점프 / c++ / Silver1 / 35분 문제 https://www.acmicpc.net/problem/1890 N x N 게임판에 수가 적혀있다. (0 ~ 9) 각 칸에 적혀있는 수 만큼 ‘아래’ 혹은 ‘오른쪽’ 으로만 점프할 수 있다. 1,1 칸에서 N,N칸으로 이동할 수 있는 경우의 수는? 접근 방식 동적 프로그래밍 임의의 칸 i, j에 대해 최대 9칸...","categories": ["BOJ"],
        "tags": ["Cpp","Dynamic Programming"],
        "url": "/boj/1890/",
        "teaser": null
      },{
        "title": "2108 통계학",
        "excerpt":"2108. 통계학 / c++ / Silver3 / 20분 문제 https://www.acmicpc.net/problem/2108 N개의 정수가 주어진다. (1 &lt;= N &lt;= 500’000, 각 정수의 절대값은 4’000을 넘지 않는다) 아래의 값들을 출력하시오. 산술평균 (소숫점 첫째 자리에서 반올림) 중앙값 (오름차순일 때 중앙에 위치한 값) 최빈값 (만약 최빈값이 여러개면 두번째로 작은 수) 범위 접근 방식 수학 산술평균은...","categories": ["BOJ"],
        "tags": ["Cpp","Math"],
        "url": "/boj/2108/",
        "teaser": null
      },{
        "title": "4963 섬의 개수",
        "excerpt":"4963. 섬의 개수 / c++ / Silver2 / 9분 문제 https://www.acmicpc.net/problem/4963 h, w 크기의 board가 있다. 그 칸이 땅이면 이동할 수 있고, 상하좌우대각선으로 이동할 수 있을 때, 해당 칸에서 이동할 수 있는 모든 칸은 같은 섬이라고 정의한다. 이 때, 총 섬의 갯수를 출력하라. 접근 방식 그래프, DFS board를 전체적으로 순회하면서...","categories": ["BOJ"],
        "tags": ["Cpp","Graph","DFS"],
        "url": "/boj/4963/",
        "teaser": null
      },{
        "title": "2583 영역 구하기",
        "excerpt":"2583. 영역 구하기 / c++ / Silver1 / 42분 문제 https://www.acmicpc.net/problem/2583 M x N 인 모눈종이에 K개의 직사각형을 그린다. 직사각형이 아닌 부분의 영역의 갯수와 그 크기를 오름차순으로 출력하라. 접근 방식 그래프, BFS 직사각형의 위치를 받고 fill로 해당 칸을 1로 채워준다. BFS로 0인 칸을 돌아다니며 크기를 세주고, 1로 바꿔준다. BFS값을 vector에...","categories": ["BOJ"],
        "tags": ["Cpp","Graph","BFS"],
        "url": "/boj/2583/",
        "teaser": null
      },{
        "title": "[혼공컴운] 1주차",
        "excerpt":"진도 Chapter 01 ~ 03 (1/2 ~ 1/7) 기본미션 p.51의 확인 문제 3번 프로그램이 실행되려면 반드시 메모리에 저장되어 있어야 합니다. p.65의 확인 문제 3번 0b1101의 음수를 2의 보수 표현법으로 구해 보세요. 1101 0010 (모든 0과 1을 뒤집기) 0011 (1 더하기) 0b1101을 음수로 표현한 값은 0b11 입니다. 선택 미션 p.100의 스택과...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/Week1/",
        "teaser": null
      },{
        "title": "[혼공컴운] 5장 - CPU 성능 향상 기법",
        "excerpt":"5-1 빠른 CPU를 위한 설계 기법 클럭 컴퓨터 부품들은 클럭 신호에 맞춰 움직인다. 클럭 속도는 헤르츠(Hz) 단위로 측정하고, 1초에 클럭이 몇번 반복되는지를 나타낸다. (100Hz 는 1초에 클럭이 100번 반복된다는 의미이다.) 클럭 속도는 일정하지 않고, 클럭 속도를 높일 수록 발열이 증가하기 때문에 클럭 속도를 올리는 것 만으로는 CPU 성능 향상에 한계가...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/%ED%98%BC%EA%B3%B5%EC%BB%B4%EC%9A%B45%EC%9E%A5/",
        "teaser": null
      },{
        "title": "[혼공컴운] 2주차",
        "excerpt":"진도 Chapter 04 ~ 05 (1/8 ~ 1/14) 기본미션 p.125의 확인 문제 2번 플래그 레지스터 : 연산 결과 혹은 CPU 상태에 대한 부가 정보를 저장하는 레지스터 프로그램 카운터 : 메모리에서 가져올 명령어의 주소를 저장하는 레지스터 범용 레지스터 : 데이터와 주소를 모두 저장할 수 있는 레지스터 명령어 레지스터 : 해석할 명령어를...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/Week2/",
        "teaser": null
      },{
        "title": "[혼공컴운] 3주차",
        "excerpt":"진도 Chapter 06 ~ 08 (1/8 ~ 1/14) 기본미션 p.185 확인 문제 3번 주로 캐시 메모리로 활용됩니다. (SRAM) 주로 주기억장치로 활용됩니다. (DRAM) 대용량화하기 유리합니다. (DRAM) 집적도가 상대적으로 낮습니다. (SRAM) p.205의 확인 문제 1번 레지스터 캐시 메모리 메모리 보조기억장치 선택 미션 Ch.07(07-1) RAID의 정의와 종류를 간단히 정리해 보기 RAID : 데이터의...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/Week3/",
        "teaser": null
      },{
        "title": "[혼공컴운] 4주차",
        "excerpt":"진도 Chapter 09 ~ 11 (1/22 ~ 1/28) 기본미션 p.304의 확인 문제 1번 생성 상태 준비 상태 실행 상태 종료 상태 대기 상태 선택 미션 Ch.011(11-2) 준비 큐에 A, B, C, D 순으로 삽입되었다고 가정했을 때, 선입 선처리 스케줄링 알고리즘을 적용하면 어떤 프로세스 순서대로 CPU를 할당받는지 풀어보기 답 : A...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/Week4/",
        "teaser": null
      },{
        "title": "[혼공컴운] 5주차",
        "excerpt":"진도 Chapter 12 ~ 13 (1/29 ~ 2/4) 기본미션 p.363의 확인 문제 1번 뮤테스 락과 세마포에 대한 설명으로 옳지 않은 것을 고르세요. 답 : 4번 뮤테스 락은 임계 구역을 잠근 뒤 임계 구역에 진입함으로써 상호 배제를 위한 동기화를 이룹니다. 세마포는 공유 자원이 여러 개 있는 상황에서도 이용할 수 있습니다. 세마포를...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/Week5/",
        "teaser": null
      },{
        "title": "[혼공컴운] 6주차",
        "excerpt":"진도 Chapter 14 ~ 15 (2/5 ~ 2/12 + 4) 기본미션 p.400의 확인 문제 1번 메모리 할당 방식에 대한 설명으로 올바른 것을 다음 보기에서 찾아 써 보세요. 최초 적합 : 최초로 발견한 적재 가능한 빈 공간에 프로세스를 배치하는 방식 최악 적합 : 프로세스가 적재될 수 있는 가장 큰 공간에 프로세스를...","categories": ["HonGong"],
        "tags": ["Computer Structure","Operating System"],
        "url": "/hongong/Week6/",
        "teaser": null
      },{
        "title": "1303 전쟁 - 전투",
        "excerpt":"1303. 전쟁 - 전투 / c++ / Silver1 / 18분 문제 및 코드 접근 방식 BFS 전체 보드를 순회 아직 방문하지 않은 칸이라면 BFS 상하좌우로 아직 방문하지 않은 칸 중 시작 칸과 같은 문자의 칸 갯수 세기 시작 칸의 문자열이 ‘W’라면 백팀에 ‘B’라면 청팀에 갯수의 제곱만큼 더해주기 순회가 끝나면 백팀...","categories": ["BOJ"],
        "tags": ["Cpp","Graph","BFS","TIL"],
        "url": "/boj/1303/",
        "teaser": null
      },{
        "title": "169198 당구 연습",
        "excerpt":"169198. 당구 연습 / c++ / level2 / 1시간 10분 문제 및 코드 접근 방식 좌표계 한참을 각도에 대해 상각하다 문득 종이접기처럼 좌표를 접어볼 생각을 했다. 입사각과 반사각이 똑같이 때문에 당구대의 한 변을 기준으로 목표 공의 좌표를 접어봤다. 10 x 10 크기의 당구대에서 {3,7} 좌표에 있는 공의 경우 X =...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","Math","TIL"],
        "url": "/programmers/169198/",
        "teaser": null
      },{
        "title": "68645 삼각 달팽이",
        "excerpt":"68645. 삼각 달팽이 / c++ / level2 / 39분 문제 및 코드 접근 방식 브루트포스 삼각형은 총 3개의 진행 방향을 가진다. 아래로 내려가는 방향 (2차원 배열 기준 열이 바뀌지 않으므로 Y++) 오른쪽으로 가는 방향 (X++) 위로 올라가는 방향 (2차원 배열 기준 열과 행이 모두 바뀌므로 Y–, X–) 이 때 진행...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","BruteForce","TIL"],
        "url": "/programmers/68645/",
        "teaser": null
      },{
        "title": "154540 무인도 여행",
        "excerpt":"154540. 무인도 여행 / c++ / level2 / 10분 문제 및 코드 접근 방식 BFS string 의 배열이 주어진다. 이는 다시 char의 2차원 배열로 볼 수 있다. 각 칸은 X 또는 1~9 사이의 문자이다. 주어진 맵을 순회하며 아직 발견하지 않은 육지를 만나면 해당 칸부터 BFS를 실행한다. 주변의 모든 육지를 순회하여...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","BFS","Graph"],
        "url": "/programmers/154540/",
        "teaser": null
      },{
        "title": "43165 타겟 넘버",
        "excerpt":"43165. 타겟 넘버 / c++ / level2 / 6분 문제 및 코드 접근 방식 Back Tracking 순서를 바꾸지 않고 더하거나 뺀다. 정수가 n개이면 부호도 n개 현재 m번째 부호를 정한다고 하면, 그 결과 값은 m-1의 결과값 + numbers[m] 과 - numbers[m] 두가지이다. (단 m == 0 일 때는 이전 값은 0)...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Backtracking"],
        "url": "/programmers/43165/",
        "teaser": null
      },{
        "title": "138475 억억단을 외우자",
        "excerpt":"138475. 억억단을 외우자 / c++ / level3 / 15분 문제 및 코드 접근 방식 Dynamic Programming 하나의 e(nd)와 여러개의 s(tart)가 주어졌을 때, s ~ e의 범위 안에서 가장 많이 등장하는 억억단의 결과값 중 가장 작은 값의 출력 e의 최대값은 5’000’000 이므로 이는 1 * 5’000’000 와 5’000’000 * 1 의...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Dynamic Programming"],
        "url": "/programmers/138475/",
        "teaser": null
      },{
        "title": "84021 퍼즐 조각 채우기",
        "excerpt":"84021. 퍼즐 조각 채우기 / c++ / level3 / 1시간 20분 문제 및 코드 접근 방식 BFS 테이블의 퍼즐을 보드의 빈칸에 맞춰야한다. 테이블의 퍼즐을 탐색한다. (BFS) 퍼즐을 3번 돌려 총 4개의 회전된 퍼즐을 찾는다. 한번도 돌리지 않은 퍼즐 시계방향으로 90도 회전하게 되면 1번 상태의 X,Y좌표값이 바뀌고 X값의 부호가 반대가 된다....","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS"],
        "url": "/programmers/84021/",
        "teaser": null
      },{
        "title": "150365 미로 탈출 명령어",
        "excerpt":"150365. 미로 탈출 명령어 / c++ / level3 / 45분 문제 및 코드 접근 방식 BFS 1차 시도 : 전형적인 BFS 대신 State 라는 구조체를 넣어서 거기에 현재 위치, 이동 거리, 경로 문자열을 담도록 해봤다. -&gt; 시간 초과 2차 시도 : 1차에서 추가로 다음 이동할 위치와 목표 지점 간의 거리가...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS"],
        "url": "/programmers/150365/",
        "teaser": null
      },{
        "title": "Start / Update",
        "excerpt":"Start() 게임이 시작될 때 한번 불리는 함수 Unreal에서 비슷한 함수로는 BeginPlay() 가 있다. Update() 매 틱마다 호출되는 함수 Unreal에서 비슷한 함수로는 Tick() 이 있다. Update 함수의 종류와 실행 순서 FixedUpdate : 물리 업데이트 단계에서 호출. 물리 연산이나 물리 시뮬레이션 등의 경우에 사용되며 고정된 시간 간격마다 호출됨 Update : 일반적인 게임...","categories": ["Unity"],
        "tags": ["Unity"],
        "url": "/unity/240418UnityTIL/",
        "teaser": null
      },{
        "title": "2606 바이러스",
        "excerpt":"2606. 바이러스 / c++ / Silver3 / 20분 문제 및 코드 접근 방식 Union Find 연결된 컴퓨터 쌍 A, B가 주어질 때 A와 B의 Root를 구한다. (여기선 Parent) 두 Parent 가 같다면 이미 같은 그래프에 속해 있으므로 패스 두 Parent 가 다르다면 한쪽의 Parent를 다른 한쪽의 Parent 로 연결지어 준다....","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Union Find","Graph"],
        "url": "/boj/2606/",
        "teaser": null
      },{
        "title": "4949 균형잡힌 세상",
        "excerpt":"4949. 균형잡힌 세상 / c++ / Silver4 / 12분 문제 및 코드 접근 방식 Stack 괄호 문제? 스택 여는 괄호는 스택에 push 닫는 괄호가 나올 때 스택을 검사 스택이 비어있거나, 스택의 탑이 해당 괄호와 맞지 않을 때 -&gt; false 스택이 비어있지 않고, 스택의 탑이 해당 괄호와 맞다면 -&gt; pop 문자열...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Stack","Data Structure"],
        "url": "/boj/4949/",
        "teaser": null
      },{
        "title": "1431 시리얼 번호",
        "excerpt":"1431. 시리얼 번호 / c++ / Silver3 / 14분   문제 및 코드      접근 방식  정렬  단순 정렬 문제, 각 문자열마다 숫자의 합을 미리 구한 후 캐싱했다.   다시 생각해 볼 점  ","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Sort"],
        "url": "/boj/1431/",
        "teaser": null
      },{
        "title": "81302 거리두기 확인하기",
        "excerpt":"81302. 거리두기 확인하기 / c++ / level2 / 35분 문제 및 코드 접근 방식 BFS 하나의 응시자를 기준으로 거리가 2이하이고, 칸막이로 가려져 있지 않은 응시자를 판별해야하는 문제 BFS의 조건으로 해당 칸 == ‘X’ (칸막이로 가려져 있는 경로) 인 경우은 탐색을 중지하도록 추가 해당 칸의 비용이 2보다 작을 때만 큐에 삽입하는...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS"],
        "url": "/programmers/81302/",
        "teaser": null
      },{
        "title": "11279 최대힙 ",
        "excerpt":"11279. 최대 힙 / c++ / Silver2 / 5분 문제 및 코드 과거에 풀었던 문제라 코드 리뉴얼이 안됐다. 새로운 코드 #include &lt;iostream&gt; #include &lt;queue&gt; using namespace std; std::priority_queue&lt;int&gt; PQ; int Input; int N; int main() { ios::sync_with_stdio(0); cin.tie(0); cout.tie(0); cin &gt;&gt; N; while (N--&gt;0) { cin &gt;&gt; Input; if (Input...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Heap","Data Structure"],
        "url": "/boj/11279/",
        "teaser": null
      },{
        "title": "1436 영화감독 숌",
        "excerpt":"1436. 영화감독 숌 / c++ / Silver5 / 35분 문제 및 코드 접근 방식 Brute Force Current 를 666부터 시작해서 1씩 증가시킴 Current 를 string 으로 변환 후 “666”을 포함하고 있는지 체크 포함하고 있다면 Doo[Pos]에 넣고 Pos 1 증가 만약 Pos 가 10’000보다 커졌다면 멈추고 Doom[N] 출력 아니라면 1번으로 돌아가...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Brute Force"],
        "url": "/boj/1436/",
        "teaser": null
      },{
        "title": "1644 소수의 연속합",
        "excerpt":"1644. 소수의 연속합 / c++ / Gold3 / 22분 문제 및 코드 접근 방식 투 포인터 우선 N 이하의 소수를 구해야하므로 에라토스테네스의 체로 N 이하의 소수를 구한다. 이 때 소수를 벡터에 넣는다. 벡터에는 정렬된 N 이하의 소수가 들어있으므로 투 포인터를 사용하여 부분합을 구하고, 그 합이 N이면 Answer를 1 증가시킨다. Answer...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Two Pointer"],
        "url": "/boj/1644/",
        "teaser": null
      },{
        "title": "3273 두 수의 합",
        "excerpt":"3273. 두 수의 합 / c++ / Silver3 / 13분 문제 및 코드 접근 방식 투 포인터 배열의 원소들 중 두 수의 합이 X를 만족하는 쌍의 개수 출력 배열을 정렬하면 투포인터 조건 만족 (크면 Right 줄이기, 작으면 Left 키우기) 다시 생각해 볼 점 정렬을 통해 투포인터를 사용할 수 있도록 손질하는게...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Two Pointer"],
        "url": "/boj/1806/",
        "teaser": null
      },{
        "title": "1940 주몽",
        "excerpt":"1940. 주몽 / c++ / Silver4 / 7분   문제 및 코드      접근 방식  투 포인터     정렬 후 두 수의 합으로 판별   작으면 Left 증가   크면 Right 감소   같으면 Answer 증가 후 Right 감소   다시 생각해 볼 점  ","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Two Pointer"],
        "url": "/boj/1940/",
        "teaser": null
      },{
        "title": "2470 두 용액",
        "excerpt":"2470. 두 용액 / c++ / Gold5 / 9분 문제 및 코드 접근 방식 투 포인터 단순 투 포인터 문제 정렬 후 투 포인터 알고리즘 수행 Sum &lt; 0 이면 Left++, Sum &gt; 0 이면 Right– 계산 할때마다 ABS(Sum)이 현재 최소값 보다 작다면 최소값과 위치 갱신 Array[MinLeft] , Array[MinRight] 출력...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Two Pointer"],
        "url": "/boj/2470/",
        "teaser": null
      },{
        "title": "1806 부분합",
        "excerpt":"1806. 부분합 / c++ / Gold4 / 12분 문제 및 코드 접근 방식 투 포인터 부분합 / 투 포인터 문제 연속된 수의 합이 S 이상을 만족하는 최소 길이를 구하는 문제 현재 총 합이 S보다 작으면 Right 증가 S보다 크거나 같으면 길이 체크 후 Left 증가 다시 생각해 볼 점 부분합...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Two Pointer"],
        "url": "/boj/3273/",
        "teaser": null
      },{
        "title": "1541 잃어버린 괄호",
        "excerpt":"1541. 잃어버린 괄호 / c++ / Silver2 / 1시간 문제 및 코드 문제 및 기존에 풀었던 코드 새로운 코드 #include &lt;iostream&gt; #include &lt;string&gt; #include &lt;queue&gt; using namespace std; queue&lt;char&gt; OperQueue; queue&lt;int&gt; NumberQueue; int main() { ios::sync_with_stdio(0); cin.tie(0); cout.tie(0); string Input; cin &gt;&gt; Input; string Num = \"\"; for (int i...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Greedy","Math","String","Parsing"],
        "url": "/boj/1541/",
        "teaser": null
      },{
        "title": "2847 게임을 만든 동준이",
        "excerpt":"2847. 게임을 만든 동준이 / c++ / Silver4 / 10분 문제 및 코드 접근 방식 그리디 배열을 뒤에서부터 순회 배열의 현재 원소 Array[i]가 바로 뒤 원소 Array[i+1]보다 크거나 같다면 Array[i+1] - 1 이 되도록 감소시킴 그 감소한 값을 Answer에 더하기 순회가 끝난 후 Answer 출력 다시 생각해 볼 점 1.’가장...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Greedy"],
        "url": "/boj/2847/",
        "teaser": null
      },{
        "title": "1309 동물원",
        "excerpt":"1309. 동물원 / c++ / Silver1 / 55분 문제 및 코드 접근 방식 동적 계획법 1차 시도 동물원의 칸이 2 X N 개일 때마다, 각각 사자가 0마리 1마리 2마리 … N마리 일 때 까지의 가짓수를 다 더해보려고 했다. 규칙성을 찾지 못해서 실패 (아마 변수가 2개 [동물원의 칸, 사자의 마릿수]여서 그랬던...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Dynamic Programming"],
        "url": "/boj/1309/",
        "teaser": null
      },{
        "title": "16435 스네이크버드",
        "excerpt":"16435 스네이크버드 / c++ / Silver5 / 5분   문제 및 코드     접근 방식  그리디     과일을 정렬 후 순회하면서 스네이크버드의 길이보다 과일의 높이가 낮거다 같다면 길이를 1 증가시킨다.   길이보다 과일의 높이가 크다면 거기서 멈춘다.   다시 생각해 볼 점     랭크가 낮다보니 비교적 간단한 문제였다.  ","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Greedy"],
        "url": "/boj/16435/",
        "teaser": null
      },{
        "title": "11866 요세푸스 문제",
        "excerpt":"11866 요세푸스 문제 / c++ / Silver5 / 10분 문제 및 코드 접근 방식 자료구조 (큐) 출력 형식에 맞게 우선 ‘&lt;’ 출력 N개의 원소를 가진 배열 Vector 의 길이가 0보다 클 때, 아래를 반복 K 번째 원소를 출력 후 제거해야하는데, 현재 번호도 포함해야 하므로 i-K-1 번째 원소를 출력 후 제거해야함...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure"],
        "url": "/boj/11866/",
        "teaser": null
      },{
        "title": "2161 카드1",
        "excerpt":"2161 카드1 / c++ / Silver5 / 3분 문제 및 코드 접근 방식 자료구조 (큐) 단순 큐 구현 문제 큐의 사이즈가 1보다 클 동안 아래를 반복 큐의 front 출력 후 pop 큐의 front 를 push 후 pop 마지막 남은 원소 출력 다시 생각해 볼 점 카드 셔플은 큐 자료구조를 활용하면...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Queue"],
        "url": "/boj/2161/",
        "teaser": null
      },{
        "title": "9625 BABBA",
        "excerpt":"9625 BABBA / c++ / Silver5 / 5분 문제 및 코드 접근 방식 동적 계획법 dp[0] (한번도 누르지 않은 경우) A = 1, B = 0 dp[i] (i &gt; 0) 의 경우, dp[i][0] = dp[i-1][1], dp[i][1] = dp[i-1][1] + dp[i-1][0] 다시 생각해 볼 점 점화식만 찾을 수 있다면, 금방 해결할...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Dynamic Programming"],
        "url": "/boj/9625/",
        "teaser": null
      },{
        "title": "2503 숫자 야구",
        "excerpt":"2503 숫자 야구 / c++ / Silver3 / 35분 문제 및 코드 접근 방식 백트래킹 / 브루트 포스 처음엔 주어진 숫자들을 순회하며 규칙을 찾아 판별해내려고 했다. 사람인 내가 생각하기에는 충분한 규칙이었지만 코딩하기엔 애매한 규칙들이었다. 다른 방법을 생각하던 중 시간 복잡도를 계산해봤다. 1 부터 9 까지의 숫자 중 중복되지 않도록 3개를...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Back Tracking","Brute Force"],
        "url": "/boj/2503/",
        "teaser": null
      },{
        "title": "OOP",
        "excerpt":"Summary 절차지향과 함수지향 프로그래밍과 비교한 객체지향 프로그래밍의 장단점 Concept 절차형: 멤버 변수, 속성과 같은 데이터가 메서드와 분리되어 있는 것이 특징이다. 메서드와 데이터 구조의 정의는 서로 관계가 없다. 간단한 프로그램으로, 작업 흐름이 가지를 뻗어나가지 않고 일직선 형태를 띄는 경우에 유리하다. 복잡한 대규모 프로그램의 경우 흐름이 그물망이나 나뭇가지처럼 여러 방향으로 얽히게 되는데,...","categories": ["Design Pattern"],
        "tags": ["Study"],
        "url": "/design%20pattern/OOP/",
        "teaser": null
      },{
        "title": "12789 도키도키 간식드리미",
        "excerpt":"12789 도키도키 간식드리미 / c++ / Silver3 / 20분 문제 및 코드 접근 방식 자료 구조 / 스택 입력을 받았을 때, 우선 스택이 비어있는지 체크 비어있지 않다면 스택의 탑이 들어갈 수 있는지 체크 들어갈 수 있다면 스택을 pop 하고 들어갈 수 있는 번호 1 증가 현재 입력 값이 들어갈 수...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Stack"],
        "url": "/boj/12789/",
        "teaser": null
      },{
        "title": "11399 ATM",
        "excerpt":"11399 ATM / c++ / Silver4 / 11분 문제 및 코드 접근 방식 그리디 / 정렬 시간의 총 합을 최소로 줄이기 위해선, 인출 시간이 짧은 순서대로 정렬하면 된다. 다시 생각해 볼 점 정렬로 쉽게 풀 수 있는 문제였다. 문제가 요구하는 총 인출 시간은 각 사람마다 대기시간 + 인출시간 을 더한...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Greedy","Sort"],
        "url": "/boj/11399/",
        "teaser": null
      },{
        "title": "3085 사탕 게임",
        "excerpt":"3085 사탕 게임 / c++ / Silver2 / 40분 문제 및 코드 접근 방식 브루트 포스 / 구현 인접한 4칸 중 색이 다른 칸을 찾기 (왼쪽위에서 우하향으로 내려오기 때문에 오른쪽, 아래만 검사하면 됨) 서로 색을 바꾸기 바꾼 칸 두 칸을 기준으로 4방향으로 뻗었을 때, 가장 긴 수를 반환 최대값 갱신...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Brute Force"],
        "url": "/boj/3085/",
        "teaser": null
      },{
        "title": "11652 카드",
        "excerpt":"11652 카드 / c++ / Silver4 / 8분 문제 및 코드 접근 방식 자료구조 / 맵 / 정렬 준규가 가지는 하나의 카드는 long long 범위이다. 맵을 사용하여 카드의 갯수를 증가시키며 저장 카드 입력 종료 후 맵을 처음부터 순회하며 최대값 갱신때마다 answer에 해당 정수를 저장 answer 출력 다시 생각해 볼 점...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Map","Sort"],
        "url": "/boj/11652/",
        "teaser": null
      },{
        "title": "18352 특정 거리의 도시 찾기",
        "excerpt":"18352 특정 거리의 도시 찾기 / c++ / Silver2 / 30분 문제 및 코드 접근 방식 그래프 / 다익스트라 각 도시간의 거리는 1이다. 최대 도시 수는 300’000으로, 인접행렬로 구하기엔 공간 복잡도가 높다. -&gt; 인접 리스트를 사용 시작 도시 X에서 다익스트라 알고리즘으로 각 도시까지의 거리를 구한다. 계산이 끝나면 그 중 거리가...","categories": ["BOJ"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","Dijkstra"],
        "url": "/boj/18352/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 1일차 TIL - 42579 베스트앨범",
        "excerpt":"42579. 베스트앨범 / c++ / level3 / 13분 문제 및 코드 접근 방식 자료구조 / 해시 / 정렬 문제를 읽고 든 생각은 총 2개의 컨테이너가 필요하다는 것이었다. 각 장르별 총 재생 횟수를 저장하는 컨테이너 각 장르마다 곡의 인덱스와 재생 횟수를 저장하는 컨테이너 그래서 genres와 plays 벡터를 순회하면서 형식에 맞게 자료를...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Hash","Sort"],
        "url": "/programmers/42579/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 2일차 TIL - 42578 의상",
        "excerpt":"42578. 의상 / c++ / level2 / 8분 문제 및 코드 접근 방식 자료구조 / 해시 매일 다른 옷을 입어야 하고 종류별로 최대 1가지 의상을 착용하거나 착용하지 않을 수 있는데, 최소 1가지의 옷은 입어야 한다. 문제를 보고 든 생각은 종류 (카테고리) 별로 옷을 나누고, 그 옷들의 조합의 수를 구하는 것이었다....","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Hash"],
        "url": "/programmers/42578/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 3일차 TIL - 42586 기능개발",
        "excerpt":"42586. 기능개발 / c++ / level2 / 11분 문제 및 코드 접근 방식 구현 완료되지 않은 가장 앞의 작업이 100을 넘길때까지 계속 작업량을 한번씩 더함 완료되지 않은 가장 앞의 작업이 100을 넘기면, 그 뒤로 100이 넘어간 작업이 몇개 더 있는지 체크 해당 갯수만큼 정답 벡터에 삽입, 만약 완료되지 않은 작업이...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Queue"],
        "url": "/programmers/42586/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 4일차 TIL - 12909 옳바른 괄호",
        "excerpt":"12909. 옳바른 괄호 / c++ / level2 / 8분 문제 및 코드 접근 방식 자료구조 / 스택 괄호 문제는 일단 스택을 생각하고 봐야한다. 만약 배열의 원소의 갯수가 홀수라면 false를 리턴 아니라면 배열을 순회하며 여는 괄호가 나오면 스택에 push 닫는 괄호가 나오면 스택의 top이 여는 괄호인지 체크 스택이 비어있거나 스택의 top이...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Stack"],
        "url": "/programmers/12909/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 5일차 TIL - 42627 디스크 컨트롤러",
        "excerpt":"42627. 디스크 컨트롤러 / c++ / level3 / 1시간+ 문제 및 코드 접근 방식 자료구조 / 힙 / 우선순위 큐 문제 자체는 단순했다. 현재 처리할 수 있는 일들 중 가장 짧은 일을 처리한다. 모든 일을 처리할 때까지 반복 이 때, 일을 짧은 순서로 정리하기 위해서 우선순위 큐를 사용했다. 하지만 간과한...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Heap"],
        "url": "/programmers/42627/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 6일차 TIL - 42628 이중우선순위큐",
        "excerpt":"42628. 이중우선순위큐 / c++ / level3 / 32분 문제 및 코드 접근 방식 구현 / 자료구조 / 힙 / 셋 (Set) 해당 요구사항에 맞게 자료구조를 구현하면 되는 문제였다. multiset을 사용해서 혹시 모를 중복에 대비하며, 자료를 입력과 동시에 정렬해줬다. D 1 의 경우 최대값을 삭제해야하므로 set 의 마지막 원소를 erase 해줬다....","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Data Structure","Heap"],
        "url": "/programmers/42628/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 7일차 TIL - 2551 Put Marbles in Bags",
        "excerpt":"2551. Put Marbles in Bags / c++ / Hard / 1시간+ 문제 및 코드 #include &lt;iostream&gt; #include &lt;algorithm&gt; vector&lt;int&gt; costVector; class Solution { public: long long putMarbles(vector&lt;int&gt;&amp; weights, int k) { costVector = vector&lt;int&gt;(weights.size()-1); for (int i = 0; i &lt; weights.size() - 1; ++i) { costVector[i] = weights[i] +...","categories": ["LeetCode"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Sort"],
        "url": "/leetcode/2551/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 8일차 TIL - 899 Orderly Queue",
        "excerpt":"899. Orderly Queue / c++ / Hard / 30분 문제 및 코드 #include &lt;queue&gt; struct Cmp { bool operator()(char&amp; a, char&amp; b) { return a &gt; b; } }; class Solution { public: string orderlyQueue(string s, int k) { string Answer = s; if (k == 1) { int count...","categories": ["LeetCode"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Sort"],
        "url": "/leetcode/899/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 9일차 TIL - 84512 모음 사전",
        "excerpt":"84512. 모음 사전 / c++ / level2 / 8분 문제 및 코드 접근 방식 완전 탐색 빈 문자열 “” 부터 시작해서 큐에 집어넣는다. 큐가 빌 때까지 아래를 반복 큐에서 하나를 꺼내서 만약 길이가 5라면, 더 이상 추가할 수 없으므로 continue for 문을 돌면서 현재 문자열에 ‘A’, ‘E’, ‘I’, ‘O’, ‘U’...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Brute Force"],
        "url": "/programmers/84512/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 10일차 TIL - 86971 전력망을 둘로 나누기",
        "excerpt":"86971. 전력망을 둘로 나누기 / c++ / level2 / 18분 문제 및 코드 접근 방식 완전 탐색 노드가 100개이므로 인접행렬을 만들어도 100 * 100 개, 메모리 크기는 40KB(정수의 경우)가 되므로 충분했다. wires를 돌면서 두 노드를 모두 연결해줬다. (양방향 그래프) 다시 wires를 돌면서, 이번엔 두 노드를 모두 끊어준 뒤, 각 노드를...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Brute Force"],
        "url": "/programmers/86971/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 11일차 TIL - 84021 퍼즐 조각 채우기",
        "excerpt":"84021. 퍼즐 조각 채우기 / c++ / level3 / 1시간+ 문제 및 코드 접근 방식 그래프 탐색 / BFS / 구현 먼저 table 에서 블록(위치값의 벡터)들을 BFS 로 구한다. table을 탐색할 때, 좌상단부터 우하단 방향으로 탐색하기에, 블록의 첫 번째 부분은 항상 가장 위에 있고, 그 중 가장 왼쪽에 위치한다. 구한...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS"],
        "url": "/programmers/84021/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 12일차 TIL - 43164 여행경로",
        "excerpt":"43164. 여행경로 / c++ / level3 / 1시간+ 문제 및 코드 접근 방식 그래프 탐색 / BFS / 구현 / 백트래킹 우선 tickets 을 순회 하면서 인접리스트인 adjMap (unordered_map&lt;string,vector&gt;) 을 준비 여행 경로를 담을 vector currentPath를 선언 currentPath에 출발지인 ICN을 삽입 adjMap에서 ICN을 출발지로 하는 인접리스트를 돌면서 백트래킹 시작 currentPath.back...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS","BackTracking"],
        "url": "/programmers/43164/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 13일차 TIL - 87964 아이템 줍기",
        "excerpt":"87964. 아이템 줍기 / c++ / level3 / 1시간+ 문제 및 코드 접근 방식 그래프 탐색 / BFS 점이 겹치는 뭉치는 문제를 해결하기 위해 사각형의 각 좌표를 * 2 해줌 사각형을 돌면서 2차원 bool 배열 map에 테두리를 true 표시해줌 다시 사각형을 돌면서 사각형 안쪽을 false로 바꿔줌 해당 map을 기준으로 BFS...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS"],
        "url": "/programmers/87964/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 14일차 TIL - 43163 단어 변환",
        "excerpt":"43163. 단어 변환 / c++ / level3 / 18분 문제 및 코드 접근 방식 그래프 탐색 / DFS 두 단어가 하나의 문자만 다른 경우 해당 단어로 바꿀 수 있다면, 두 단어를 이어진 두 노드라고 볼 수 있다. 단어를 순회하면서 해당 단어와 한 문자만 다른 단어를 찾아 unordered_map&lt;string, vector&gt; adjMap 에...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","DFS"],
        "url": "/programmers/43163/",
        "teaser": null
      },{
        "title": "Stable & Unstable Sort",
        "excerpt":"Stable &amp; Unstalbe Sort   정렬 시 같은 key 값을 가지는 원소들의 순서가 유지된다면 stable sort이고, 순서가 유지되지 않는다면 unstable sort이다.  ","categories": ["DataStructure"],
        "tags": ["Sort","DataStructure"],
        "url": "/datastructure/Stable&UnStableSort/",
        "teaser": null
      },{
        "title": "운영체제 시작하기",
        "excerpt":"운영체제란 실행할 프로그램에 필요한 자원을 할당하고, 프로그램이 올바르게 실행되도록 돕는 특별한 프로그램 커널 영역 / 사용자 영역 커널 영역 : 운영체제가 적재되는 메모리 공간 사용자 영역 : 사용자가 이용하는 응용 프로그램이 적재될 커널 영역 이외의 공간 운영체제의 핵심 서비스 프로세스 관리 실행 중인 프로그램을 프로세스라고 하는데, 일반적으로 CPU는 한번에 한...","categories": ["OperatingSystem"],
        "tags": ["OperatingSystem","HonGong"],
        "url": "/operatingsystem/OperatingSystem/",
        "teaser": null
      },{
        "title": "Uniform Initialization",
        "excerpt":"Uniform Initialization 유니폼 초기화 혹은 균일 초기화라고 부른다. 생기게된 계기 C++ 에서 변수를 초기화 할 때, 아래와 같은 실수를 저지른다. int a(); MyClass b(); 이 때, a와 b는 작동 방식이 다르다. a는 int자료형을 Direct Initialization한 것이고, b는 MyClass라고 하는 자료형을 반환하는 함수를 정의한 것 이기 때문에, 생성자가 호줄되지 않는다. (전방선언)...","categories": ["C++"],
        "tags": ["C++","Initialization"],
        "url": "/c++/UniformInitialization/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 15일차 TIL - 43162 네트워크",
        "excerpt":"43162. 네트워크 / c++ / level3 / 12분 문제 및 코드 접근 방식 그래프 탐색 / BFS 처음엔 Union-Find 알고리즘을 활용하여, 부모가 다른 노드의 갯수를 세면 될것이라고 생각했는데, 비효율적이라고 판단했다. 다시 생각해보니 인접행렬을 따라 BFS 했을 때, 만들어지는 sub-graph들의 갯수를 세면 되는 문제였다. 생각해 볼 점 이 전에도 풀어봤던 문제였지만,...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","BFS"],
        "url": "/programmers/43162/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 16일차 TIL - 42861 섬 연결하기",
        "excerpt":"42861. 섬 연결하기 / c++ / level3 / 7분 문제 및 코드 접근 방식 그리디 / 그래프 / Union-Find / 크루스칼 크루스칼 알고리즘을 이용하여 최소 신장 트리를 만들었을 때의 비용을 구하는 문제였다. 생각해 볼 점 MST와 Union-Find 를 알고 있다면 쉽게 풀 수 있는 문제였다. 해시태그 #99클럽 #코딩테스트 준비 #개발자...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","Greedy","UnionFind","Kruskal"],
        "url": "/programmers/42861/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 17일차 TIL - 42884 단속카메라",
        "excerpt":"42884. 단속카메라 / c++ / level3 / 32분 문제 및 코드 접근 방식 그리디 / 정렬 / 라인 스위핑 이런 문제는 일단 시작점과 끝점 양쪽을 기준으로 빠른 순으로 정렬한다. 그러면 모든 차(선분)이 겹치거나 겹치지 않는 형태로 일렬로 정렬이 된다. 정렬된 벡터를 순회하면서, 만약 두 차의 경로가 겹친다면, 겹치는 부분으로 합친다....","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","Greedy","Sort","LineSweeping"],
        "url": "/programmers/42884/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 18일차 TIL - 42895 N으로 표현",
        "excerpt":"42895. N으로 표현 / c++ / level3 / 1시간+ 문제 및 코드 접근 방식 동적 계획법 사칙 연산으로 이루어져 있다는 점에서 착안 N이 들어간 횟수를 i라고 했을 때, i + 1은 결국 1 ~ (i-1)까지의 사칙 연산으로 이루어져 있다고 판단 dp[i]는 N이 i번 들어갔을 때 만들어질 수 있는 수들의 배열...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph","DynamicProgramming"],
        "url": "/programmers/42895/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 19일차 TIL - 43105 정수 삼각형",
        "excerpt":"43105. 정수 삼각형 / c++ / level3 / 26분 문제 및 코드 접근 방식 동적 계획법 위에서 아래로 내려간다면, 어떤 루트를 결정해야 큰 값이 나올지 모를 수 있지만, 반대로 아래에서 위의 값을 고른다면, 무조건 둘 중 큰 값을 고르기만 하면 된다. 해당 식을 DP라는 함수로 만들어서 저장 (이 때, 인자값으로...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","DynamicProgramming"],
        "url": "/programmers/43105/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 20일차 TIL - 1843 사칙연산",
        "excerpt":"1843. 사칙연산 / c++ / level4 / 1시간+ 문제 및 코드 접근 방식 동적 계획법 식을 적절히 괄호로 감싸서 계산 순서를 정했을 때 나올 수 있는 최대 값을 구하는 문제였다. dp라는건 결국 이전 값을 다음 계산에 활용할 수 있다는 것이므로, 이걸 어떻게 문제에 대입할 수 있을지 생각해봤다. 연산자 하나에 대해...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","DynamicProgramming"],
        "url": "/programmers/1843/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 21일차 TIL - 42897 도둑질",
        "excerpt":"42897. 도둑질 / c++ / level4 / 1시간+ 문제 및 코드 접근 방식 동적 계획법 이런 식의 문제는 보통, 현재 칸에서 행동함 = 전 칸의 행동 안한 결과 + 현재 칸의 값 으로 풀 수 있다. 다만 이 문제의 경우 순환 배열이어서 시작 원소와 마지막 원소 역시 위의 조건을 만족해야...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","DynamicProgramming"],
        "url": "/programmers/42897/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 22일차 TIL - 43236 징검다리",
        "excerpt":"43236. 징검다리 / c++ / level4 / 2시간+ 문제 및 코드 접근 방식 이분탐색 결론은 돌을 n개 이하로 제거했을 때, 시작점(0), 각 다리 사이의 거리, 끝점(distance)가 모두 x이상일 때, 이 x에 들어갈 수 있는 수 중 가장 큰 값을 구하는 문제였다. 이분탐색을 안쓰고 정렬이랑 우선순위큐를 써서 풀어보려고 시간을 엄청 썼다....","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","BinarySearch"],
        "url": "/programmers/43236/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 23일차 TIL - 786 K-th Smallest Prime Fraction",
        "excerpt":"786. K-th Smallest Prime Fraction / c++ / Medium / 14분 문제 및 코드 #include &lt;iostream&gt; #include &lt;algorithm&gt; using namespace std; class Solution { public: vector&lt;int&gt; kthSmallestPrimeFraction(vector&lt;int&gt;&amp; arr, int k) { vector&lt;vector&lt;int&gt;&gt; vec; for (int i = 0; i &lt; arr.size(); ++i) { for (int j = i + 1;...","categories": ["LeetCode"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Sort"],
        "url": "/leetcode/786/",
        "teaser": null
      },{
        "title": "99클럽 코테 스터디 24일차 TIL - 49190 방의 개수",
        "excerpt":"49190. 방의 개수 / c++ / level5 / 2시간+ 문제 및 코드 접근 방식 그래프 방을 만드는 조건을 찾아야했다. 이미 방문한 좌표를 다시 방문할 때 방이 생성됐다. 방문한적 없는 간선(arrow)로 방문해야 방이 생성됐다. unordered_set으로 좌표와 간선의 방문여부를 체크했고, 테스트 케이스를 통과했지만, 문제는 틀렸다. 아무리 생각해도 이유를 알 수 없어서, 다른...","categories": ["Programmers"],
        "tags": ["Algorithm","CodingTest","Cpp","TIL","Graph"],
        "url": "/programmers/49190/",
        "teaser": null
      }]

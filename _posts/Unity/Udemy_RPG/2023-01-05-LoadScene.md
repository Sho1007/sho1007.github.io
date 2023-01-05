---
title: "LoadScene"
category:
- Unity Udemy
tag:
- Unity
- Udemy
- SceneManager
- LoadScene
toc: true
toc_sticky: true
date: 2023-01-05
last-modified-at: 2023-01-05
---
이 문서는 Udemy의  'RPG Core Combat Creator' 강의를 보고 배운 점을 적은 것입니다.
{: .notice}

# 설명
SceneManager 안에 속한 함수로, 해당 Scene을 로드 후 이동한다.   
BuildSetting에 Scene들을 등록해놔야 사용 가능하다.
1. 이름으로 이동
2. Build에 등록된 번호로 이동

# 사용법
## 동기화 버전
```c#
using UnityEngine.SceneManagement;  // 여기 안에 SceneManager 있음
[SerializeField] int SceneToLoad = -1;  // 로드 할 Scene의 번호

public class Portal : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            SceneManager.LoadScene(SceneToLoad);
        }
    }
}
```
## 비동기 버전
```c#
using UnityEngine.SceneManagement;  // 여기 안에 SceneManager 있음
[SerializeField] int SceneToLoad = -1;  // 로드 할 Scene의 번호

public class Portal : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            StartCoroutine(Transition());
        }
    }

    private IEnumerator Transition()
    {
        yield return SceneManager.LoadSceneAsync(SceneToLoad);
    }
}
```

# DontDestroyOnLoad
다른 Scene으로 이동해도 해당 GameObject가 파괴하지 않는다.
## 사용법
```c#
private void Awake()
{
    DontDestroyOnLoad(gameObject);
}
```
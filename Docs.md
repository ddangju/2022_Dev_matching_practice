# Dev_matching_practice History 

> 해당 과제를 진행하면서 고민하였던 순간들을 하나씩 기록

<br>


## append vs appendChild

**appendChild**의 경우 node요소만 추가하고, **append**의 경우 node요소와 dom string을 추가할 수 있다.

<br>


## git stash

작업하는 도중 다른 브렌치를 이동하거나 작업을 해야할 때, commit을 찍을 수 없다면?

**- git stash** 명령어로 해당 작업물을 임시 저장한다! 

삭제하려면?

**- git stash drop clean (모두 비우기)**

<br>



## 구조분해할당

```js
const object = { a : 1, b: 2}

const { a, b} = object;

console.log(a); //1
console.log(b); //2

```

<br>

함수의 파라미터로도 가능하다

```js
const object = { a:1, b:2};

function print({a,b}){
  console.log(a);
  console.log(b);
}

print(object)
```

<br>

구조할당시 기본값 설정하기

suggestion.js에서 render()함수 내부에서 

```js
    const { items = [] } = this.state
```
구조 분해 할당을 확인하고 무슨 뜻을 의미하는 것인지 찾아봄

items = []의 경우는 기본값을 설정해주는 것


<!-- app에서 설정해준 초기값을 컴퍼넌트로 보내서 다시 state로 할당해준다...! -->

<br>

## suggestion부분


`map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 **새로운 배열**을 반환한다.

items에 대하여 map함수를 호출시켜보자.

```js
      this.div.innerHTML = `
      <ul>
        ${items
          .map(
            (item, index) => `
          <li data-index="${index}">${item}</li>
        `
          )
          .join("")}
      </ul>

```

map함수는 새로운 배열을 반환하고 있다(아래 이미지로 확인 가능)

<img src="https://user-images.githubusercontent.com/68775082/220659767-d1ab56f1-96dc-488d-ac6d-58bb6703872d.png"  alt="img" width="700px"/>



suggestion에서 setState를 하기

<br>


## 키보드 이벤트 강조 처리

검색창에 키워드를 입력했을 때 일치하는 내용이 리스트로 나열되는 상황.

여기서 위, 아래의 방향키를 옮겨 해당하는 키워드가 강조가 되어야한다.
 
*파일구조*

```html             
 App.js 
    ㄴsearchInput.js 
    ㄴsuggestion.js 
```   
    

App에서 suggestion 인스턴스를 생성하고 함수인 onSelect를 정의해주었다.

그리고 생성자 함수인 suggestion에서 넘어온 onSelect를 받고있는데 여기서 문제가 생겼다.

넘어온 onSelect를 처리하지 못해 console.log를 찍어도 에러가 발생했다.

자신을 참조하는 값 `this`를 사용하여 onSelect를 할당해주어서 해결했다..!

생성자 함수와 인스턴스는 막연하게 붕어빵 틀처럼 찍어낸다라고만 알고 있었는데

이 문제를 해결하면서 어떻게 사용하는 지에 대해 알 수 있었다. 


```js
///App.js

const sugeestion = new Sugeestion(
  onSelect: (lang) =>{
    console.log(lang)
  }
)
window.addEventListener("keydown",()=>{
///코드 생략
  sugeestion.onSelect(e)

}
```

```js
///suggestion.js

export default function Suggestion({onSelect}){
///메서드를 생성!!! 
  this.onSelect = onSelect
}
``` 


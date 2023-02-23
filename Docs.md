## append vs appendChild

**appendChild**의 경우 node요소만 추가하고, **append**의 경우 node요소와 dom string을 추가할 수 있다.

## git stash

작업하는 도중 다른 브렌치를 이동하거나 작업을 해야할 때, commit을 찍을 수 없다면?

** - git stash ** 명령어로 해당 작업물을 임시 저장한다! 

삭제하려면?

** - git stash drop clean (모두 비우기) **


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

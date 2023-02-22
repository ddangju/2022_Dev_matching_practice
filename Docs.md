
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

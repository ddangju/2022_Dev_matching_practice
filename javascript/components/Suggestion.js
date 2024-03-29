// Suggestion 생성자 함수를 정의
export default function Suggestion({ target, initialState, onSelect }) {
  this.state = {
    selectedIndex: initialState.selectedIndex,
    items: initialState.items,
    // selectedIndex: -1,
    selectedIndex: 0,
  };

  //test
  this.onSelect = onSelect;

  this.setState = (nextState) => {
    console.log("suggesiton");
    // {items:["1","2"]} 형태로 넘어옴
    this.state = nextState;
    this.render();
  };

  this.div = document.createElement("div");
  this.div.className = "Suggestion";
  target.appendChild(this.div);

  this.render = () => {
    const { items = [] } = this.state;
    if (items.length > 0) {
      this.div.style.display = "block";
      this.div.innerHTML = `
      <ul>
        ${items
          .map(
            (item, index) => `
            <li class="${index} ${
              this.state.selectedIndex === index ? "selected" : ""
            }" data-index="${index}">${item}</li>
        `
          )
          .join("")}
      </ul>
    `;
    } else {
      this.div.style.display = "none";
      this.div.innerHTML = "";
    }
  };
  // append vs apeendChild
  /// appendChild의 경우 노트요소만 추가할 수 있음
  /// aeepnd의 경우 노드요소와 돔스트링을 추가할 수 있음
}

export default function Suggestion({ target, initialState, onSelect }) {
  this.state = {
    selectedIndex: -1,
    items: initialState.items,
    onSelect,
  };

  this.setState = (nextState) => {
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
  window.addEventListener("keydown", (e) => {
    // if (this.state?.items?.length > 0) {
    //   if (e.key === "ArrowUp") {
    //     if (this.state.selectedIndex > 0) {
    //       this.state.selectedIndex -= 1;
    //     } else if (e.key === "ArrowDown") {
    //       if (this.state.selectedIndex < this.state.items.length - 1) {
    //         this.setState({
    //           ...this.state,
    //           this.state.selectedIndex: this.state.selectedIndex + 1,
    //         });
    //       }
    //     }
    //   }
    // }
    if (e.key === "Enter") {
      e.preventDefault();
      onSelect(this.state.items[this.state.selectedIndex]);
    }
  });

  // append vs apeendChild
  /// appendChild의 경우 노트요소만 추가할 수 있음
  /// aeepnd의 경우 노드요소와 돔스트링을 추가할 수 있음
}

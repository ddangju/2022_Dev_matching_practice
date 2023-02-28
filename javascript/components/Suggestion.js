export default function Suggestion({ target, initialState }) {
  
  this.state = {selectedIndex:0, items:initialState.items};

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
            <li class="${index === selectedIndex ? 'Suggestion__item--selected' : ''}" data-index="${index}">${item}</li>
        `
          )
          .join("")}
      </ul>
    `;
      // console.log(
      //   items
      //     .map(
      //       (item, index) => `
      //   <li data-index="${index}">${item}</li>
      // `
      //     )
      //     .join("")
      // );

      //
    } else {
      this.div.style.display = "none";
      this.div.innerHTML = "";
    }
  };

  this.div = document.createElement("div")
  this.div.className = "Sugeestion"
  target.appendChild(this.div)
  // append vs apeendChild 
  /// appendChild의 경우 노트요소만 추가할 수 있음
  /// aeepnd의 경우 노드요소와 돔스트링을 추가할 수 있음
  window.addEventListener("keyup",(e)=>{
    console.log(e,"<event")
  })
}

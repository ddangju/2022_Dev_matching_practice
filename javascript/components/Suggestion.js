export default function Suggestion({ target, initialState }) {
  this.state = initialState; 
  //// {items:[]}
  this.setState = (nextState) => {
    // {items:["1","2"]} 형태로 넘어옴
    this.state = nextState;
    this.render()
  };

  this.div = document.createElement("div")
  this.div.className = "Sugeestion"
  target.appendChild(this.div)
  // append vs apeendChild 
  /// appendChild의 경우 노트요소만 추가할 수 있음
  /// aeepnd의 경우 노드요소와 돔스트링을 추가할 수 있음

  console.log(target)
  
  this.render = () =>{
    const { items = [] } = this.state
    console.log(items,"items")
    if(items.length > 0) {
      this.div.style.display = "block"
      this.div.innerHTML = `
        <ul>
          ${items.map((item, idx)=>`
            <li data-idx="${idx}">${item}</li>
          `).join("")}
        </ul>
      `
    } else {
      this.div.style.display = "none"
      this.div.innerHTML = ""
    }
  }
}

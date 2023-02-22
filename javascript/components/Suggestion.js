export default function Suggestion({ target, initialState }) {
  this.state = initialState;
  this.setState = (nextState) => {
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
          <li data-index="${index}">${item}</li>
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
}

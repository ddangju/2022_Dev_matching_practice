// const SearchInput = ({$target}) => {
//   constructor()

// }

// export default SearchInput

// 위와 같이 arrow function으로 작성하면 x is not a contructor type error가 발생
//해당 객체 또는 변수가 생성자가 아닌 경우 나오는 에러인데,,,,아래와 같은 다른 형식의 함수인데 대체 왜,,,?
//화살표 함수와 new키워드는 허용하지 않는다!!!!!
export default function SearchInput({ target, initialState, onChange }) {
  //this를 변수처럼 사용 / this는 함수에게 바인딩 된다~
  this.form = document.createElement("form");
  this.form.className = "SearchInput";
  this.state = initialState;

  // APP테그 자식으로 form테그를 붙인다
  ///********appendchild경우에 node만 붙일 수 있다. 테그에 text는 추가할 수 없음 */
  target.appendChild(this.form);
  this.render = () => {
    this.form.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `;
  };
  this.render();

  this.form.addEventListener("keyup", (e) => {
    onChange(e.target.value);
  });
}

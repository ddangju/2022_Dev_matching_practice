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

  // 이 render함수는 innerHTML로 화면에 그리기 때문에 이름을 render로 붙임
  this.render = () => {
    this.form.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `;
  };

  this.render();

  this.form.addEventListener("keyup", (e) => {
    const actionIgnoreKeys = [
      "Enter",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];
    // actionIgnoreKeys으로 조건을 걸면 e.key가 눌릴때 fetch가 되기 때문에
    // input에 어떠한 값을 적용해도 suggestion 창이 뜨지 않는다..!왜냐면
    // e.key가 들어오지 않고 있기 떄문에~
    // 우리가 하려던 것은....화살표 위/아래, 엔터가 눌릴때마다 onChange함수가 실행되고 있는 부분을
    ///수정하려고한다..!
    //
    //화살표 키, 엔터가 포함되고 있지 않다면 onChange 호출
    //화살표 키, 엔터가 포함되고 있다면 true이기 떄문에 호출하지 않음..!
    if (actionIgnoreKeys.includes(e.key)) {
      console.log("true");
      onChange(e.target.value);
    }
  });
}

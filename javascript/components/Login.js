export default function Login({ target }) {
  const user_id = document.querySelector(".user_id");
  const user_pw = document.querySelector(".user_pw");
  const user_submit = document.querySelector(".user_submit");
  const form = document.querySelector(".form");
  // user_id.addEventListener("invalid", () => {
  //   // console.log(user_id.validity);
  //   user_id.setCustomValidity("커스텀메세지");
  // });
  const eventHandler = (e) => {
    // if (e.target.className === "user_id") {
    // } else if (e.target.className === "user_pw") {
    // }
    // switch (e.target.className) {
    //   case "user_id":
    //     if (e.target.value.length < 4 && e.target.value.includes("@")) {
    //       console.log("<<");
    //       user_id.setCustomValidity("아이디를 확인해주세요");
    //     }
    //     break;
    //   case "user_pw":
    //     console.log("pw");
    //     break;
    // }
    let value = e.target.value;
    let form = e.target.form;
    form.checkValidity();
    console.log(user_id.validity.rangeOverflow);

    if (value.length < 4 && value.includes("@")) {
      // user_id.setCustomValidity("커스텀메세지");
      user_id.setCustomValidity("커스텀메세지");
      user_id.reportValidity("커스텀메세지");
    } else {
      console.log("false");
    }
  };

  // keyup을 안쓰는 이유,,,특수문자는 두번 호출 됨....
  user_id.addEventListener("blur", eventHandler);
  // user_id.addEventListener("input", eventHandler);
  // user_id.addEventListener("input", eventHandler);
  // user_pw.addEventListener("change", eventHandler);
}

///>>구현하고싶었던 것
/// input에 값을 입력하고 focus가 해제될 때 유효성 검사
/// "blur"는 focus가 해제 될 때 이벤트 리스너를 불러오는 타입
/// htmlObject.setCustomValidity의 경우 커스텀 메세지를 등록
/// htmlObject.reportValidity는 커스텀을 등록한 메세지를 보여준다.
/// input테그에 pattern을 등록하면 validity.value값의 boolean여부를 판단할 수 있따.

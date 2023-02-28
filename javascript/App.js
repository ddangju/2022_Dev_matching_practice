import SearchInput from "./components/SearchInput.js";
import Suggestion from "./components/Suggestion.js";
import { fetchLanguages } from "./api/api.js";

export default function App({ target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  //setState는 뭐하는 함수일까?
  //초기값 state에 업데이트 되는 setState를 합치는 함수
  ///객체로 초기값을 지정해주고, 객체가 들어온다 => 객체의 복사와 관련
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({ items: this.state.fetchedLanguages, selectedIndex:0 });

    ///////*****풀어보자면? */
    // this.state = {
    //   {
  //   fetchedLanguages: [],
  //   selectedLanguages: [],
  // };,
    //   {
    //   fetchedLanguages: [languages],
  // target.append(this.div)
    // }
    // };
    // suggestion에 있는 setState업데이트
    //초기값인 items:[]를 업데이트
  };

  // ----초기값과 div 인스턴스 생성----
  new SearchInput({
    target,
    initialState: "",
    onChange: async (keyword) => {
      ///매번 함수가 실행되면서 내용이 새로 생성됨!
      // 만약 키워드가 없다면 빈 리스트
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages,
        });
      }
    },
  });
  const suggestion = new Suggestion({
    target,
    initialState: {
      items: [],
      cursor:0
    },
  });
}

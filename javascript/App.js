import SearchInput from "./components/SearchInput.js"
import {fetchLanguages } from "./api/api.js"

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: []  
  }

  this.setState = (nextState) => {
    // TODO: 구현해야함
  }


// ----초기값과 div 인스턴스 생성----
  new SearchInput({
    $target,
    initialState:"",
    onChange: async (keyword) =>{
      let languages = await fetchLanguages(keyword)
      console.log(languages,"<languages")
    }
  })
}



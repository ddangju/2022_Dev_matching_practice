export const API_END_POINT =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

// 요청 api이 언제 요청 되는것인지?
// 재사용성을 고려해야함
//fetch하는 request함수와 언어목록을 조회하는 함수를 분리함!\

const request = async (url) => {
  console.log(url, "<url");
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    return json;
  }
  throw new Error("요청 실패");
};
export const fetchLanguages = async (keyword) =>
  request(`${API_END_POINT}/languages?keyword=${keyword}`);

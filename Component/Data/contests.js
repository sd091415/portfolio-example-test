// Contest 에서 사용할 하위 컴포넌트들을 import 합니다.
import Contest1 from "../Contest/Contest1";
import Contest2 from "../Contest/Contest2";
import Contest3 from "../Contest/Contest3";

// 탭 이름과 내용을 객체 배열로 구성합니다.
const contests = [
  { tab: "Contest1", content: <Contest1 /> },
  { tab: "Contest2", content: <Contest2 /> },
  { tab: "Contest3", content: <Contest3 /> },
];
export default contests;
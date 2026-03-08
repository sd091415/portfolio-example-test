// Career 에서 사용할 하위 컴포넌트들을 import 합니다.
import Career1 from "../Career/Career1";
import Career2 from "../Career/Career2";
import Career3 from "../Career/Career3";

// 탭 이름과 내용을 객체 배열로 구성합니다.
const careers = [
  { tab: "Career1", content:<Career1 /> },
  { tab: "Career2", content:<Career2 /> },
  { tab: "Career3", content:<Career3 /> },
];
export default careers;

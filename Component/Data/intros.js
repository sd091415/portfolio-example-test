// introduction 에서 사용할 하위 컴포넌트들을 import 합니다.
import Intro1 from "../Introduction/Intro1";
import Intro2 from "../Introduction/Intro2";

// 탭 이름과 내용을 객체 배열로 구성합니다.
const intros = [
  { tab: "프로필", content: <Intro1 /> },
  { tab: "자기소개", content: <Intro2 /> },
];
export default intros;
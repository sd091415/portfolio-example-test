// Project 에서 사용할 하위 컴포넌트들을 import 합니다.
import Project1 from "../Project/Project1";
import Project2 from "../Project/Project2";
import Project3 from "../Project/Project3";
import Project4 from "../Project/Project4";

// 탭 이름과 내용을 객체 배열로 구성합니다.
const projects = [
  { tab: "Project1", content: <Project1 /> },
  { tab: "Project2", content: <Project2 /> },
  { tab: "Project3", content: <Project3 /> },
  { tab: "Project4", content: <Project4 /> },
];

export default projects;

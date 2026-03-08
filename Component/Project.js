import { useState } from "react";
import projects from "./Data/projects"; //projects 탭의 데이터들을 import 합니다

export default function Project() {
  // 현재 선택된 탭의 번호를 기억합니다.
  const [tabIndex, setTabIndex] = useState(0); 
  // 버튼 클릭시 tabIndex 값을 변경합니다.
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="project">
      {/* 배열을 순회하며 탭 버튼을 생성합니다. */}
      {projects.map((project, i) => (
        <button key={project.tab} onClick={contentChange} value={i}>
          {project.tab}
        </button>
      ))}
      {/* tabIndex에 해당하는 컨텐츠(Project1~4)를 표시합니다. */}
      <div style={{ marginTop: "1em" }}>{projects[tabIndex].content}</div>
    </div>
  );
}

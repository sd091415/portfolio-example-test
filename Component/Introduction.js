import { useState } from "react";
import intros from "./Data/intros"; // intros 탭의 데이터들을 import합니다.

export default function Introduction() {
  // 현재 선택된 탭의 번호를 기억합니다.
  const [tabIndex, setTabIndex] = useState(0);
  // 버튼 클릭시 tabIndex 값을 변경합니다.
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));

  return (
    <div>
      {/* 배열을 순회하며 탭 버튼을 생성합니다. */}
      {intros.map((intro, i) => (
        <button key={intro.tab} onClick={contentChange} value={i}>
          {intro.tab}
        </button>
      ))}
      
      {/* tabIndex에 해당하는 컨텐츠(Intro1, Intro2)를 표시합니다. */}
      <div style={{ marginTop: "1em" }}>{intros[tabIndex].content}</div>
    </div>
  );
}

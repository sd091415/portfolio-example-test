import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// 각 페이지의 컴포넌트들을 import합니다.
import Index from "./Component/Index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";
import Login from "./Component/Login";
import Board from "./Component/Board.js"; // Board는 Tailwind css스타일을 따릅니다.
import "./App.css"; // 스타일 태그는 따로 묶어둡니다.

export default function App() {
  /* 로그인 상태를 state를 통해 관리합니다. */
  const [userName, setUserName] = useState(null); // null은 로그아웃 상태를 의미합니다.
  const [visitCount, setVisitCount] = useState(0); // 누적 방문자 수 상태를 관리합니다.

  // 앱이 실행되자마자 localStorage에서 방문자 수를 가져옵니다.
  useEffect(() => {
    const savedCount = localStorage.getItem("visitCount");
    if (savedCount) {
      setVisitCount(parseInt(savedCount, 10));
    }
  }, []); // 의존성 배열로서 컴포넌트가 처음 마운트 될 때 한번만 실행됩니다.

  // 자식(Login.js)에서 함수 호출시 부모의 userName 변경합니다.
  const handleLoginSuccess = (name) => { 
    setUserName(name);
    // 로그인이 성공할경우 visitCount를 1 증가시키고 저장합니다. 
    if (name) { 
        const newCount = visitCount + 1;
        setVisitCount(newCount);
        localStorage.setItem("visitCount", newCount); 
    }
  }
  return (
    // 브라우저 url과 연동되는 라우팅을 활성화합니다.
    <BrowserRouter>
      {/* 헤더는 모든 페이지에 상단에 공통으로 표시됩니다.*/}
      <header> 
        <Link to="/"> {/* 클릭 시 홈(/)으로 이동합니다*/}
          홍준표의 portfolio <br />
          "준비된 개발자"
        </Link>
      </header>

      {/* container는 nav와 main영역을 나눕니다.*/}
      <div className="container">
        <nav> {/* 페이지 이동을 위한 링크입니다. */}
          {/* 로그인 상태 시 출력됩니다. */}
          {userName && (
            <div>
              <span> {userName}님 반갑습니다.</span>
              <br />
                <span> {/* 누적 방문자 수는 로그인 시마다 업데이트 됩니다. */}
                  누적 방문자:{visitCount}명
                </span>
            </div>
          )}
          <Link to="/login">로그인</Link>
          <Link to="/introduction">나의 소개</Link>
          <Link to="/project">프로젝트</Link>
          <Link to="/contest">공모전</Link>
          <Link to="/career">나의 경력</Link>
          <Link to="/board">게시판</Link>
        </nav>

        <main> {/* 경로에 따른 실제로 이동 될 페이지입니다. */}
          <Routes>
            <Route path="/" element={<Index />} />
            {/* handleLoginSuccess함수와 userName을 props 전달하여 로그인 여부를 확인할 수 있게 합니다. */}
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} loggedInUser={userName}/>} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/career" element={<Career />} />
            <Route path="/board" element={<Board userName={userName} />} /> {/* userName을 props로 전달합니다. */}
          </Routes>
        </main>
      </div>

      <footer>
        <i>
          Copyright 2023. 지은이 all rights reserved.
          <br />
          연락처 : 010-2609-1796
        </i>
      </footer>
    </BrowserRouter>
  );
}

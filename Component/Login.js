import React, { useState, useEffect } from 'react';

// App.js로부터 { onLoginSuccess } prop을 받습니다.
export default function Login({ onLoginSuccess, loggedInUser }) {
  // id, password를 state 형식으로 저장합니다.
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 유지상태를 state 형식으로 저장합니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  
  // 로그인 후의 화면 설정을 state 형식으로 저장합니다.
  const [viewMode, setViewMode] = useState("WELCOME");
  
  // 회원정보를 state 형식으로 저장합니다.
  const [profileData, setProfileData] = useState({
    name: "",
    id: "",
    password: "",
    mobile: "",
    zipCode: "",
    address: ""
  });

  // 컴포넌트가 마운트 할 때 loggedInUser 값이 있는지 확인합니다.
  useEffect(() => {
    if (loggedInUser) {
      // 부모(App.js)가 기억하는 유저 정보가 있다면
      setIsLoggedIn(true);       // 로그인 상태를 true로 변경한 뒤
      setUserName(loggedInUser); // 유저 이름을 설정하고
      setViewMode("WELCOME");    // WELCOME모드로 설정하여 화면을 출력합니다.
      
      // 유저 데이터도 같이 채웁니다.
      if (loggedInUser === "홍준표") {
        setProfileData({
          name: "홍준표", 
          id: "sd091415", 
          password: "ghdwnsvy", 
          mobile: "010-2609-1796", 
          postNumber: "19989", 
          address: "서울특별시 광진구 광장동 아차산로 185길 98" 
        });
      }
    }
  }, [loggedInUser]); // loggedInUser 값이 변하거나 처음에 들어올 때 실행됩니다.

  // 로그인 버튼 클릭시 실행됩니다.
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // id와 password를 미리 설정하고 이것이 맞을 시 로그인이 true가 되어 로그인이 성공합니다.
    if (id === "sd091415" && password === "ghdwnsvy") {
      setIsLoggedIn(true);
      setUserName("홍준표"); // 유저 이름을 홍준표로 전환합니다.
      setViewMode("WELCOME"); // 먼저 로그인 성공 시 WELCOME 모드로 설정

      // 프로필 데이터를 업데이트 합니다.
      setProfileData({
        name: "홍준표", 
        id: "sd091415", 
        password: "ghdwnsvy", 
        mobile: "010-2609-1796", 
        postNumber: "19989", 
        address: "서울특별시 광진구 광장동 아차산로 185길 98" 
      });
      
      if (onLoginSuccess) { // 로그인 성공시 부모에게 로그인 성공을 전달합니다.
        onLoginSuccess("홍준표");
      }
    } else { // 실패시 노출됩니다.
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  // 로그아웃 버튼 누를 시 작동합니다.
  const handleLogout = () => {
    setIsLoggedIn(false); // false로 전환되어 페이지 전환됩니다.
    setUserName(''); // 유저이름도 공백처리됩니다.
    if (onLoginSuccess) { // 부모에게도 로그아웃을 전달합니다.
      onLoginSuccess(null); 
    }
  };

  // 회원정보 수정 폼의 입력값을 처리하는 이벤트 핸들러입니다.
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 회원정보 '저장' 버튼 클릭 시 CRUD가 작동합니다.
  // 여기서 DELETE는 공백으로 저장하여 작동시킵니다.
  const handleProfileSave = (e) => {
    e.preventDefault();
    alert("정보가 수정되었습니다.");
    setViewMode("WELCOME"); // 저장 후 다시 WELCOME 모드로 돌아갑니다.
  };

  // 뒤로가기 버튼 클릭 시 역시 WLECOME모드가 작동합니다.
  const handleGoBack = () => {
    setViewMode("WELCOME");
  };


  if (isLoggedIn) { // 로그인 성공시

    if (viewMode === 'WELCOME') { //WELCOME 모드에서 
      return (
        <div className="login-container">
          <h2 className="login-title">{userName}님 반갑습니다.</h2>
          
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p>로그인 상태입니다.</p>
            <button 
              type="button" 
              onClick={() => setViewMode('EDIT_PROFILE')}
            >
              회원정보 수정
            </button>
            <button 
              type="button" 
              onClick={handleLogout} // 로그아웃이 실행 됩니다.
              className="btn-danger" // 로그아웃 버튼의 스타일을 따로 적용합니다.
            >
              로그아웃
            </button>
          </div>
        </div>
      );
    } 
    
    if (viewMode === 'EDIT_PROFILE') { // "EDIT_PROFILE" 모드에서
      return (
        <div className="login-container">
          <h2 className="login-title">회원정보 수정</h2>
          
          <form className="profile-form" onSubmit={handleProfileSave}>
            <table className="profile-table">
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>
                    <input 
                      type="text" 
                      name="name"
                      value={profileData.name} 
                      onChange={handleProfileChange}
                      className="login-input" 
                    />
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input 
                      type="text" 
                      name="id"
                      value={profileData.id} 
                      onChange={handleProfileChange}
                      className="login-input" 
                      readOnly // 아이디는 수정불가능하게 만듭니다.
                    />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <input 
                      type="password" 
                      name="password"
                      value={profileData.password} 
                      onChange={handleProfileChange}
                      className="login-input" 
                    />
                  </td>
                </tr>
                <tr>
                  <th>휴대폰 번호</th>
                  <td>
                    <input 
                      type="tel" 
                      name="mobile"
                      value={profileData.mobile} 
                      onChange={handleProfileChange}
                      className="login-input" 
                    />
                  </td>
                </tr>
                <tr>
                  <th>우편번호</th>
                  <td>
                    <input 
                      type="text" 
                      name="postNumber"
                      value={profileData.postNumber} 
                      onChange={handleProfileChange}
                      className="login-input" 
                    />
                  </td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>
                    <input 
                      type="text" 
                      name="address"
                      value={profileData.address} 
                      onChange={handleProfileChange}
                      className="login-input" 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="profile-actions">
              <button type="submit" style={{backgroundColor: '#4a90e2'}}>저장</button>
              <button 
                type="button" 
                onClick={handleGoBack} 
                style={{backgroundColor: '#6c757d'}}
              >
                뒤로가기
              </button>
            </div>
          </form>
        </div>
      );
    }
  }

  // 로그아웃시와 로그인 전의 화면
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label htmlFor="login-id" className="login-label">아이디</label>
          <input
            type="text"
            id="login-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="login-input"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="login-password" className="login-label">비밀번호</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
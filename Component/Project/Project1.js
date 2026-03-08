import React, { useState } from 'react';

export default function Project1() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>암호 생성기 만들기 프로젝트</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legend>암호 생성기</legend>
          <div>
            <p>암호 생성기는 난수 생성기로부터 입력을 받아 자동으로 비밀번호를 생성하는 소프트웨어 프로그램이나 하드웨어 장치를 말합니다.</p>
            <p>임의의 문자열을 기억하기 쉬운 비밀번호로 가역적으로 변환하여 기억의 용이성을 향상시킵니다.</p>

            <img src="/image/Project1_image.png" alt="project1" />
          </div>
        </fieldset>
      )}
    </div>
  );
}

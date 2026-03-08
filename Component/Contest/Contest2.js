import React, { useState } from 'react';

export default function Contest2() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>새싹 해커톤 참가</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legend>새싹 해커톤</legend>
          <div>
            <p>새싹 해커톤은 서울시의 청년취업사관학교가 주관하는 청년 대상의 IT 개발 경진대회입니다.</p>
            <p>이 대회에서는 기획자, 디자이너, 개발자가 함께 모여 정해진 시간 안에 서울의 미래를 바꿀 아이디어를 기획하고 기술을 활용해 서비스 구현하는 것까지가 목표입니다.</p>
            <p>새싹 해커톤의 특이사항으로는 위에서 말한 바와 같이 서비스 구현하는 것까지가 목표라는 점입니다.</p>

            <img src="/image/Contest2_image.jpeg" alt="contest2" />
        </div>
        </fieldset>
      )}
    </div>
  );
}
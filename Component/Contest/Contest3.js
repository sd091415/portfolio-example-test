import React, { useState } from 'react';

export default function Contest3() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>삼성 AI Challenge 참가</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legend>삼성 AI Challenge</legend>
          <div>
            <p>삼성 AI Challenge는 삼성전자가 미래 AI 기술을 선도할 우수 인재를 발굴하고 육성하기 위해 개최하는 AI 기술 경진 대회입니다.</p>
            <p>주요 특징으로는 실제 산업 문제 해결과 밀접하며 다양한 분야의 주제를 가지고 경진 대회를 펼친다는 것입니다.</p>
            <p>예시로 2025년에는 AI Co-Scientist 와 거대 모델 경량화가 주제였습니다.</p>

            <img src="/image/Contest3_image.png" alt="contest3" />
          </div>
        </fieldset>
      )}
    </div>
  );
}
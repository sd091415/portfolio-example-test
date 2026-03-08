import React, { useState } from 'react';

export default function Project3() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>기상예보 시스템 만들기 프로젝트</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legend>기상예보 시스템</legend>
          <div>
            <p>기상예보 시스템 제작시에 관측되어 수집되고 분석된 자료를 날짜에 맞추어 올리도록 설정합니다.</p>
            <p>이 개발에서 기상예보의 전달의 역할을 맡게 됩니다.</p>

            <img src="/image/Project3_image.png" alt="project3" />
          </div>
        </fieldset>
      )}
    </div>
  );
}
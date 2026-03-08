import React, { useState } from 'react';

export default function Project4() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>이미지 인식 프로젝트</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legend>이미지 인식</legend>
          <div>
            <p>이미지 인식이란 컴퓨터가 디지털 이미지나 동영상에서 객체, 장소, 사람, 글씨 등을 식별하고 분석하는 기술입니다.</p>
            <p>AI는 이미지를 픽셀의 배열로 인식하고 이 픽셀에 있는 정보를 습득하여 패턴과 특징을 통해 무엇인지 판단합니다.</p>
            <p>이에 따른 주요 사례로는 자율주행, 안면인식, 의료진단 등이 있습니다.</p>

            <img src="/image/Project4_image.jpg" alt="project4" />
          </div>
        </fieldset>
      )}
    </div>
  );
}
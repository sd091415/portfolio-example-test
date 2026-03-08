import React, { useState } from 'react';

export default function Contest1() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>국제 대학생 프로그래밍 대회 (ICPC) 참가</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legend> ICPC </legend>
          <div>
            <p>ICPC는 전 세계 대학생들이 3인 1팀으로 참가하여 문제 해결 능력을 기르는 대회입니다.</p>
            <p>매년 6개 대륙에서 지역 예선이 열리며 최종적으로 세계 최고의 팀을 가리는 월즈 파이널로 마무리가 됩니다.</p>
            <p>ICPC의 특이사항에 최대 25장의 인쇄된 참고 자료를 허용합니다.</p>

            <img src="/image/Contest1_image.png" alt="contest1" />
          </div>
        </fieldset>
      )}
    </div>
  );
}
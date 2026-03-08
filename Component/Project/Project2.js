import React, { useState } from 'react';

export default function Project2() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
      <p>웹 개발 프로젝트</p>

      <button onClick={handleToggle}>
        {isOpen ? '숨기기' : '자세히 보기'}
      </button>

      {isOpen && (
        <fieldset>
          <legned>웹 개발</legned>
          <div>
            <p>웹 개발이란 인터넷과 같은 사용자들이 접근 할 수 있는 웹사이트를 만들고 관리하는 과정까지를 말합니다.</p>
            <p>하지만 우선적으로 만드는 과정만 처리합니다.</p>
            <p>이 과정에서 언어는 js를 사용하였습니다.</p>

            <img src="/image/Project2_image.jpg" alt="project2" />
          </div>
        </fieldset>
      )}
    </div>
  );
}
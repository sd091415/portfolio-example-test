import React, { useState } from "react";

export default function Board({ userName }) {
  const [posts, setPosts] = useState([ // 게시글의 목록을 state를 통해 관리합니다.
    { id: 1, title: "자유게시판입니다.", content: "로그인하고 자유롭게 글을 써주세요", author: "공지사항" },
  ]); // 첫 글을 통해 공지합니다.
  
  // 입력하는 공간을 state를 통해 관리합니다.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 추가하기 클릭 시 작동하여 작성되어 있는 글이 목록에 추가됩니다.
  const handleAdd = () => {
    // 제목이나 내용이 공백일경우 작성되지 않습니다.
    if (!title.trim() || !content.trim()) return;

    // 게시글의 id는 이전값보다 큰 값으로 지정합니다.
    const newId = posts[posts.length - 1].id + 1;

    // 새 게시글 객체를 생성합니다.
    const newPost = {
      id: newId,
      title: title,
      content: content,
      author: userName, // props로 받은 이름을 사용합니다.
    };

    // 게시글의 목록에 새 게시글을 넣습니다.
    setPosts([...posts, newPost]);

    // 이후에 초기화합니다.
    setTitle("");
    setContent("");
  };

  // 삭제하기 클릭 시 작동합니다
  const handleDelete = (id) => {
    // post를 순환하며 선택한 id와 다른 값들은 전부 남깁니다.
    setPosts(posts.filter((post) => post.id !== id));
  };


  // Tailwind css스타일을 활용하여 작성하였습니다.
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📘 게시판</h2>

      {/* 글쓰기 영역으로 로그인 상태일 때만 표시가 됩니다. */}
      {/*userName이 props로 받아 존재할 경우 True, null 값일 경우 fasle로 간주됩니다.*/}
      {userName ? (
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-100">
          <p className="mb-2 text-gray-600 font-medium">작성자: {userName}</p>
          <input
            className="w-full border border-gray-300 p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-300 p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition h-24 resize-none"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md transform hover:-translate-y-1"
            onClick={handleAdd}
          >
            추가하기
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-600 text-center p-6 rounded-xl mb-8 border border-gray-200">
          로그인해야 글을 작성할 수 있습니다.
        </div>
      )}

      {/* 게시글 목록에서 게시글이 표시됩니다. */}
      <ul className="space-y-4">
        {posts.length === 0 ? ( 
          // 게시글이 없을 때 출력됩니다.
          <p className="text-center text-gray-500">작성된 게시글이 없습니다.</p>
        ) : (
          posts.map((post) => (
            <li
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200 flex justify-between items-start"
            >
              <div className="flex-1 pr-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-gray-800">{post.title}</h4>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {post.author}
                  </span>
                </div>
                <p className="text-gray-600 whitespace-pre-wrap">{post.content}</p>
              </div>
              {/* 게시글의 작성자가 본인과 같을 때만 삭제 버튼이 보입니다. */}
              {userName === post.author && (
                <button
                  className="!bg-red-500 hover:!bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition shadow-sm flex-shrink-0 ml-2"
                  onClick={() => handleDelete(post.id)}
                  style={{ 
                    margin: 0, 
                    backgroundImage: 'none', 
                    backgroundColor: '#ef4444' 
                  }} 
                >
                  삭제
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
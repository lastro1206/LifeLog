import React, { useState } from 'react';
import { ButtonBox, InputBox, Title  } from '../../Styled/Styled';

function SnsUpload() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleAddPost = () => {
    const newPost = { id: Date.now(), title, content, date };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id); // filter : post 배열 순회 하면서 post.id와 id가 일치하지 않는 것들만 남긴 새로운 배열 생성
    setPosts(updatedPosts);
  };

  const handleEditPost = (id, updatedPost) => {
    const updatedPosts = posts.map((post) => { // map : post 배열 순회하면서 만약 post.id와 id가 일치하면 업데이트 된 배열로 대체하고 아니라면 변경하지 않음
      if (post.id === id) {
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>SNS</h1>
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <ButtonBox onClick={handleAddPost}>업로드</ButtonBox>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <div>{post.date}</div>
            <ButtonBox onClick={() => handleDeletePost(post.id)} style={{ marginRight: "2px" }}>삭제</ButtonBox>
            <ButtonBox onClick={() => handleEditPost(post.id, { ...post, title: '수정된 제목' })}>수정</ButtonBox> {/* ...(전개 연산자): post객체의 모든 속성과 값을 그대로 유지 후 나머지 객체 생성 */}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnsUpload;
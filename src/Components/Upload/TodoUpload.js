import React, { useState } from 'react';
import { ButtonBox, InputBox, Title  } from '../../Styled/Styled';

function TodoUpload() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
  
    const handleAddTodo = () => {
      const newTodo = { id: Date.now(), text, date };
      setTodos([...todos, newTodo]);
      setText('');
      setDate('');
    };
  
    const handleDeleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id); // filter를 사용해 todos 배열 순회하면서 todo.id와 id가 일치하지 않는 할 일들만 남긴 새로운 배열 생
      setTodos(updatedTodos);
    };
  
    const handleEditTodo = (id, updatedTodo) => {
      const updatedTodos = todos.map((todo) => { // map : todos 배열 순회하면서 todo.id와 id가 일치한다면 업데이트된 배열로 대체하고 아니라면 변경하지 않음
        if (todo.id === id) {
          return updatedTodo;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    
  
    return (
      <div>
        <h1>Todo</h1>
        <div>
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div><ButtonBox onClick={handleAddTodo}>추가</ButtonBox></div>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div>{todo.text}</div>
              <div>{todo.date}</div>
              <ButtonBox onClick={() => handleDeleteTodo(todo.id)}>삭제</ButtonBox>
              <ButtonBox onClick={() => handleEditTodo(todo.id, { ...todo, text: '수정된 할 일' })}>수정</ButtonBox>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default TodoUpload;
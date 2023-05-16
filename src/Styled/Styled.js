import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const RegisterLink = styled(Link)`
      color: #57CDF2;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
      margin-left : 74px;
    `;

 export const ButtonBox = styled.button`
    border-top : none;
    border-left : none;
    border-right : none;
    border-bottom : none;
`;

export const InputBox = styled.input`
  padding: 0.5rem;
  width : 200px;
  border-top : none;
  border-left : none;
  border-right : none;
  border-bottom : 3px solid black;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  color: #dc3545;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #c82333;
  }
`;

export const EditButton = styled.button`
  font-size: 16px;
  color: #1e90ff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;


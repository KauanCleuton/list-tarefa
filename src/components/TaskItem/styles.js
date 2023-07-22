import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 150px;
`;

export const TaskTitle = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 10px 18px;
  background-color: #f44336;
  color: #fff;
  font-size: 13px;
  border: none;
  cursor: pointer;
`;
